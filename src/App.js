import React, {useEffect} from "react";
import {Route, Redirect, Link, Switch} from 'react-router-dom';
import MainIndex from './layouts';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import { connect } from 'react-redux';
import {fetchCurrentUser} from './actions/account';
import LoginIndex from './layouts/LoginIndex'
import Media from "./pages/Media";
import Episodes from "./pages/Episodes";
import EpisodesShow from "./pages/Episodes/Show";
import Users from './pages/Users';
import './App.css';
import Upload from "./pages/Media/Upload";

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
      <MainIndex path="/media" exact currentUser={props.currentUser} component={Media}/>
      <MainIndex path="/media/upload" currentUser={props.currentUser} component={Upload}/>
      <MainIndex path="/episodes" exact currentUser={props.currentUser} component={Episodes}/>
      <MainIndex path="/episodes/create" exact currentUser={props.currentUser} component={EpisodesShow}/>
      <MainIndex path="/episodes/:id/edit" currentUser={props.currentUser} component={EpisodesShow}/>
      <MainIndex path="/users" exact currentUser={props.currentUser} component={Users} />
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



