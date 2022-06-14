import React, { useContext } from "react";
import classnames from "classnames";
import "./style.scss";
import { LayoutContext } from "../../layouts/Root";
import CardHeader from "./CardHeader";

const Card = (props) => {
  const cx = useContext(LayoutContext);
  const classes = classnames("card", props.classname, `card-${cx.theme}`);

  return (
    <div className={classes}>
      <CardHeader {...props} {...cx} />
      {React.Children.map(props.content || props.children, (child) => child)}
    </div>
  );
};

export default Card;
