import React from "react";

const TableHeader = ({ headerGroups }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className={
                column.isSorted
                  ? column.isSortedDesc
                    ? "sort-desc"
                    : "sort-asc"
                  : ""
              }
            >
              {column.render("Header")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
