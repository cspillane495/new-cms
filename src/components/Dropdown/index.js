import classNames from "classnames";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useHover from "../../hooks/useHover";
import "./style.scss";

const Dropdown = (props) => {
  const history = useHistory();
  const wrapperRef = useRef(null);
  const { visible } = useHover(wrapperRef);
  const dropClasses = classNames("dropdown-menu");
  const dropWrapperClasses = classNames({
    "drop-align-right": props.alignRight,
  });

  function handleNavigate(item) {
    history.push(item.path);
  }

  function renderData(data) {
    if (!visible) return;
    return (
      <div className={dropWrapperClasses}>
        <div
          className={dropClasses}
          style={{
            marginTop: props.dropMarginTop,
            marginRight: props.dropMarginRight,
          }}
        >
          {Array.isArray(data) ? (
            <ul className="dropdown-list">
              {data.map((item, i) => {
                return (
                  <li key={i} onClick={() => handleNavigate(item)}>
                    {item.title}
                  </li>
                );
              })}
            </ul>
          ) : (
            data
          )}
        </div>
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className="dropdown-wrapper">
      {props.trigger}
      {renderData(props.data)}
    </div>
  );
};

export default Dropdown;
