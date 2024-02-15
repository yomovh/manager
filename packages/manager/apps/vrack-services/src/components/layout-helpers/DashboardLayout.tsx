import React from 'react';
import {
  Outlet,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  OsdsTabs,
  OsdsTabBar,
  OsdsTabBarItem,
  OsdsMessage,
  OsdsText,
} from '@ovhcloud/ods-components/react';
import {
  ODS_MESSAGE_TYPE,
  ODS_TEXT_LEVEL,
  ODS_TEXT_SIZE,
} from '@ovhcloud/ods-components';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import { useTranslation } from 'react-i18next';
import { PageLayout } from './PageLayout';
import { useVrackService } from '@/utils/vs-utils';
import { ResourceStatus, updateVrackServicesQueryKey } from '@/api';
import { CreationSuccessMessage } from '@/components/CreationSuccessMessage';
import { getSubnetCreationMutationKey } from '@/pages/subnets/constants';
import { getEndpointCreationMutationKey } from '@/pages/endpoints/constants';

export type DashboardTabItemProps = {
  name: string;
  title: string;
  to: string;
};

export type DashboardLayoutProps = {
  tabs: DashboardTabItemProps[];
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ tabs }) => {
  const { t } = useTranslation('vrack-services/dashboard');
  const { id } = useParams();
  const [activePanel, setActivePanel] = React.useState('');
  const vrackServices = useVrackService();
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const activeTab = tabs.find((tab) => tab.to === location.pathname);
    if (activeTab) {
      setActivePanel(activeTab.name);
    } else if (location.pathname === '') {
      setActivePanel(tabs[0].name);
      navigate(tabs[0].to);
    }
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="py-4">
        <OsdsText
          className="block mb-5"
          level={ODS_TEXT_LEVEL.heading}
          color={ODS_THEME_COLOR_INTENT.text}
          size={ODS_TEXT_SIZE._600}
        >
          {t('title')}
        </OsdsText>
        <OsdsText
          className="block mb-8"
          level={ODS_TEXT_LEVEL.body}
          color={ODS_THEME_COLOR_INTENT.default}
          size={ODS_TEXT_SIZE._400}
        >
          {t('description')}
        </OsdsText>
        {[
          ResourceStatus.CREATING,
          ResourceStatus.UPDATING,
          ResourceStatus.DELETING,
          ResourceStatus.ERROR,
        ].includes(vrackServices.data?.resourceStatus) && (
          <OsdsMessage type={ODS_MESSAGE_TYPE.info} className="mb-8">
            {t('vrackServicesNotReadyInfoMessage')}
          </OsdsMessage>
        )}
        <CreationSuccessMessage
          message={t('subnetCreationSuccess', {
            cidr:
              vrackServices.data?.targetSpec?.subnets?.[
                vrackServices.data?.targetSpec.subnets.length - 1
              ]?.cidr,
            interpolation: { escapeValue: false },
          })}
          mutationKey={updateVrackServicesQueryKey(
            getSubnetCreationMutationKey(id),
          )}
        />
        <CreationSuccessMessage
          message={t('endpointCreationSuccess')}
          mutationKey={updateVrackServicesQueryKey(
            getEndpointCreationMutationKey(id),
          )}
        />
      </div>
      <OsdsTabs panel={activePanel}>
        <OsdsTabBar slot="top">
          {tabs.map((tab: DashboardTabItemProps) => (
            <NavLink
              to={tab.to}
              className="no-underline"
              key={`osds-tab-bar-item-${tab.name}`}
            >
              <OsdsTabBarItem panel={tab.name}>{tab.title}</OsdsTabBarItem>
            </NavLink>
          ))}
        </OsdsTabBar>
      </OsdsTabs>
      <Outlet />
    </PageLayout>
  );
};
