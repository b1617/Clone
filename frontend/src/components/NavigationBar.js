import React, { Component } from 'react';
import { Navbar, Form, Button } from 'react-bootstrap';
import { ChatQuoteFill } from 'react-bootstrap-icons';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar variant='dark' style={this.navStyle}>
        <Navbar.Brand href='#home'>
          <ChatQuoteFill color='#fff' size={36} />
        </Navbar.Brand>
        <Form inline>
          <Form.Control
            style={this.formStyle}
            type='text'
            placeholder='Search Clone'
            className='mr-sm-2'
          />
        </Form>

        <Button variant='outline-info' style={this.loginBtnStyle}>
          Log In
        </Button>
        <Button variant='primary' style={this.logupBtnStyle}>
          Log Up
        </Button>
      </Navbar>
    );
  }

  formStyle = {
    width: '400px',
    borderRadius: '10px',
    marginLeft: '150px',
    flex: '1'
  };

  navStyle = {
    display: 'flex',
    borderBottom: '1px solid #253341',
    marginLeft: '100px',
    marginRight: '100px'
  };

  logupBtnStyle = {
    borderRadius: '10px',
    width: '200px',
    marginLeft: '10px'
  };

  loginBtnStyle = {
    marginLeft: 'auto',
    borderRadius: '10px',
    width: '200px'
  };
}

export default NavigationBar;
