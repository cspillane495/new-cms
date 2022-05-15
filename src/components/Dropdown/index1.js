import classNames from "classnames";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Transition } from "react-transition-group";
import useHover from "../../hooks/usehover";
import "./style.scss";

const Dropdown = (props) => {
  const history = useHistory();
  const wrapperRef = useRef(null);
  const { visible } = useHover(wrapperRef);

  const classesMenu = classNames("dropdown-menu", {
    "drop-align-right": props.alignRight,
  });

  function handleNavigate(item) {
    history.push(item.path);
  }

  const duration = {
    enter: 100,
    exit: 300,
  };
  const sidebarStyle = {
    transition: `height ${300}ms`,
  };
  const sidebarTransitionStyles = {
    entering: { display: "none", height: "0" },
    entered: { display: "inherit", height: "auto" },
    exiting: { display: "inherit", height: "auto" },
    exited: { display: "none", height: "0" },
  };

  return (
    <div ref={wrapperRef} className="dropdown-wrapper">
      <div className="dropdown-trigger">Dropdown</div>
      <Transition in={visible} timeout={duration}>
        {(state) => (
          <div
            ref={wrapperRef}
            className="dropdown-wrapper"
            style={{
              ...sidebarStyle,
              ...sidebarTransitionStyles[state],
            }}
          >
            <ul className={classesMenu}>
              {props.items.map((item, i) => {
                return (
                  <li key={i} onClick={() => handleNavigate(item)}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Transition>
    </div>
    // <div ref={wrapperRef} className="dropdown-wrapper">
    //   <div className="dropdown-trigger">Dropdown</div>
    //   {
    //     // true && (
    //     visible && (
    // <ul className={classesMenu}>
    //   {props.items.map((item, i) => {
    //     return (
    //       <li key={i} onClick={() => handleNavigate(item)}>
    //         {item.title}
    //       </li>
    //     );
    //   })}
    // </ul>
    //     )
    //   }
    // </div>
  );
};

export default Dropdown;
