import React from "react";
import { Transition } from "react-transition-group";
import { ChevronDown, ChevronLeft } from "react-bootstrap-icons";

const ToggleChildMenuIcon = (props) => {
  const duration = {
    appear: 500,
    enter: 300,
    exit: 300,
  };
  const iconStyle = {
    transition: `opactiy ${100}ms`,
  };
  const iconTransition = {
    entering: { opacity: 0, display: "none" },
    entered: { opacity: 1, display: "block" },
    exiting: { opacity: 1, display: "block" },
    exited: { opacity: 0, display: "none" },
  };
  const link2TransitionStyles = {
    entering: { opacity: 1, display: "block" },
    entered: { opacity: 0, display: "none" },
    exiting: { opacity: 0, display: "none" },
    exited: { opacity: 1, display: "block" },
  };
  // {props.childMenuOpen ? <ChevronDown /> : <ChevronLeft />}

  const Icon = props.icon;
  return (
    <>
      <Transition in={props.childMenuOpen} timeout={duration}>
        {(state) => {
          return (
            <div
              style={{
                ...iconStyle,
                ...iconTransition[state],
              }}
            >
              <ChevronDown />
              {/* <div className="sidebar-icon">
              {props.icon && <Icon size={20} />}
            </div> */}
            </div>
          );
        }}
      </Transition>
      <Transition in={props.childMenuOpen} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...iconStyle,
              ...link2TransitionStyles[state],
            }}
          >
            <ChevronLeft />
            {/* <div className="sidebar-icon">
              {props.icon && <Icon size={20} />}
            </div> */}
          </div>
        )}
      </Transition>
    </>
  );
};

export default ToggleChildMenuIcon;
