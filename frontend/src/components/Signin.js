import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signIn } from '../actions/authActions';
import * as authServices from '../services/authServices';
import { connect } from 'react-redux';

class Signin extends Component {
  state = {
    email: '',
    password: '',
    authError: ''
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log('state', this.state);
    authServices
      .signIn(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        this.props.signIn();
        this.props.successLogin();
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          authError: 'Login Failed'
        });
        console.log(this.state);
      });
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

        <p style={{ color: 'red', margin: '10px 0px 0px 0px' }}>
          {this.state.authError}
        </p>

        <Link to='/logup'>
          <p style={{ marginTop: '8px' }}> Sign up for Clone </p>
        </Link>
      </Form>
    );
  }

  formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  formGroupStyle = {
    width: '500px'
  };

  btnStyle = {
    width: '500px',
    borderRadius: '10px'
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn())
  };
};
export default connect(null, mapDispatchToProps)(Signin);
