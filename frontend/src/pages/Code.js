import '../styles/code.css';
import React, { Component } from 'react';
import CodeMirror from '../components/CodeMirror';
import Output from '../components/Output';
import { connect } from 'react-redux';
import { message } from '../actions/messageActions';
import openSocket from 'socket.io-client';
const endPoint = 'http://localhost:5000';
let socket = null;

class Code extends Component {
  state = {
    request: ''
  };

  componentDidMount() {
    socket = openSocket(endPoint);
    socket.on('time', (time) => {
      console.log(time);
    });
    socket.on('message', (message) => {
      console.log('message received');
      this.setState({
        ...this.state,
        request: message
      });
      this.props.message(message);
    });
  }

  componentWillUnmount() {
    if (socket) {
      socket.emit('end');
      socket = null;
    }
  }

  emit(text) {
    if (socket) {
      console.log('send message', text);
      socket.emit('message', text);
    }
  }

  render() {
    return (
      <div className='code'>
        <CodeMirror emit={this.emit} request={this.message}></CodeMirror>
        <Output></Output>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    message: (text) => dispatch(message(text))
  };
};
export default connect(null, mapDispatchToProps)(Code);
