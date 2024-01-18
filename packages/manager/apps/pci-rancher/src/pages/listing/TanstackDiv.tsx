import React from 'react';
import { DisplayCell } from './TanstackDatagrid';
import { flexRender } from '@tanstack/react-table';
import {
  OsdsIcon,
} from '@ovhcloud/ods-components/react';
import {

  ODS_ICON_NAME,
  ODS_ICON_SIZE,
} from '@ovhcloud/ods-components/';
import { ODS_THEME_COLOR_INTENT } from '@ovhcloud/ods-common-theming';

function TanstackDiv({ table, dato }: any) {
  return (
    <div className="tanstack-tabulator">
      <div className="tanstack-tabulator-header">
        <div className="tanstack-tabulator-header-contents">
          {table &&
            table.getHeaderGroups().map((headerGroup: any) => (
              <div className="tanstack-tabulator-headers" key={headerGroup.id}>
                {headerGroup.headers.map((header: any) => (
                  <div className="tanstack-tabulator-col" key={header.id}>
                    <div className="tanstack-tabulator-col-title-holder">
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
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
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>

      <div className="tanstack-tabulator-tableholder">
        <div className="tanstack-tabulator-table">
          {table &&
            table.getRowModel().rows.map((row: any) => (
              <div
                className="tanstack-tabulator-row tanstack-tabulator-selectable tanstack-tabulator-row-odd"
                key={row.id}
              >
                {row &&
                  row.getVisibleCells().map((cell: any) => (
                    <div className="tanstack-tabulator-cell" key={cell.id}>
                      <DisplayCell cell={cell} dato={dato} />
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TanstackDiv;
