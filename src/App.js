import React, { useEffect } from "react";
import { Route, Redirect, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurrentUser } from "./actions/account";
import routes from "./config/routes.config";
import { renderFlatMap } from "./utils/route.utils";
import MainIndex from "./layouts";
import LoginIndex from "./layouts/LoginIndex";

const formattedRoutes = renderFlatMap(routes);

console.log("[ FORMATTED ROUTES ]", formattedRoutes);

const layouts = {
  dashboard: MainIndex,
  login: LoginIndex,
};

function App(props) {
  useEffect(() => {
    props.fetchCurrentUser();
  }, [props.currentUser.active]);

  const renderRoutes = (arr) => {
    if (arr.length < 1) return;
    const routes = arr;
    return routes.map((item, i) => {
      const Layout = layouts[item.layout];
      return <Layout {...item} currentUser={props.currentUser} key={i} />;
    });
  };

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={(props) => {
          return <Redirect to="/dashboard" />;
        }}
      />
      {renderRoutes(formattedRoutes)}
      <Route path="*" component={() => "No Match"} />
    </Switch>
  );
}

function mapStateToProps({ loading, currentUser }) {
  return { loading, currentUser };
}

export default connect(mapStateToProps, { fetchCurrentUser })(App);
