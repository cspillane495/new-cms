import React, { useRef } from "react";
import { Transition } from "react-transition-group";
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";

const ItemIcon = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const duration = {
    appear: 500,
    enter: 300,
    exit: 300,
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

  function handleMouseOver(e) {
    setIsActive(!isActive);
  }

  function handleClick(e) {
    console.log("HIT", props);
    props.history.push(props.path);
  }

  const Icon = props.icon;
  return (
    <Transition in={props.navOpen} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...iconStyle,
            ...iconTransitionStyles[state],
          }}
          ref={dropdownRef}
          onClick={!props.navOpen ? handleClick : () => console.log("HIT")}
          onMouseEnter={!props.navOpen ? handleMouseOver : () => null}
        >
          <div className="sidebar-icon">{props.icon && <Icon size={20} />}</div>
        </div>
      )}
    </Transition>
  );
};

export default ItemIcon;
