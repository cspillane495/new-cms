import classnames from "classnames";
import React, { useContext } from "react";
import { LayoutContext } from "../Root";
import Header from "./Header";
import { Transition } from "react-transition-group";

const ContentWrapper = (props) => {
  const ctx = useContext(LayoutContext);
  const wrapperClasses = classnames(
    "content-wrapper",
    `content-background-${ctx.theme}`
  );
  const mainContentClasses = classnames(
    "main-content",
    `content-background-${ctx.theme}`
  );
  const transition = 350;
  const contentStyle = {
    transition: `padding ${transition}ms`,
  };
  const duration = {
    enter: 100,
    exit: 100,
  };
  const contentTransitionStyles = {
    entering: { paddingRight: "80px", paddingLeft: "80px" },
    entered: { paddingRight: "50px", paddingLeft: "50px" },
    exiting: { paddingRight: "50px", paddingLeft: "50px" },
    exited: { paddingRight: "80px", paddingLeft: "80px" },
  };

  return (
    <div className={wrapperClasses}>
      <Header />
      <div className={mainContentClasses}>
        <Transition in={ctx.navOpen} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...contentStyle,
                ...contentTransitionStyles[state],
              }}
            >
              <div>{props.children}</div>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
};

export default ContentWrapper;
