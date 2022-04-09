import React, { useContext } from "react";
import { Navbar, NavItem, Nav } from "reactstrap";
import { LayoutContext } from "../../layouts/Root";
import { List } from "react-bootstrap-icons";

const Header = () => {
  const ctx = useContext(LayoutContext);
  const { navOpen, setNavOpen, navDocked, navAnimate } = ctx;
  const icon = <List color="black" size={35} />; //navOpen ? "⬅️" : "➡️";

  const wrapperStyle = {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "white",
    position: "fixed",
    width: "100%",
  };

  return (
    <div style={wrapperStyle}>
      <div onClick={() => setNavOpen(!navOpen)} style={{ cursor: "pointer" }}>
        {icon}
      </div>
    </div>
    // <Navbar color="light">
    //   <Nav>
    //     <NavItem
    //       className=""
    //       onClick={() => setNavOpen(!navOpen)}
    //       style={{ cursor: "pointer" }}
    //     >
    //       {icon}
    //     </NavItem>
    //   </Nav>
    //   <Nav className="text-muted">
    //     <NavItem className="mx-1">NavOpen: {JSON.stringify(navOpen)}</NavItem>
    //     <NavItem className="mx-1">
    //       NavDocked: {JSON.stringify(navDocked)}
    //     </NavItem>
    //     <NavItem className="mx-1">
    //       NavAnimate: {JSON.stringify(navAnimate)}
    //     </NavItem>
    //   </Nav>
    // </Navbar>
  );
};

export default Header;
