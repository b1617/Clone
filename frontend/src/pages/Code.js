import '../styles/code.css';
import React, { Component } from 'react';
import CodeMirror from '../components/CodeMirror';
import Output from '../components/Output';

class Code extends Component {
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
