import React from 'react';
import { DisplayCell, OrderingPopover } from './TanstackDatagrid';
import { flexRender } from '@tanstack/react-table';
import { OsdsIcon, OsdsCheckbox, OsdsCheckboxButton, OsdsText, } from '@ovhcloud/ods-components/react';
import { ODS_ICON_NAME, ODS_ICON_SIZE,} from '@ovhcloud/ods-components/';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';
import './TanstackDatagrid.scss';

function HeaderTableTh({ header, table }: any) {
  console.info('header toto : ', header);

  if (header.id === 'select') {
    return (
        <th key={header.iProductStatusCelld}>
          {header.isPlaceholder ? null : (
            <div>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </div>
          )}
        </th>
      );    
  }
//   if (header.id === 'selectable') {
//     return (
//         <th>
//             <OsdsCheckbox value="all-datagrid" name="all-datagrid">
//                 <OsdsCheckboxButton color={ODS_THEME_COLOR_INTENT.text}>
//                     toto
//                 </OsdsCheckboxButton>
//             </OsdsCheckbox>
//         </th>
//     );
//   }

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
    </th>
  );
}

function TanstackSelectable({ table, dato }: any) {
  return (
    <table className="tanstack-datagrid-div w-full" cellSpacing={0}>
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

export default TanstackSelectable;
