import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Button } from 'react-bootstrap';
import { output } from '../actions';
import { connect } from 'react-redux';

class Codemirror extends Component {
  state = {
    request: '',
    response: ''
  };

  run = (event) => {
    let text = null;
    try {
      text = eval(this.state.request);
    } catch (e) {
      if (e) {
        text = e.message;
      }
    }
    console.log('repnse ', text);
    this.setState({
      response: text
    });
    console.log(this.state);
    this.props.output(text);
  };

  render() {
    return (
      <div style={{ margin: '15px 50px 50px 50px' }}>
        <h4 style={{ color: 'white' }}>Javascript</h4>
        <CodeMirror
          value={this.state.request}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            this.setState({ request: value });
          }}
          onChange={(editor, data, value) => {}}
        />
        <Button onClick={this.run}>Run</Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    output: (text) => dispatch(output(text))
  };
};

export default connect(null, mapDispatchToProps)(Codemirror);
