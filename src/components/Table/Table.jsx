import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import "./style.css";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState("");
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters, useSortBy);

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter("show.name", value);
    setFilterInput(value);
  };

  // Render the UI for your table
  return (
    <>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name"}
      />
      <table style={{ width: "100%" }} {...getTableProps()}>
        <TableHeader headerGroups={headerGroups} />
        <TableBody
          bodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        />
      </table>
    </>
  );
}
