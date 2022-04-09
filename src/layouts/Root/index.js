import React, { useState, useEffect } from "react";
import Media from "react-media";
import useWindowSize from "../../hooks/useWindowSize";

const bootrapBreakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

export const LayoutContext = React.createContext({
  navAnimate: false,
  navBreakpoint: "sm",
  navOpen: false,
  navDocked: true,
  navWidth: 256,
  setNavOpen: () => {},
  setNavDocked: () => {},
});

const Root = ({ children }) => {
  const { size, isMobile, breakpoint } = useWindowSize();
  const navBreakpoint = "sm";

  const navStartsOpen = size.width > bootrapBreakpoints[navBreakpoint];

  const [navAnimate, setNavAnimate] = useState(false);
  const [navOpen, setNavOpen] = useState(navStartsOpen);
  const [navDocked, setNavDocked] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNavAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Genereate desired Layout state here.
  const layout = {
    navAnimate: navAnimate,
    navBreakpoint: breakpoint,
    navOpen,
    navDocked,
    navWidth: 256,
    theme: "light",
    setNavOpen,
    setNavDocked,
  };

  return (
    <LayoutContext.Provider value={layout}>
      <Media
        query={{ minWidth: bootrapBreakpoints.sm }}
        onChange={(isLarge) => {
          setNavDocked(isLarge);
          setNavOpen(isLarge);
        }}
      />
      <div>{children}</div>
    </LayoutContext.Provider>
  );
};

export default Root;