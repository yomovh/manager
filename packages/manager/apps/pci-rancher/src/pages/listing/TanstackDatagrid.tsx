import React, { useMemo, useState, HTMLProps } from 'react';
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  flexRender,
} from '@tanstack/react-table';
import { RessourceStatus } from '@/api/api.type';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  OsdsLink,
  OsdsText,
  OsdsChip,
  OsdsSpinner,
  OsdsButton,
  OsdsMenu,
  OsdsMenuItem,
  OsdsIcon,
  OsdsPopover,
  OsdsPopoverContent,
} from '@ovhcloud/ods-components/react';
import {
  ODS_TEXT_LEVEL,
  ODS_TEXT_SIZE,
  ODS_SPINNER_SIZE,
  ODS_BUTTON_SIZE,
  ODS_BUTTON_TYPE,
  ODS_BUTTON_VARIANT,
  ODS_ICON_NAME,
  ODS_ICON_SIZE,
  ODS_CHIP_VARIANT,
} from '@ovhcloud/ods-components/';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import './TanstackDatagrid.scss';
import TanstackDiv from './TanstackDiv';
import TanstackTable from './TanstackTable';
import TanstackSelectable from './TanstackSelectable';

// Define your row shape
interface Rancher {
  name: string;
  serviceLevel: string;
  version: string;
  numberOfCpu: string;
  status: string;
  actions: any;
  ordering?: any;
}

function IndeterminateCheckbox({
  indeterminate,
  className = '',
  ...rest
}: { indeterminate?: boolean } & HTMLProps<HTMLInputElement>) {
  const ref = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return (
    <div className="row-selectable">
      <input
        type="checkbox"
        ref={ref}
        className={className + ' cursor-pointer'}
        {...rest}
      />
    </div>
  );
}

export function TanstackDatagrid({ data }: any) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const dato: Rancher[] = React.useMemo(
    () =>
      data?.map((elem: any) => ({
        id: elem?.id,
        name: elem?.currentState?.name,
        serviceLevel: elem?.currentState?.plan,
        version: elem?.currentState?.version,
        numberOfCpu: elem?.currentState?.numberOfCpu,
        status: elem?.resourceStatus,
        actions: '',
        ordering: '',
      })),
    [data],
  );

  const datoo: Rancher[] = React.useMemo(
    () =>
      data?.map((elem: any) => ({
        id: elem?.id,
        name: elem?.currentState?.name,
        serviceLevel: elem?.currentState?.plan,
        version: elem?.currentState?.version,
        numberOfCpu: elem?.currentState?.numberOfCpu,
        status: elem?.resourceStatus,
        actions: '',
      })),
    [data],
  );

  const columns: ColumnDef<Rancher>[] = useMemo(
    () => [
      {
        header: 'Name',
        accessorKey: 'name', // accessorKey is the key from the data
        cell: () => <div>Toto coucou</div>,
      },
      {
        header: 'Service Level',
        accessorKey: 'serviceLevel', // accessorKey is the key from the data
      },
      {
        header: 'Rancher version',
        accessorKey: 'version', // accessorKey is the key from the data
      },
      {
        header: 'Number of CPU',
        accessorKey: 'numberOfCpu', // accessorKey is the key from the data
      },
      {
        header: 'Status',
        accessorKey: 'status', // accessorKey is the key from the data
      },
      {
        header: 'Actions',
        accessorKey: 'actions', // accessorKey is the key from the data
      },
      {
        header: 'Ordering',
        accessorKey: 'ordering', // accessorKey is the key from the data
      },
    ],
    [],
  );

  const [rowSelection, setRowSelection] = React.useState({});
  const columns2: ColumnDef<Rancher>[] = useMemo(
    () => [
      {
        id: 'select',
        accessorKey: 'selectable',
        header: ({ table }) => (
          <IndeterminateCheckbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: row.getIsSelected(),
                disabled: !row.getCanSelect(),
                indeterminate: row.getIsSomeSelected(),
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      },
      {
        header: 'Name',
        accessorKey: 'name', // accessorKey is the key from the data
      },
      {
        header: 'Service Level',
        accessorKey: 'serviceLevel', // accessorKey is the key from the data
      },
      {
        header: 'Rancher version',
        accessorKey: 'version', // accessorKey is the key from the data
      },
      {
        header: 'Number of CPU',
        accessorKey: 'numberOfCpu', // accessorKey is the key from the data
      },
      {
        header: 'Status',
        accessorKey: 'status', // accessorKey is the key from the data
      },
      {
        header: 'Actions',
        accessorKey: 'actions', // accessorKey is the key from the data
      },
    ],
    [],
  );

  if (dato) {
    const table = useReactTable({
      columns,
      data: dato,
      state: { sorting },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
    });
    const table2 = useReactTable({
      columns: columns2,
      data: datoo,
      state: { sorting },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
    });
    return (
      <div>
        <div>
          <h2>Column Ordering</h2>
          <div>{table && <ColumnOrdering table={table} />}</div>
          <br />
          <br />
        </div>
        <h2>Test Tanstack Datagrid - avec Table</h2>
        <div>
          <TanstackTable table={table} dato={dato} />
        </div>
        <br />
        <br />
        <h2>Test Tanstack Datagrid - Selectable</h2>
        <div>
          <TanstackSelectable table={table2} dato={datoo} />
        </div>
        <br />
        <br />
      </div>
    );
  }
  return <div>Tanstack empty</div>;
}

export function OrderingPopover({ table }: any) {
  return (
    <OsdsPopover>
      <span slot="popover-trigger">
        <OsdsButton
          size={ODS_BUTTON_SIZE.sm}
          variant={ODS_BUTTON_VARIANT.ghost}
        >
          <OsdsIcon
            name={ODS_ICON_NAME.SETTINGS}
            size={ODS_ICON_SIZE.sm}
            color={ODS_THEME_COLOR_INTENT.primary}
            className="mr-2"
          />
        </OsdsButton>
      </span>
      <OsdsPopoverContent>
        <ColumnOrdering table={table} />
      </OsdsPopoverContent>
    </OsdsPopover>
  );
}

export function ColumnOrdering({ table }: any) {
  console.info('entre dans ColumnOrdering');
  return (
    <div className="inline-block border border-black shadow rounded">
      <div className="px-1 border-b border-black">
        <label>
          <input
            {...{
              type: 'checkbox',
              checked: table.getIsAllColumnsVisible(),
              onChange: table.getToggleAllColumnsVisibilityHandler(),
            }}
          />{' '}
          Toggle All
        </label>
      </div>
      {table.getAllLeafColumns().map((column: any) => {
        return (
          <div key={column.id} className="px-1">
            <label>
              <input
                {...{
                  type: 'checkbox',
                  checked: column.getIsVisible(),
                  onChange: column.getToggleVisibilityHandler(),
                }}
              />{' '}
              {column.id}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export function DisplayCell({ cell, dato }: any) {
  const label = cell.renderValue();
  const navigate = useNavigate();
  const location = useLocation();

  if (!dato) {
    return null;
  }
  const path = `${location.pathname}/${dato[cell.row.index]['id']}`;

  console.info(
    'cell.column.columnDef.accessorKey : ',
    cell.column.columnDef.accessorKey,
  );

  if (cell.column.columnDef.accessorKey === 'ordering') {
    return <div></div>;
  }

  if (cell.column.columnDef.accessorKey === 'name') {
    return (
      <div className="formatterCell">
        <OsdsText
          color={ODS_THEME_COLOR_INTENT.text}
          level={ODS_TEXT_LEVEL.body}
          size={ODS_TEXT_SIZE._400}
        >
          <OsdsLink
            color={ODS_THEME_COLOR_INTENT.primary}
            onClick={() => navigate(path)}
          >
            {label}
          </OsdsLink>
        </OsdsText>
      </div>
    );
  }

  if (cell.column.columnDef.accessorKey === 'status') {
    return <ProductStatusCell label={label} />;
  }
  if (cell.column.columnDef.accessorKey === 'actions') {
    return <OdsMenuCustom />;
  }
  if (cell.column.columnDef.accessorKey === 'selectable') {
    return <>{flexRender(cell.column.columnDef.cell, cell.getContext())}</>;
  }

  return (
    <div className="formatterCell">
      <OsdsText
        color={ODS_THEME_COLOR_INTENT.text}
        level={ODS_TEXT_LEVEL.body}
        size={ODS_TEXT_SIZE._400}
      >
        {label ? label : 'undefined'}
      </OsdsText>
    </div>
  );
}

function OdsMenuCustom() {
  return (
    <div style={{ paddingTop: '11px' }}>
      <OsdsMenu
        style={{ position: 'absolute', marginLeft: -15, marginTop: -20 }}
      >
        <OsdsButton
          slot="menu-title"
          inline
          circle
          color={ODS_THEME_COLOR_INTENT.info}
          variant={ODS_BUTTON_VARIANT.stroked}
          type={ODS_BUTTON_TYPE.button}
          size={ODS_BUTTON_SIZE.sm}
        >
          <OsdsIcon
            color={ODS_THEME_COLOR_INTENT.primary}
            name={ODS_ICON_NAME.ELLIPSIS}
            size={ODS_ICON_SIZE.xs}
          />
        </OsdsButton>
        <OsdsMenuItem>
          <OsdsButton
            color={ODS_THEME_COLOR_INTENT.primary}
            size={ODS_BUTTON_SIZE.sm}
            variant={ODS_BUTTON_VARIANT.ghost}
            text-align="start"
          >
            <span slot="start">
              <span>Manage</span>
            </span>
          </OsdsButton>
        </OsdsMenuItem>
        <OsdsMenuItem>
          <OsdsButton
            type={ODS_BUTTON_TYPE.button}
            size={ODS_BUTTON_SIZE.sm}
            color={ODS_THEME_COLOR_INTENT.error}
            variant={ODS_BUTTON_VARIANT.ghost}
            text-align="start"
            class="hydrated"
          >
            <span slot="start">
              <span>delete</span>
            </span>
          </OsdsButton>
        </OsdsMenuItem>
      </OsdsMenu>
    </div>
  );
}

function ProductStatusCell({ label }: any) {
  const { t } = useTranslation('pci-rancher/listing');
  const colorByProductStatus: any = {
    [RessourceStatus.READY]: ODS_THEME_COLOR_INTENT.success,
    [RessourceStatus.DISABLED]: ODS_THEME_COLOR_INTENT.error,
    [RessourceStatus.UPDATING]: ODS_THEME_COLOR_INTENT.info,
    [RessourceStatus.ERROR]: ODS_THEME_COLOR_INTENT.error,
    [RessourceStatus.CREATING]: ODS_THEME_COLOR_INTENT.info,
    [RessourceStatus.DELETING]: ODS_THEME_COLOR_INTENT.info,
  };
  return label ? (
    <OsdsChip inline color={colorByProductStatus[label]}>
      {t(label)}
    </OsdsChip>
  ) : (
    <OsdsSpinner inline size={ODS_SPINNER_SIZE.sm} />
  );
}
