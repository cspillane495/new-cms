import { Container, Row, Col } from "../../components/Grid";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { ChevronLeft } from "react-bootstrap-icons";
import "./index.css";
import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";

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

const ItemsListLayout = (props) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={props.back}>
          <ChevronLeft />
        </Link>
        <h2>{props.title}</h2>
      </div>
      <Link to={props.path}>
        <Button>Add New</Button>
      </Link>
      <div>
        <div col={12}>
          <Table columns={props.columns} data={props.data} {...props} />
        </div>
      </div>
    </div>
  );
};

export default ItemsListLayout;
