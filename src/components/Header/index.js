import React, { useContext } from "react";
import { Navbar, NavItem, Nav } from "reactstrap";
import { LayoutContext } from "../../layouts/Root";
import { List } from "react-bootstrap-icons";
import RightContent from "./RightContent";
import { Button, Text } from "../../components";
import { ArrowRightSquare, ArrowLeftSquare } from "react-bootstrap-icons";

// console.log(Button);

const Header = (props) => {
  const ctx = useContext(LayoutContext);
  const { navOpen, setNavOpen, navDocked, navAnimate } = ctx;

  const wrapperStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    width: "-webkit-fill-available",
  };
  const icon = navOpen ? (
    <ArrowLeftSquare color="black" size={35} />
  ) : (
    <ArrowRightSquare color="black" size={35} />
  );
  return (
    <div style={wrapperStyle}>
      <div
        onClick={() => setNavOpen(!navOpen)}
        style={{ cursor: "pointer", lineHeight: 0 }}
      >
        <div onClick={() => setNavOpen(!navOpen)}>{icon}</div>
      </div>
      <div className="right-content">
        <RightContent />
      </div>
    </div>
  );
};

export default Header;
