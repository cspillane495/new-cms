import React from "react";
import "./style.scss";

const Avatar = (props) => {
  const imgStyle = {
    width: props.size || 50,
    height: props.size || 50,
  };
  return (
    <div className="avatar-wrapper" {...props}>
      <img src={props.src} alt="user avatar" style={imgStyle} />
    </div>
  );
};

export default Avatar;
