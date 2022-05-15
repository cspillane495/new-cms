import React from "react";

const RightContent = (props) => {
  return React.Children.map(props.content || props.children, (child) =>
    React.cloneElement(child, {
      style: { ...child.props.style, padding: 5 },
    })
  );
};

export default RightContent;
