import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class signin extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('state', this.state);
  };

  render() {
    return (
      <Form style={this.formStyle}>
        <Form.Group controlId='formGroupEmail' style={this.formGroupStyle}>
          <Form.Control
            onChange={this.onChange}
            type='email'
            name='email'
            placeholder='Email'
          />
        </Form.Group>
        <Form.Group controlId='formGroupPassword' style={this.formGroupStyle}>
          <Form.Control
            onChange={this.onChange}
            type='password'
            name='password'
            placeholder='Password'
          />
        </Form.Group>
        <Button
          style={this.btnStyle}
          onClick={this.onSubmit}
          variant='primary'
          type='submit'
        >
          Sign In
        </Button>
        <a href=''>
          <p style={{ marginTop: '5px' }}> Sign up for Clone </p>
        </a>
      </Form>
    );
  }

  formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  formGroupStyle = {
    width: '400px'
  };

  btnStyle = {
    width: '400px',
    borderRadius: '10px'
  };
}

export default signin;
