import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import { Children, useContext } from "react";
import { LayoutContext } from "../../layouts/Root";
import { isNum, isObject } from "../../utils";
// import "./layout.css";

// "xs", "sm", "md", "lg", "xl", "xxl",
// .parent {
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   grid-template-rows: repeat(5, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
// }

const Grid = (props) => {
  const cx = useContext(LayoutContext);
  // console.log(cx);
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridTemplateRows: "repeat(12, 1fr)",
    // gridAutoColumns: " repeat(3, minmax(0, 1fr))",
    // gridAutoFlow: "column",
    gridColumnGap: 0,
    gridRowGap: 0,
  };

  function renderRowStart(data, cb) {
    let res;
    if (data.index === 0) {
      res = 1;
    }
    if (data.check < 12) {
      // console.log(data);
      res = data.before + 1;
    }

    // res = Math.floor(data.check / 12) + 1;
    return res;
  }

  function renderColumnStart(data) {
    let res;
    console.log("[ COLUMN START ]: ", data);
    if (data.index === 0) {
      res = 1;
    }

    if (data.check > 12) {
      res = Math.floor(data.check / 12);
    }

    // const columnStart = Math.floor(data.check) - 1;
    return res;
  }

  function renderRowEnd(data) {
    if (data.index === 0 && data.column === 2) {
      return 2;
    }

    if (data.check > 12) {
      return 3;
    }
  }

  function renderColumnEnd(data) {
    if (data.index === 0 && data.column === 2) {
      return 3;
    }

    if (data.index > 0 && data.check < 12) {
      return data.check + 1;
    }

    return data.column + 1;
  }

  function renderGridItems() {
    let totalColumns = 1;
    let currentArr = [];
    // if (!cx.navBreakpoint) return false;
    const isNumber = isNum(props.columns);
    const toCount = props.columns ? props.columns : props.children;

    if (!isNumber) {
      toCount.forEach((item) => {
        if (props.columns) {
          const data = item[cx.navBreakpoint];
          totalColumns = totalColumns + data;
        }
      });
    }

    return Children.map(props.children, (item, i) => {
      const rowCount = Math.floor(totalColumns / 12) + 1;
      let itemBefore = 2;
      let itemAfter = 2;
      let itemColumns;

      if (props.columns) {
        itemBefore =
          props.columns[i - 1] && props.columns[i - 1][cx.navBreakpoint];
        itemAfter =
          props.columns[i + 1] && props.columns[i + 1][cx.navBreakpoint];
        itemColumns = props.columns[i];
      }

      const column = isNumber
        ? props.columns
        : isObject(itemColumns)
        ? itemColumns[cx.navBreakpoint]
        : itemColumns;

      const check = isNumber ? column : itemBefore + column;

      //  1 / 1 / 2 / 2
      //  1 / 2 / 2 / 3
      //  1 / 3 / 2 / 4
      //  1 / 4 / 2 / 5
      //  1 / 5 / 2 / 6
      //  1 / 6 / 2 / 7

      const data = {
        column,
        rowCount,
        itemColumns,
        before: itemBefore || column,
        after: itemAfter || column,
        // columnsTotal,
        index: i,
        check,
      };

      const rowStart = renderRowStart(data);
      const columnStart = i + 1; // renderColumnStart(data);
      const rowEnd = renderRowEnd(data);
      const columnEnd = i + 2; // renderColumnEnd(data);

      console.log(data);

      const itemStyle = { gridArea: `1 / ${columnStart} / 2 / ${columnEnd}` };
      // {
      //   gridArea: `
      //     ${rowStart} /
      //     ${columnStart} /
      //     ${rowEnd} /
      //     ${columnEnd}
      //   `, //${column + 1}`,
      // };
      return (
        <div key={i} style={itemStyle}>
          {item}
        </div>
      );
    });
  }

  return (
    <div style={gridStyle} className="grid-container">
      {renderGridItems()}
    </div>
  );
};

export default Grid;
export { Container, Row, Col };
