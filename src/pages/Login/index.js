import React from "react";
import { Container, Row } from "../../components/Grid";
import Card from "../../components/Card";
import { connect } from "react-redux";
import { userLogin } from "../../actions/account";
import LoginForm from "../../components/LoginForm";

const Login = (props) => {
  if (props.loading) {
    return "Loading...";
  }

  return (
    <div className="login-page">
      <h4>Login</h4>
      <div>
        <Card>
          <LoginForm {...props} />
        </Card>
      </div>
    </div>
  );
};
function mapsStateToProps({ loading }) {
  return { loading };
}

export default connect(mapsStateToProps, { userLogin })(Login);
