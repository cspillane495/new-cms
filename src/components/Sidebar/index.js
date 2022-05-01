import React, { useContext } from "react";
import { Transition } from "react-transition-group";
import { LayoutContext } from "../../layouts/Root";
import SidebarItem from "./SidebarItem";
import "./style.css";

const Sidebar = (props) => {
  const cx = useContext(LayoutContext);
  const durationSidebar = {
    enter: 100,
    exit: 300,
  };
  const durationLink = {
    appear: 1,
    enter: 300,
    exit: 300,
  };
  const sidebarStyle = {
    transition: `width ${300}ms`,
  };
  const sidebarTransitionStyles = {
    entering: { width: "60px" },
    entered: { width: "300px" },
    exiting: { width: "300px" },
    exited: { width: "60px" },
  };
  const linkStyle = {
    transition: `opacity ${100}ms`,
  };
  const linkTransitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };

  const renderLinks = () => {
    return (
      <>
        <div className="sidebar-header">
          <Transition in={cx.navOpen} timeout={durationLink}>
            {(state) => (
              <div
                style={{
                  ...linkStyle,
                  ...linkTransitionStyles[state],
                }}
              >
                Site Name
              </div>
            )}
          </Transition>
        </div>
        <div className="sidebar-content">
          {props.navItems.map((item, key) => (
            <SidebarItem {...item} key={key} />
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
