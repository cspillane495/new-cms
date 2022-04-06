import React from "react";
import classnames from "classnames";
import "./style.css";

const Card = (props) => {
  const classes = classnames("card", props.classname);

  return (
    <div className={classes}>
      {React.Children.map(props.children, (child) => child)}
    </div>
  );
};

export default Card;
