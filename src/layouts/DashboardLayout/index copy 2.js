import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { logout } from "../../actions/account";
import "./style.css";
import Root from "../Root";
import NavWrapper from "../../components/NavWrapper";
import Header from "../../components/Header";
import routes from "../../config/routes.config";
import { renderNavItems } from "../../utils/route.utils";
import ContentWrapper from "./ContentWrapper";
// import SettingsSidebar from "../../components/SettingsSidebar";

const navItems = renderNavItems(routes);

const DashboardLayout = (props) => {
  const layout = (
    <Root>
      <NavWrapper navItems={navItems}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <ContentWrapper>{props.children}</ContentWrapper>
          {/* <SettingsSidebar /> */}
        </div>
      </NavWrapper>
    </Root>
  );
  return layout;
};

function mapStatetoProps() {
  return {};
}

export default connect(mapStatetoProps, { logout })(DashboardLayout);
