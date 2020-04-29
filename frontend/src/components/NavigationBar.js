import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { CodeSlash } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../actions/authActions';
import * as authServices from '../services/authServices';

class NavigationBar extends Component {
  signOut = () => {
    authServices.signOut().then(() => {
      localStorage.removeItem('user');
      this.props.signOut();
    });
  };

  render() {
    const { isLogged } = this.props;
    const name = '</ Clone />';
    return (
      <nav
        className='navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light'
        id='ftco-navbar'
      >
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            {' '}
            {name}
          </Link>
          <div className='collapse navbar-collapse' id='ftco-nav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link to='/' className='nav-link'>
                  Create
                </Link>
              </li>
              <li className='nav-item active'>
                <Link to='/code' className='nav-link'>
                  Join
                </Link>
              </li>
              <li className='nav-item active'>
                <Link to='/' className='nav-link'>
                  Profile
                </Link>
              </li>
              <li className='nav-item active'>
                <Link to='/' className='nav-link'>
                  Settings
                </Link>
              </li>
              {isLogged ? (
                <li className='nav-item cta cta-colored'>
                  <a onClick={this.signOut} className='nav-link'>
                    Logout
                  </a>
                </li>
              ) : (
                <li className='nav-item cta mr-md-1'>
                  <Link to='/login' className='nav-link'>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLogged
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
