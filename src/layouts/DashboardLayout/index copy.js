import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { logout } from "../../actions/account";
import "./style.css";

const DashboardLayout = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const layout = (
    <div>
      <Navbar
        history={props.history}
        brand="Wine Reels CMS"
        onClick={() => setCollapsed(!collapsed)}
        collapsed={collapsed}
        logout={props.logout}
      />
      <Sidebar header="CMS" className="side-nav" />
      <div className="content">{props.children}</div>
    </div>
  );
  return layout;
};
function mapStatetoProps() {
  return {};
}

export default connect(mapStatetoProps, { logout })(DashboardLayout);
