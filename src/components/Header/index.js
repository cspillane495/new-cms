import React, { useContext } from "react";
import { Navbar, NavItem, Nav } from "reactstrap";
import { LayoutContext } from "../../layouts/Root";
import { List } from "react-bootstrap-icons";
import RightContent from "./RightContent";
import { Button, Text } from "../../components";
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons";
import "./style.scss";
import classNames from "classnames";

const Header = (props) => {
  const ctx = useContext(LayoutContext);
  const { navOpen, setNavOpen, navDocked, navAnimate, theme } = ctx;

  const classes = classNames("header-wrapper", `header-color-${theme}`);

  return (
    <div className={classes}>
      <div></div>
      <div className="header-right-content">
        <RightContent>{props.rightContent}</RightContent>
      </div>
    </div>
  );
};

export default Header;
