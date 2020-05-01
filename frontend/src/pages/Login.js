import React, { Component } from 'react';
import Signin from '../components/Signin';
import { ChatQuoteFill } from 'react-bootstrap-icons';

class Login extends Component {
  successLogin = () => {
    this.props.history.push('/code');
  };

  render() {
    return (
      <div style={this.mainDivStyle}>
        <div style={this.secondDivStyle}>
          {/* <ChatQuoteFill size={48} />*/}
          <h3>Log in to Clone</h3>
        </div>
        <Signin successLogin={this.successLogin}></Signin>
      </div>
    );
  }

  mainDivStyle = {
    padding: '10px'
  };

  secondDivStyle = {
    textAlign: 'center',
    margin: '5px',
    padding: '5px'
  };
}

export default Login;
