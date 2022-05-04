import React, { useContext } from "react";
import { Navbar, NavItem, Nav } from "reactstrap";
import { LayoutContext } from "../../layouts/Root";
import { List } from "react-bootstrap-icons";
import RightContent from "./RightContent";
import { Button, Text } from "../../components";
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons";
import "./style.scss";
// console.log(Button);

const Header = (props) => {
  const ctx = useContext(LayoutContext);
  const { navOpen, setNavOpen, navDocked, navAnimate } = ctx;

  return (
    <div className="header-wrapper">
      <div></div>
      <div className="right-content">
        <RightContent />
      </div>
    </div>
  );
};

export default Header;
