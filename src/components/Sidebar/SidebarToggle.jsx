import React, { useContext } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import { LayoutContext } from "../../layouts/Root";
import SidebarToggle from "./SidebarToggle";
import { Circle, X } from "react-bootstrap-icons";
import Text from "../Text";

const SidebarHeader = (props) => {
  const cx = useContext(LayoutContext);
  const duration = {
    appear: 500,
    enter: 300,
    exit: 300,
  };
  const xStyle = {
    transition: `opacity ${100}ms`,
  };
  const xTransitionStyles = {
    entering: {
      opacity: 1,
      width: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    entered: { opacity: 0, width: "0%", display: "none" },
    exiting: { opacity: 0, width: "0%", display: "none" },
    exited: {
      opacity: 1,
      width: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  const iconStyle = {
    transition: `opacity ${100}ms`,
  };
  const iconTransitionStyles = {
    entering: { opacity: 0, width: "0%", display: "none" },
    entered: {
      opacity: 1,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    exiting: {
      opacity: 1,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    exited: { opacity: 0, width: "0%", display: "none" },
  };

  function toggleNav() {
    cx.setNavOpen(!cx.navOpen);
    localStorage.setItem("navOpen", !cx.navOpen);
  }

  return (
    <div className="sidebar-toggle">
      <Transition in={cx.navOpen} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...xStyle,
              ...xTransitionStyles[state],
            }}
          >
            <Circle onClick={toggleNav} size={25} />{" "}
          </div>
        )}
      </Transition>
      <Transition in={cx.navOpen} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...iconStyle,
              ...iconTransitionStyles[state],
            }}
          >
            <X onClick={toggleNav} size={35} />
          </div>
        )}
      </Transition>
    </div>
  );
};

export default SidebarHeader;
