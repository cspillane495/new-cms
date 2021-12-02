import React from "react";
import classnames from "classnames";

const sizes = ["xs", "sm", "md", "lg", "xl", "xxl", "size"];

const Col = (props) => {
  const checkProps = () => {
    const propsKeys = Object.keys(props);
    const filteredPropKeys = sizes.filter((prop, i) => {
      return propsKeys.includes(prop);
    });

    return filteredPropKeys.length < 1;
  };

  const classes = classnames(
    { col: checkProps() },
    { [`col-sm-${props.sm}`]: props.sm },
    { [`col-md-${props.md}`]: props.md },
    { [`col-lg-${props.lg}`]: props.lg },
    { [`col-xl-${props.xl}`]: props.xl },
    { [`col-xxl-${props.xxl}`]: props.xxl },
    { [`col-${props.col}`]: props.col },
    { [`align-self-${props.align}`]: props.align },
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
