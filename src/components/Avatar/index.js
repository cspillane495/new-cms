import React from "react";
import "./style.scss";

const Avatar = (props) => {
  const defaultSize = 50;
  const size =
    props.size && typeof props.size === "string"
      ? props.size === "sm"
        ? 40
        : 200
      : defaultSize;

  const imgStyle = {
    width: props.size || size,
    height: props.size || size,
  };
  return (
    <div className="avatar-wrapper" {...props}>
      <img src={props.src} alt="user avatar" style={imgStyle} />
    </div>
  );
};

export default Avatar;
