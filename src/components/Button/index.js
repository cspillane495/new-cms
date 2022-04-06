import React from "react";
import classnames from "classnames";
import "./style.css";

const Button = (props) => {
  const classes = classnames(
    "btn",
    `btn-${props.color ? props.color : "primary"}`,
    { "btn-disabled": props.disabled },
    { "btn-stretch": props.stretch }
  );

  return (
    <button className={classes} onClick={props.onClick} type={props.type}>
      {setTitle(props)}
    </button>
  );
};

function setTitle({ title, children }) {
  if (!title) {
    return children;
  }
  return title;
}

export default Button;
