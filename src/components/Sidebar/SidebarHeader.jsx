import React, { useContext } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import { LayoutContext } from "../../layouts/Root";
import SidebarToggle from "./SidebarToggle";
import { Circle, X } from "react-bootstrap-icons";
import Text from "../Text";
import { Link } from "react-router-dom";

const FadeTransition = (props) => (
  <CSSTransition
    {...props}
    classNames={{
      enter: "fade-enter",
      enterActive: "fade-enter-active",
      exit: "fade-exit",
    }}
    addEndListener={(node, done) => {
      node.addEventListener("transitionend", done, false);
    }}
  />
);

const SidebarHeader = (props) => {
  const cx = useContext(LayoutContext);
  const durationLink = {
    appear: 500,
    enter: 320,
    exit: 300,
  };
  const linkStyle = {
    transition: `opacity ${100}ms`,
  };
  const linkTransitionStyles = {
    entering: { opacity: 0, width: "0%", display: "none" },
    entered: { opacity: 1, width: "100%", display: "block" },
    exiting: { opacity: 1, width: "100%", display: "block" },
    exited: { opacity: 0, width: "0%", display: "none" },
  };

  return (
    <div className="sidebar-header">
      <Transition in={cx.navOpen} timeout={durationLink}>
        {(state) => (
          <div
            style={{
              ...linkStyle,
              ...linkTransitionStyles[state],
            }}
          >
            <Link to="/" className="text-decoration-none">
              <Text type="h2">Site Name</Text>
            </Link>
          </div>
        )}
      </Transition>
      <SidebarToggle />
    </div>
  );
};

export default SidebarHeader;
