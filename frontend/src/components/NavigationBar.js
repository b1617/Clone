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
    return (
      <Navbar collapseOnSelect expand='lg' variant='dark' style={this.navStyle}>
        <Navbar.Brand href='#'>
          <CodeSlash color='#fff' size={36} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' style={{ flex: 1 }}>
          {isLogged ? (
            <div>
              <Link to='/login'>
                <Button
                  variant='outline-info'
                  onClick={this.signOut}
                  style={this.loginBtnStyle}
                >
                  Logout
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to='/login' style={{ marginLeft: 'auto' }}>
                <Button variant='outline-info' style={this.loginBtnStyle}>
                  Log In
                </Button>
              </Link>
              <Link to='/logup'>
                <Button variant='primary' style={this.logupBtnStyle}>
                  Log Up
                </Button>
              </Link>
            </div>
          )}
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }

  formStyle = {
    width: '400px',
    borderRadius: '10px'
  };

  navStyle = {
    display: 'flex',
    borderBottom: '1px solid #253341'
  };

  logupBtnStyle = {
    borderRadius: '10px',
    width: '200px',
    marginLeft: '10px'
  };

  loginBtnStyle = {
    borderRadius: '10px',
    width: '200px'
  };
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
