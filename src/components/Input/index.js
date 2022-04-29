import React from "react";
import classnames from "classnames";
// import "./style.css";

const Input = (props) => {
  const isCheckbox = props.type === "checkbox";
  const classes = classnames(
    { "form-control": !isCheckbox },
    { "form-check-input": isCheckbox }
  );

  return (
    <input
      className={classes}
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value || ""}
      onChange={props.onChange}
      {...props}
    />
  );
};

export default Input;
