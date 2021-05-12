import React from 'react';
import {Redirect,  Route } from 'react-router';
import LoginLayout from './LoginLayout';

const LoginIndex = ({component: Component, currentUser, ...rest}) => {
    return (
        <Route {...rest} render={(routeProps) => {
            if(!currentUser.active) {
                return ( 
                    <LoginLayout {...routeProps} {...rest}>
                        <Component {...routeProps} {...rest}/>
                    </LoginLayout>
                )
            }   else{
                return !routeProps.location.state ? <Redirect to="/dashboard" /> : (
                    <Redirect to={routeProps.location.state.from} />
                )
            }
        }}/>
    )
}

export default LoginIndex;