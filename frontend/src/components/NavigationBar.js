import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { CodeSlash } from 'react-bootstrap-icons';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' variant='dark' style={this.navStyle}>
        <Navbar.Brand href='#'>
          <CodeSlash color='#fff' size={36} />
        </Navbar.Brand>
        {/* <Form inline>
          <Form.Control
            style={this.formStyle}
            type='text'
            placeholder='Search Clone'
            className='mr-sm-2'
          />
       
       </Form>*
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav' style={{ flex: 1 }}>
          {this.props.isLogged ? (
            <Link to='/login' style={{ marginLeft: 'auto' }}>
              <Button variant='outline-info' style={this.loginBtnStyle}>
                Logout
              </Button>
            </Link>
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
          
        </Navbar.Collapse>
          */}
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

export default NavigationBar;
