import React, { useContext } from "react";
import classnames from "classnames";
import useWindowSize from "../../hooks/useWindowSize";
import { LayoutContext } from "../../layouts/Root";

const Container = (props) => {
  const { size, breakpoint, isMobile } = useWindowSize();
  const cx = useContext(LayoutContext);
  const padding = !isMobile
    ? cx.navOpen
      ? size.width / 33
      : size.width / 15
    : (size.width / 20) * 1.3;
  const styles = {
    paddingRight: padding,
    paddingLeft: padding,
  };
  // const classes = classnames(
  //   { container: !cx.navOpen && !props.size },
  //   { [`container-${props.size}`]: !cx.navOpen && props.size },
  //   { [`container-nav-open`]: cx.navOpen && !props.size },
  //   // { container: !props.fluid },
  //   // { "container-fluid": props.fluid },
  //   props.className
  // );
  return (
    <div style={styles}>
      {React.Children.map(props.children, (child) => {
        return child;
      })}
    </div>
  );
};

export default Container;
