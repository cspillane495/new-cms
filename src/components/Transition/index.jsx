import React from "react";
import { Transition } from "react-transition-group";

const TransitionWrapper = (props) => {
  const transitionType = props.type === "fade" ? "opacity" : props.type;
  const duration = {
    appear: 500,
    enter: 300,
    exit: 300,
  };
  const style = {
    transition: `${transitionType} ${100}ms`,
  };
  const transitionStyles = {
    entering: { [transitionType]: "0" },
    entered: { [transitionType]: "1" },
    exiting: { [transitionType]: "1" },
    exited: { [transitionType]: "0" },
  };

  return (
    <Transition in={props.navOpen} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...style,
            ...transitionStyles[state],
          }}
        >
          {props.children || props.content}
        </div>
      )}
    </Transition>
  );
};
