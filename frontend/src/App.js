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
import Index from './pages/landing/Index';

class App extends Component {
  componentDidMount() {
    let signed = false;
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        signed = true;
        this.props.signIn();
      }
    });
    if (!signed && localStorage.getItem('user')) {
      this.props.signIn();
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavigationBar></NavigationBar>
          <Route exact path='/' component={Index} />
          {/*  <Switch>
            <PrivateRoute exact path='/' component={Code} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/logup' component={Logup} />
    </Switch> */}
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
