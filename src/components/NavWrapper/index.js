import React, { useContext } from "react";
import Sidebar from "react-sidebar";
import { LayoutContext } from "../../layouts/Root";
import Nav from "./Nav";

const NavWrapper = ({ children, ...rest }) => {
  const ctx = useContext(LayoutContext);
  const { navOpen, setNavOpen, navDocked, navAnimate, theme } = ctx;

  return (
    <Sidebar
      sidebar={<Nav {...rest} />}
      open={navOpen}
      docked={navDocked && navOpen}
      onSetOpen={setNavOpen}
      styles={{
        sidebar: {
          background: theme === "light" ? "white" : "black",
          borderRight: "1px solid black",
        },
      }}
      shadow={false}
      transitions={navAnimate}
    >
      {children}
    </Sidebar>
  );
};

export default NavWrapper;
