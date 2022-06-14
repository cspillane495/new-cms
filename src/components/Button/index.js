import React from "react";
import classnames from "classnames";
import "./style.scss";

const Button = (props) => {
  const classes = classnames(
    "btn",
    `btn-${props.color ? props.color : "primary"}`,
    { "btn-disabled": props.disabled },
    { "btn-stretch": props.stretch }
  );

  return (
    <button className={classes} onClick={props.onClick} type={props.type}>
      {props.title || props.children}
    </button>
  );
};

export default Button;
