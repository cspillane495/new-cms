import { useContext } from "react";
import { LayoutContext } from "../../layouts/Root";

const Sidebar = (props) => {
  // const ctx = useContext(LayoutContext);
  return (
    <Sidebar
      // sidebar={<Nav {...rest} />}
      // docked={navDocked && navOpen}
      // onSetOpen={setNavOpen}
      open={props.open}
      styles={{
        sidebar: {
          // background: ctx.theme === "light" ? "white" : "black",
          borderRight: "1px solid black",
        },
      }}
      // shadow={false}
      // transitions={navAnimate}
    >
      {props.children}
    </Sidebar>
  );
};

export default Sidebar;
