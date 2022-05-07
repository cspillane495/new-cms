import React from "react";
import { ChevronDown, ChevronLeft } from "react-bootstrap-icons";
import { Transition } from "react-transition-group";
import ToggleChildMenuIcon from "./ToggleChildMenuIcon";

const ItemChild = (props) => {
  const linkStyle = {
    transition: `opacity ${100}ms`,
  };
  const linkTransitionStyles = {
    entering: { opacity: "0", display: "none" },
    entered: { opacity: "1", display: "flex" },
    exiting: { opacity: "1", display: "flex" },
    exited: { opacity: "0", display: "none" },
  };

  return (
    <Transition in={props.navOpen} timeout={props.duration}>
      {(state) => (
        <div
          style={{
            ...linkStyle,
            ...linkTransitionStyles[state],
          }}
          className="sidebar-item-link"
        >
          <div
            style={linkStyle}
            className="sidebar-item-link-child"
            onClick={() => props.history.push(props.path)}
          >
            <span className="sidebar-link">{props.title}</span>
          </div>
          {props.children && (
            <div
              className="sidebar-item-child-toggle"
              onClick={() => props.openChildMenu(!props.childMenuOpen)}
            >
              <ToggleChildMenuIcon
                childMenuOpen={props.childMenuOpen}
                navOpen={props.navOpen}
              />
              {/* {props.childMenuOpen ? <ChevronDown /> : <ChevronLeft />} */}
            </div>
          )}
        </div>
      )}
    </Transition>
  );
};

export default ItemChild;
