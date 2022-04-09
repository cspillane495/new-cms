import React, { useContext } from "react";
import { LayoutContext } from "../../layouts/Root";
import classes from "classnames";

const Text = ({ type, children, content, ...props }) => {
  const ctx = useContext(LayoutContext);
  const AttType = typeof children === "string" && !type ? "p" : type || "div";
  const classnames = classes(`text-${ctx.theme}`);
  return (
    <AttType
      {...props}
      className={classnames}
      style={{
        // color: ctx.theme === "light" ? "black" : "white",
        ...props.style,
      }}
    >
      {children ? children : content}
    </AttType>
  );
};

export default Text;
