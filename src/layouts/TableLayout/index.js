import { Table as T, Button } from "../../components";
import { Link } from "react-router-dom";
import { ChevronLeft } from "react-bootstrap-icons";
import React, { useMemo, useState, useEffect } from "react";
// import "./index.css";

const { Table } = T;

const Genres = ({ values }) => {
  return (
    <>
      {values.map((genre, idx) => {
        return (
          <span key={idx} className="badge">
            {genre}
          </span>
        );
      })}
    </>
  );
};

const TableLayout = (props) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={props.back}>
          <ChevronLeft />
        </Link>
        <h2>{props.title}</h2>
        <Link to={props.path}>
          <Button>Add New</Button>
        </Link>
      </div>
      <div>
        <div col={12}>
          <Table columns={props.columns} data={props.data} {...props} />
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
