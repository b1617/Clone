import React, { Component } from 'react';
import Signin from '../components/Signin';
import { ChatQuoteFill } from 'react-bootstrap-icons';

class Login extends Component {
  successLogin = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div style={this.mainDivStyle}>
        <div style={this.secondDivStyle}>
          <ChatQuoteFill color='#fff' size={48} />
          <h3 style={{ marginTop: '5px' }}>Log in to Clone</h3>
        </div>
        <Signin successLogin={this.successLogin}></Signin>
      </div>
    );
  }

  mainDivStyle = {
    padding: '10px'
  };

  secondDivStyle = {
    color: '#fff',
    textAlign: 'center',
    margin: '5px',
    padding: '5px'
  };
}

export default Login;
