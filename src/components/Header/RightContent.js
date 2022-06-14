import classNames from "classnames";
import React from "react";

const RightContent = (props) => {
  return React.Children.map(props.content || props.children, (child, i) => {
    const classes = classNames("right-content-item", child.props.className);

    return (
      <div
        key={i}
        className={classes}
        style={{
          ...child.props.style,
          cursor: child.props.cursor,
        }}
        {...child.props}
      >
        {React.cloneElement(child)}
      </div>
    );
  });
};

export default RightContent;
