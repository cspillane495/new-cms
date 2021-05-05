import React from 'react';
import {Redirect,  Route } from 'react-router';
import DashboardLayout from './DashboardLayout';

const MainIndex = ({component: Component, currentUser, ...rest}) => {
    return (
        <Route {...rest} render={(routeProps) => {
            if(!currentUser.active) {
                return <Redirect to="/login"/>
            }
           return ( 
            <DashboardLayout {...routeProps} {...rest}>
            <Component {...routeProps} {...rest}/>
            </DashboardLayout>
           )
        }}
        />

    )
}

export default MainIndex;