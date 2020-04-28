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
          <a className='navbar-brand' href='index.html'>
            {' '}
            {name}
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#ftco-nav'
            aria-controls='ftco-nav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='oi oi-menu'></span> Menu
          </button>

          <div className='collapse navbar-collapse' id='ftco-nav'>
            <ul className='navbar-nav ml-auto'>
              {/*
          
              <li className='nav-item active'>
                <a href='index.html' className='nav-link'>
                  Home
                </a>
              </li>

            */}
              <li className='nav-item cta mr-md-1'>
                <a href='new-post.html' className='nav-link'>
                  Login
                </a>
              </li>
              <li className='nav-item cta cta-colored'>
                <a href='job-post.html' className='nav-link'>
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      //   <Navbar collapseOnSelect expand='lg' variant='dark' style={this.navStyle}>
      //     <Link to='/'>
      //       <Navbar.Brand>
      //         <CodeSlash color='#fff' size={36} />
      //       </Navbar.Brand>
      //     </Link>
      //     <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      //     <Navbar.Collapse id='responsive-navbar-nav' style={{ flex: 1 }}>
      //       {isLogged ? (
      //         <div>
      //           <Link to='/login'>
      //             <Button
      //               variant='outline-info'
      //               onClick={this.signOut}
      //               style={this.loginBtnStyle}
      //             >
      //               Logout
      //             </Button>
      //           </Link>
      //         </div>
      //       ) : (
      //         <div>
      //           <Link to='/login' style={{ marginLeft: 'auto' }}>
      //             <Button variant='outline-info' style={this.loginBtnStyle}>
      //               Log In
      //             </Button>
      //           </Link>
      //           <Link to='/logup'>
      //             <Button variant='primary' style={this.logupBtnStyle}>
      //               Log Up
      //             </Button>
      //           </Link>
      //         </div>
      //       )}
      //       )}
      //     </Navbar.Collapse>
      //   </Navbar>
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
