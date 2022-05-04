import React from "react";
import { useHistory } from "react-router-dom";
import { Transition } from "react-transition-group";

const SidebarItem = (props) => {
  const history = useHistory();

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
  const iconStyle = {
    transition: `padding ${100}ms`,
  };
  const iconTransitionStyles = {
    entering: { paddingLeft: "0" },
    entered: { paddingLeft: "20px" },
    exiting: { paddingLeft: "20px" },
    exited: { paddingLeft: "0" },
  };
  const linkStyle = {
    transition: `opacity ${100}ms`,
  };
  const linkTransitionStyles = {
    entering: { opacity: "0", display: "none" },
    entered: { opacity: "1", display: "block" },
    exiting: { opacity: "1", display: "block" },
    exited: { opacity: "0", display: "none" },
  };

  const Icon = props.icon;
  return (
    <Transition in={props.navOpen} timeout={duration}>
      {(state) => (
        <div
          className="sidebar-item"
          style={{
            ...wrapperStyle,
            ...wrapperTransitionStyles[state],
          }}
          onClick={() => history.push(props.path)}
        >
          <Transition in={props.navOpen} timeout={duration}>
            {(state) => (
              <div
                style={{
                  ...iconStyle,
                  ...iconTransitionStyles[state],
                }}
              >
                <div className="sidebar-icon">
                  {props.icon && <Icon size={20} />}
                </div>
              </div>
            )}
          </Transition>
          <Transition in={props.navOpen} timeout={duration}>
            {(state) => (
              <div
                style={{
                  ...linkStyle,
                  ...linkTransitionStyles[state],
                }}
              >
                <span className="sidebar-link">{props.title}</span>
              </div>
            )}
          </Transition>
        </div>
      )}
    </Transition>
  );
};

export default SidebarItem;
