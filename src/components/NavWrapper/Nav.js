import React, { useContext } from "react";
import { LayoutContext } from "../../layouts/Root";
import NavItem from "./NavItem";
import Text from "../Text";

const Nav = (props) => {
  const ctx = useContext(LayoutContext);
  const { navWidth, theme } = ctx;
  const brandStyle = {
    color: "black",
    marginLeft: 20,
    marginBlockEnd: 15,
    marginBlockStart: 15,
  };

  function renderNavItems(arr) {
    const items = arr;

    return items.map((item, i) => <NavItem {...item} key={i} />);
  }

  return (
    <div
      className="bg-light border-right"
      style={{ width: navWidth, height: "100%" }}
    >
      <div
        style={{
          borderBottom: "1px solid black",
        }}
      >
        <Text style={{ margin: 15 }} type="h2">
          Wine Reels
        </Text>
      </div>
      <ul>{renderNavItems(props.navItems)}</ul>
    </div>
  );
};

export default Nav;
