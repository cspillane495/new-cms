import classNames from "classnames";
import React, { useContext } from "react";
import * as icons from "react-bootstrap-icons";
import { LayoutContext } from "../../layouts/Root";

const Icon = (props) => {
  const ctx = useContext(LayoutContext);
  const IconComponent = icons[props.name];
  const classes = classNames("icon-wrapper", {
    [`icon-color-${ctx.theme}`]: !props.color,
  });

  return (
    <div className={classes}>
      <IconComponent {...props} />
    </div>
  );
};

export default Icon;
