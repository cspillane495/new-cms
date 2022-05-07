import React, { useEffect, useState } from "react";
import { ChevronLeft } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";
import { Transition } from "react-transition-group";
import ItemIcon from "./ItemIcon";
import ItemChild from "./ItemChild";
import ItemChildMenu from "./ItemChildMenu";
import classNames from "classnames";
import { isCurrentPath } from "../sidebar.utils";

const SidebarItem = ({ ...props }) => {
  const history = useHistory();
  const [item, setItem] = useState(props.item || {});
  const checkChildren = !props.child && item.children;
  const [childMenu] = useState(checkChildren || []);
  const navOpenInit = props.navOpen
    ? isCurrentPath(checkChildren, props.activePath)
    : false;
  const [openNavItem, setOpenNavItem] = useState(navOpenInit);

  const classes = classNames("sidebar-item", {
    "sidebar-item-active": props.activePath.path === item?.path,
    "sidebar-child-menu-item": props.child && item.icon,
    "sidebar-child-menu-item-no-icon": props.child && !item.icon,
  });

  const duration = {
    appear: 500,
    enter: 300,
    exit: 300,
  };
  const wrapperStyle = {
    transition: `justify-content ${100}ms`,
  };
  const wrapperTransitionStyles = {
    entering: { justifyContent: "center" },
    entered: { justifyContent: "flex-start" },
    exiting: { justifyContent: "flex-start" },
    exited: { justifyContent: "center" },
  };

  return (
    <div style={{ width: "100%" }}>
      <Transition in={props.navOpen} timeout={duration}>
        {(state) => (
          <div
            className={classes}
            style={{
              ...wrapperStyle,
              ...wrapperTransitionStyles[state],
            }}
          >
            {item.icon && (
              <ItemIcon
                navOpen={props.navOpen}
                icon={item.icon}
                duration={duration}
                history={history}
                path={item.path}
              />
            )}
            <ItemChild
              duration={duration}
              history={history}
              openChildMenu={setOpenNavItem}
              childMenuOpen={openNavItem}
              title={item.title}
              navOpen={props.navOpen}
              path={item.path}
              children={item.children}
            />
          </div>
        )}
      </Transition>
      {item.children && (
        <ItemChildMenu
          duration={duration}
          history={history}
          openChildMenu={setOpenNavItem}
          childMenuOpen={openNavItem} // || navOpen}
          navOpen={props.navOpen}
          path={item.path}
          children={childMenu}
          activePath={props.activePath}
        />
      )}
    </div>
  );
};

export default SidebarItem;
