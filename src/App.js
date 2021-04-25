import React, {useEffect} from "react";
import {Route, Redirect} from 'react-router-dom';
import MainIndex from './layouts';
import FormPage from "./pages/FormPage";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import useUser from './hooks/userHook';
import { connect } from 'react-redux';
import {fetchCurrentUser} from './actions'
import './App.css';
import Articles from "./pages/Articles";

function App(props) {
  // useEffect(() => {
  //   props.fetchCurrentUser();
  //   console.log(props)
  // }, [props.currentUser.id] )
  return (
    <div >
      <Route path="/" exact render={(props) => {
        console.log("Props", props);
        return <Redirect to="/login"/>
      }}/>
      <MainIndex path="/dashboard"currentUser={props.currentUser} component={Dashboard}></MainIndex>
      <MainIndex path="/form" currentUser={props.currentUser} component={FormPage}/>
      <MainIndex path="/articles" currentUser={props.currentUser} component={Articles}/>
      <Route path="/login" component={Login}/>
    </div>
  );
}

function mapStateToProps({loading, currentUser }) {
  return { loading, currentUser }
}

export default connect(mapStateToProps, {fetchCurrentUser})(App);



