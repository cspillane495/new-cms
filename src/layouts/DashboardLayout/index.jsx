import React, { useState } from "react";
import { connect } from "react-redux";
import { Sidebar } from "../../components";
import { logout } from "../../actions/account";
import Root from "../Root";
import routes from "../../config/routes.config";
import { renderNavItems } from "../../utils/route.utils";
import ContentWrapper from "./ContentWrapper";
import { useHistory } from "react-router-dom";
import "./style.css";

const navItems = renderNavItems(routes);

const DashboardLayout = (props) => {
  const history = useHistory();
  const activePath = history.location.pathname;

  const layout = (
    <Root>
      <Sidebar navItems={navItems} activePath={activePath} />
      <ContentWrapper>{props.children}</ContentWrapper>
    </Root>
  );
  return layout;
};

function mapStatetoProps() {
  return {};
}

export default connect(mapStatetoProps, { logout })(DashboardLayout);
