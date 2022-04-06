import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./style.css";
const Navbar = (props) => {
  const navCollapse = props.collapsed && "collapse";
  const classnames = classNames(
    "navbar",
    {
      [`navbar-${props.theme}`]: props.theme,
    },
    props.className
  );
  return <nav className={classnames}></nav>;
};

export default Navbar;
