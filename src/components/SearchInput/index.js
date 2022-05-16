import React, { useState } from "react";
import { Search, X } from "react-bootstrap-icons";
import { SwitchTransition } from "react-transition-group";
import { Transition } from "react-transition-group";
import { Input } from "../";

const FadeDiv = ({ state, children }) => {
  const style = {
    transition: "0.5s",
    opacity: state === "entered" ? 1 : 0,
    display: state === "exited" ? "none" : "block",
  };
  return <div style={style}>{children}</div>;
};

const FadeTransition = ({ children, ...rest }) => (
  <Transition {...rest}>
    {(state) => <FadeDiv state={state}>{children}</FadeDiv>}
  </Transition>
);

const SearchInput = (props) => {
  const [open, setOpen] = useState(false);
  const mode = "out-in";

  const duration = {
    enter: 100,
    exit: 300,
  };
  const style = {
    transition: `width ${300}ms`,
  };
  const transitionStyles = {
    entering: { opacity: 0, width: "0" },
    entered: { opacity: 1, width: "250px" },
    exiting: { opacity: 1, width: "250px" },
    exited: { opacity: 0, width: "0" },
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <SwitchTransition mode="out-in">
        <FadeTransition
          key={open ? "x" : "search"}
          timeout={75}
          unmountOnExit
          mountOnEnter
        >
          {open ? (
            <X onClick={() => setOpen(!open)} size={25} />
          ) : (
            <Search onClick={() => setOpen(!open)} />
          )}
        </FadeTransition>
      </SwitchTransition>

      <Transition in={open} timeout={duration}>
        {(state) => (
          <Input
            onChange={props.onChange || (() => null)}
            style={{
              ...style,
              ...transitionStyles[state],
            }}
          />
        )}
      </Transition>
    </div>
  );
};

export default SearchInput;
