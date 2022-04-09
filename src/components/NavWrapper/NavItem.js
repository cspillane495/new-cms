import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Navbar";
import Text from "../Text";

const NavItem = (props) => {
  return (
    <>
      <li>
        <Link to={props.path}>
          <Text type="div">{props.title}</Text>
        </Link>
      </li>
    </>
  );
};

export default NavItem;
