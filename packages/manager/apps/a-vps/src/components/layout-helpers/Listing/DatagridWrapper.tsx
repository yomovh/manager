import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { OsdsDatagrid } from '@ovhcloud/ods-components/datagrid/react';
import { OsdsLink } from '@ovhcloud/ods-components/link/react';
import { OsdsIcon } from '@ovhcloud/ods-components/icon/react';
import { OsdsButton } from '@ovhcloud/ods-components/button/react';
import { OsdsMenu, OsdsMenuItem } from '@ovhcloud/ods-components/menu/react';
import {
  OsdsTooltip,
  OsdsTooltipContent,
} from '@ovhcloud/ods-components/tooltip/react';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { ReactFormatter } from '@ovh-ux/manager-core-utils';
import appConfig from '@/a-vps.config';
import ConfigInterface from '@/configInterface';
import useIAM from '@/hooks/useIam';

interface LinkServiceInterface {
  cellData?: string;
  onClick?: any;
}

interface DatagridWrapperInterface {
  data: any[];
}

function LinkService({ cellData, onClick }: LinkServiceInterface) {
  return (
    <OsdsLink
      color={ODS_THEME_COLOR_INTENT.primary}
      onClick={() => onClick(cellData)}
    >
      {cellData}
    </OsdsLink>
  );
}

function MenuWrapper({ cellData, rowData, cell, iam }: any) {
  return (
    <OsdsMenu>
      <OsdsButton slot="menu-title" circle color="info" size="xs">
        <OsdsIcon name="ellipsis" size="xs" contrasted={true} />
        {/* <OsdsIcon name="ellipsis" size="xs" color="default" /> */}
        {/* {cellData.id} */}
      </OsdsButton>
      <OsdsMenuItem>
        <OsdsButton
          color="primary"
          size="sm"
          variant="ghost"
          text-align="start"
        >
          <span slot="start">
            <span>Reboot</span>
            {iam &&
            cellData.id in iam &&
            iam[cellData.id].authorizedActions.indexOf('vps:apiovh:reboot') >
              -1 ? (
              <span>
                <OsdsIcon name="ok" size="xs" color="info" />
              </span>
            ) : (
              <span>
                <OsdsIcon name="close" size="xs" color="info" />
              </span>
            )}
          </span>
        </OsdsButton>
      </OsdsMenuItem>
      <OsdsMenuItem>
        <OsdsButton
          color="primary"
          size="sm"
          variant="ghost"
          text-align="start"
        >
          <span slot="start">
            <span>Rebuild</span>
            {iam &&
            cellData.id in iam &&
            iam[cellData.id].authorizedActions.indexOf('vps:apiovh:rebuild') >
              -1 ? (
              <span>
                <OsdsIcon name="ok" size="xs" color="info" />
              </span>
            ) : (
              <span>
                <OsdsIcon name="close" size="xs" color="info" />
              </span>
            )}
          </span>
        </OsdsButton>
      </OsdsMenuItem>
      <OsdsMenuItem>
        <OsdsButton
          color="primary"
          size="sm"
          variant="ghost"
          text-align="start"
        >
          <span slot="start">
            <span>Reinstall</span>
            {iam &&
            cellData.id in iam &&
            iam[cellData.id].authorizedActions.indexOf('vps:apiovh:reinstall') >
              -1 ? (
              <span>
                <OsdsIcon name="ok" size="xs" color="info" />
              </span>
            ) : (
              <span>
                <OsdsIcon name="close" size="xs" color="info" />
              </span>
            )}
          </span>
        </OsdsButton>
      </OsdsMenuItem>
      <OsdsMenuItem>
        <OsdsTooltip>
          <OsdsTooltipContent slot="tooltip-content">
            Pas les droits
          </OsdsTooltipContent>
          <OsdsButton
            color="primary"
            size="sm"
            variant="ghost"
            text-align="start"
            disabled
          >
            <span slot="start">
              <span>Delete</span>
              <span>
                <OsdsIcon name="close" size="xs" color="info" />
              </span>
            </span>
          </OsdsButton>
        </OsdsTooltip>
      </OsdsMenuItem>
    </OsdsMenu>
  );
}

function DatagridFormatter({ serviceKey, elem, navigate, cellData, iam }: any) {
  if (elem === 'iam') {
    return ReactFormatter(<MenuWrapper iam={iam} />);
  }
  if (serviceKey && elem === serviceKey) {
    return ReactFormatter(
      <LinkService
        onClick={(cellDato: string) => {
          navigate(`/${cellDato}`);
        }}
      />,
    );
  }
  return cellData;
}

export default function DatagridWrapper({ data }: DatagridWrapperInterface) {
  const navigate = useNavigate();
  const myConfig: ConfigInterface = appConfig;
  const serviceKey = myConfig.listing?.datagrid?.serviceKey;
  const tmp = Object.assign(data, {});
  const keys = Object.keys(tmp[0]);

  // IAM
  const [urns, setUrns] = useState([]);
  const actionsPage = myConfig?.iam?.listing;
  const iam = useIAM({ urns, actionsPage });
  console.info('useIam results : ', iam);

  useEffect(() => {
    if (data) {
      // IAM
      const tmp2: any = data.map((elem: any) => {
        return {
          urn: elem.iam.urn,
          id: elem.iam.id,
        };
      });
      setUrns(tmp2);
    }
  }, [data]);

  const tmpColumns = keys.filter((element) => element !== 'iam');
  tmpColumns.push('iam');
  const columns = tmpColumns.map((elem) => ({
    title: elem === 'iam' ? 'actions' : elem,
    field: elem,
    isSortable: false,
    formatter: DatagridFormatter({ serviceKey, elem, navigate, iam }),
  }));

  console.info('data : ', data);

  return (
    <>
      {columns && data && data.length > 0 && (
        <OsdsDatagrid
          hasHideableColumns={undefined}
          height={53 * (data.length + 1)}
          columns={columns}
          rows={data}
        />
      )}
    </>
  );
}
