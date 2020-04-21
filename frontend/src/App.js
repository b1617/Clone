import './App.css';
import './firebase';
import firebase from 'firebase';
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Logup from './pages/Logup';
import NavigationBar from './components/NavigationBar';
import Code from './pages/Code';
import PrivateRoute from './helpers/PrivateRoute';
import { signIn } from './actions/authActions';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
const endPoint = 'http://localhost:5000';
const socket = openSocket(endPoint);

socket.on('time', (time) => {
  console.log(time);
});


class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.props.signIn();
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavigationBar></NavigationBar>
          <Switch>
            <PrivateRoute exact path='/' component={Code} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logup' component={Logup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn())
  };
};

export default connect(null, mapDispatchToProps)(App);
