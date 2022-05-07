import React, { useContext } from "react";
import { Transition } from "react-transition-group";
import { LayoutContext } from "../../layouts/Root";
import SidebarItem from "./SidebarItem";
import "./style.scss";
import SidebarHeader from "./SidebarHeader";
import { renderActivePath } from "./sidebar.utils";

const Sidebar = (props) => {
  const cx = useContext(LayoutContext);
  const activePath = renderActivePath(props.path, props.activePath);
  // const navOpen = activePath.parent === props.activePath ? true : cx.navOpen;

  const durationSidebar = {
    enter: 100,
    exit: 300,
  };
  const sidebarStyle = {
    transition: `width ${300}ms`,
  };
  const sidebarTransitionStyles = {
    entering: { width: "50px" },
    entered: { width: "300px" },
    exiting: { width: "300px" },
    exited: { width: "50px" },
  };

  const renderLinks = () => {
    return (
      <>
        <SidebarHeader />
        <div className="sidebar-content">
          {props.navItems.map((item, key) => (
            <SidebarItem
              item={item}
              activePath={activePath}
              navOpen={cx.navOpen}
              key={key}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <Transition in={cx.navOpen} timeout={durationSidebar}>
      {(state) => (
        <div
          className="sidebar"
          style={{
            ...sidebarStyle,
            ...sidebarTransitionStyles[state],
          }}
        >
          {renderLinks()}
        </div>
      )}
    </Transition>
  );
};

export default Sidebar;
