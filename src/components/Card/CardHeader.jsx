import classNames from "classnames";
import React from "react";

const CardHeader = (props) => {
  const classes = classNames("card-header", `card-header-${props.theme}`);
  return (
    <div className={classes}>
      <div className="card-header-title">{props.title}</div>
      <div className="card-header-actions">{props.actions}</div>
    </div>
  );
};

export default CardHeader;
