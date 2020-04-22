import '../styles/code.css';
import React, { Component } from 'react';
import CodeMirror from '../components/CodeMirror';
import Output from '../components/Output';
import openSocket from 'socket.io-client';
const endPoint = 'http://localhost:5000';
let socket = null;

class Code extends Component {
  componentDidMount() {
    socket = openSocket(endPoint);
    socket.on('time', (time) => {
      console.log(time);
    });
  }

  componentWillUnmount() {
    if (socket) {
      socket.emit('end');
    }
  }

  render() {
    return (
      <div className='code'>
        <CodeMirror></CodeMirror>
        <Output></Output>
      </div>
    );
  }
}

export default Code;
