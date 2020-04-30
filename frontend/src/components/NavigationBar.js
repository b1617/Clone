import React, { Component } from 'react';
import { Navbar, Button, Container, Nav } from 'react-bootstrap';
import { CodeSlash } from 'react-bootstrap-icons';
import { connect } from 'react-redux';
import { Link, Redirect, NavLink } from 'react-router-dom';
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
    console.log(isLogged);
    return (
      <Navbar bg='light' variant='light'>
        <Navbar.Brand>
          <Link to='/'>
            <CodeSlash size={32}></CodeSlash> Clone
          </Link>
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link as={NavLink} to='/code'>
            Join
          </Nav.Link>
          <Nav.Link as={NavLink} to='/create'>
            Create
          </Nav.Link>
        </Nav>
        {isLogged ? (
          <Nav className='ml-auto'>
            <Nav.Link as={NavLink} to='/' onClick={this.signOut}>
              Logout
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className='ml-auto'>
            <Nav.Link as={NavLink} to='/login'>
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to='/register'>
              Register
            </Nav.Link>
          </Nav>
        )}
      </Navbar>
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
