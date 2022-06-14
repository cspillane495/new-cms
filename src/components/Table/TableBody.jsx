import React from "react";

const TableHeader = ({ bodyProps, rows, prepareRow }) => {
  return (
    <tbody {...bodyProps()}>
      {rows.map((row, i) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => {
              return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableHeader;
