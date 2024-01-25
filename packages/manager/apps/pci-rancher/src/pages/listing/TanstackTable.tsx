import React from 'react';
import { DisplayCell, OrderingPopover } from './TanstackDatagrid';
import { flexRender } from '@tanstack/react-table';
import { OsdsIcon } from '@ovhcloud/ods-components/react';
import { ODS_ICON_NAME, ODS_ICON_SIZE } from '@ovhcloud/ods-components/';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import './TanstackDatagrid.scss';

function HeaderTableTh({ header, table }: any) {
  if (header.id === 'ordering') {
    return (
      <th>
        <OrderingPopover table={table} />
      </th>
    );
  }

  return (
    <th key={header.iProductStatusCelld}>
      {header.isPlaceholder ? null : (
        <div
          {...{
            className: header.column.getCanSort()
              ? 'cursor-pointer select-none'
              : '',
            onClick: header.column.getToggleSortingHandler(),
          }}
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: (
              <OsdsIcon
                color={ODS_THEME_COLOR_INTENT.text}
                name={ODS_ICON_NAME.ARROW_UP}
                size={ODS_ICON_SIZE.xxs}
              ></OsdsIcon>
            ),
            desc: (
              <OsdsIcon
                color={ODS_THEME_COLOR_INTENT.text}
                name={ODS_ICON_NAME.ARROW_DOWN}
                size={ODS_ICON_SIZE.xxs}
              ></OsdsIcon>
            ),
          }[header.column.getIsSorted() as string] ?? null}
        </div>
      )}
      {header.column.getCanResize() && (
        <div
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
          className={`resizer ${
            header.column.getIsResizing() ? 'isResizing' : ''
          }`}
        ></div>
      )}
    </th>
  );
}

function TanstackTable({ table, dato, fullWidth, }: any) {
  return (
    <table className={`tanstack-datagrid-div ${fullWidth ? 'w-full' : ''}`} cellSpacing={0}>
      <thead>
        {table &&
          table.getHeaderGroups().map((headerGroup: any) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => (
                <HeaderTableTh header={header} table={table} />
              ))}
            </tr>
          ))}
      </thead>
      <tbody>
        {table &&
          table.getRowModel().rows.map((row: any) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell: any) => (
                <td key={cell.id}>
                  <DisplayCell cell={cell} dato={dato} />
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TanstackTable;
