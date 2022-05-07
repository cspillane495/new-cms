import React, { useEffect, useState } from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import { Transition } from "react-transition-group";
import SidebarItem from ".";
import ItemChild from "./ItemChild";
import ToggleChildMenuIcon from "./ToggleChildMenuIcon";

const ItemChildMenu = (props) => {
  // const [childMenu, setChildMenu] = useState([]);

  // useEffect(() => {
  //   setChildMenu(props.children);
  // }, [props.children.length]);

  const linkStyle = {
    transition: `opacity ${100}ms lex-basis 500ms ease-in-out`,
  };
  const linkTransitionStyles = {
    entering: { opacity: "0", display: "none" },
    entered: { opacity: "1", display: "flex" },
    exiting: { opacity: "1", display: "flex" },
    exited: { opacity: "0", display: "none" },
  };

  function renderChildren(menuData) {
    return menuData
      .filter((item) => item.path)
      .map((item, i) => {
        return (
          <SidebarItem
            // key={i}
            // {...item}
            // path={item.path}
            // navOpen={props.childMenuOpen}
            // history={props.history}

            item={item}
            activePath={props.activePath}
            navOpen={props.childMenuOpen}
            key={i}
            child={true}
          />
        );
      });
  }

  return (
    <Transition in={props.childMenuOpen} timeout={props.duration}>
      {(state) => (
        <div
          style={{
            ...linkStyle,
            ...linkTransitionStyles[state],
          }}
          className="sidebar-child-menu"
        >
          {props.children && renderChildren(props.children)}
        </div>
      )}
    </Transition>
  );
};

export default ItemChildMenu;
