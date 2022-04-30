import React from "react";
import classnames from "classnames";
import "./col.scss";
const sizes = ["xs", "sm", "md", "lg", "xl", "xxl", "size", "col"];
const Col = (props) => {
  const checkProps = () => {
    const propsKeys = Object.keys(props);
    const filteredPropKeys = sizes.filter((prop, i) => {
      return propsKeys.includes(prop);
    });

    return filteredPropKeys.length < 1;
  };

  // console.log("[COL CHECK PROPS]", checkProps());

  const classes = classnames(
    { col: checkProps() },
    { [`col-sm-${props.sm}`]: props.sm },
    { [`col-md-${props.md}`]: props.md },
    { [`col-lg-${props.lg}`]: props.lg },
    { [`col-xl-${props.xl}`]: props.xl },
    { [`col-xxl-${props.xxl}`]: props.xxl },
    { [`col-${props.col}`]: props.col },
    props.className
  );
  return (
    <div className={classes}>
      {React.Children.map(props.children, (child) => {
        return child;
      })}
    </div>
  );
};

export default Col;
