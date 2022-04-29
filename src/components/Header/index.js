import React, { useContext } from "react";
import { Navbar, NavItem, Nav } from "reactstrap";
import { LayoutContext } from "../../layouts/Root";
import { List } from "react-bootstrap-icons";
import RightContent from "./RightContent";
import { Button, Text } from "../../components";

// console.log(Button);

const Header = (props) => {
  const ctx = useContext(LayoutContext);
  const { navOpen, setNavOpen, navDocked, navAnimate } = ctx;
  const icon = <List color="black" size={35} />;

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

  return (
    <div style={wrapperStyle}>
      <div
        onClick={() => setNavOpen(!navOpen)}
        style={{ cursor: "pointer", lineHeight: 0 }}
      >
        <Text className="header-brand">{props.pageTitle || "Header"}</Text>
      </div>
      <div className="right-content">
        <RightContent />
      </div>
    </div>
  );
};

export default Header;
