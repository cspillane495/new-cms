import React from 'react';
import {Form, FormItem } from '../../components/Form';
import { Container, Row } from '../../components/Grid';
import Input from "../../components/Input";
import Button from '../../components/Button';
import {connect} from 'react-redux';
import {userLogin} from '../../actions/account';
import LoginForm from '../../components/LoginForm';

const Login  = (props) => {
    if(props.loading){
        return 'Loading...'
    }

    return (
        <Container className="login-page">
            <h4>Login</h4>
            <Row>
               <LoginForm {...props}/>
            </Row>
        </Container>
    )
} 
function mapsStateToProps({loading}) {
    return { loading } 
}

export default connect(mapsStateToProps, {userLogin})(Login);