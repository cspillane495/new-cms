import classnames from "classnames";
import React, { useContext } from "react";
import Container from "../../components/Grid/Container";
import { LayoutContext } from "../Root";

const ContentWrapper = (props) => {
  const ctx = useContext(LayoutContext);
  const classes = classnames("content", `content-background-${ctx.theme}`);
  // console.log(ctx);

  return (
    <div className={classes}>
      <Container>{props.children}</Container>
    </div>
  );
};

export default ContentWrapper;
