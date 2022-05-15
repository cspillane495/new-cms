import classNames from "classnames";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

  return (
    <div ref={wrapperRef} className="dropdown-wrapper">
      <div className="dropdown-trigger">{props.trigger}</div>
      {
        // true && (
        visible && (
          <ul className={classesMenu}>
            {props.items.map((item, i) => {
              return (
                <li key={i} onClick={() => handleNavigate(item)}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        )
      }
    </div>
  );
};

export default Dropdown;
