import React, { useState } from "react";
import { Search, X } from "react-bootstrap-icons";
import { SwitchTransition } from "react-transition-group";
import { Transition } from "react-transition-group";
import { Input } from "../";
import useFocus from "../../hooks/useFocus";
import Icon from "../Icon";

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
  const focus = useFocus();
  const [open, setOpen] = useState(false);
  const opened = props.open || open;
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
          key={opened ? "x" : "search"}
          timeout={75}
          unmountOnExit
          mountOnEnter
        >
          {open ? (
            <Icon name="X" onClick={() => setOpen(!open)} size={25} />
          ) : (
            <Icon
              name="Search"
              onClick={() => {
                setOpen(!open);
                // setInputFocus();
              }}
            />
          )}
        </FadeTransition>
      </SwitchTransition>

      <Transition
        in={opened}
        timeout={duration}
        onExited={(e) => {
          setTimeout(() => {
            e.style.display = "none";
          }, 200);
        }}
        onEntering={(e) => {
          e.style.display = "block";
        }}
      >
        {(state) => (
          <Input
            ref={focus[0]}
            onChange={props.onChange || (() => null)}
            style={{
              display: "none",
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
