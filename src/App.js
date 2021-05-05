import React, {useEffect} from "react";
import {Route, Redirect, Link, Switch} from 'react-router-dom';
import MainIndex from './layouts';
import FormPage from "./pages/FormPage";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import useUser from './hooks/userHook';
import { connect } from 'react-redux';
import {fetchCurrentUser} from './actions/user';
import LoginIndex from './layouts/LoginIndex'
import './App.css';
import Media from "./pages/Media";

function App(props) {
  useEffect(() => {
    props.fetchCurrentUser();
  }, [props.currentUser.active]);
  
  return (
    <Switch >
      <Route path="/" exact render={(props) => {
        return <Redirect to="/dashboard"/>
      }}/>
      <MainIndex path="/dashboard"currentUser={props.currentUser} component={Dashboard}></MainIndex>
      <MainIndex path="/media" currentUser={props.currentUser} component={Media}/>
      <LoginIndex path="/login" component={Login} currentUser={props.currentUser}/>
        <div>
          <Link to="/">Go Back</Link>
        </div>
    </Switch>
  );
}

function mapStateToProps({loading, currentUser }) {
  return { loading, currentUser }
}

export default connect(mapStateToProps, {fetchCurrentUser})(App);


