import React from 'react';
import ReactDOM from 'react-dom/client';

export function ReactFormatter(jsxElement: any) {
  return function CustomFormatter(
    cellData: any,
    rowData: any,
    cell: any,
    onRendered: any,
  ) {
    const renderFn = () => {
      const cellEl = cell.getElement();
      if (cellEl) {
        const root = ReactDOM.createRoot(
          cellEl.querySelector('.formatterCell'),
        );
        if (root) {
          const CompWithMoreProps = React.cloneElement(jsxElement, {
            cellData,
            rowData,
          });
          root.render(CompWithMoreProps);
        }
      }
    };

    onRendered(renderFn); // initial render only.
    setTimeout(() => {
      renderFn(); // render every time cell value changed.
    }, 0);
    return '<div class="formatterCell"></div>';
  };
}

export default ReactFormatter;
