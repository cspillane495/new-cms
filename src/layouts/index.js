import React from "react";
import { Redirect, Route } from "react-router";
import DashboardLayout from "./DashboardLayout";

const MainIndex = ({ component: Component, currentUser, ...rest }) => {
  delete rest.children;

  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (!currentUser.active) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: routeProps.location },
              }}
            />
          );
        }
        return (
          <DashboardLayout {...routeProps} {...rest}>
            <Component {...routeProps} {...rest} />
          </DashboardLayout>
        );
      }}
    />
  );
};

export default MainIndex;
