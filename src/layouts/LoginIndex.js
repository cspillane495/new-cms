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
                return <Redirect to= "/dashboard"/>
            }
        }}/>
    )
}

export default LoginIndex;