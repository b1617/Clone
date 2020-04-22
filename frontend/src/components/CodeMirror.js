import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Button } from 'react-bootstrap';
import { output } from '../actions/outputActions';
import { connect } from 'react-redux';

class Codemirror extends Component {
  state = {
    request: this.props.request
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
    text = !text ? 'undefined' : text;
    this.props.output(text);
  };

  render() {
    let text = this.props.message ? this.props.message : this.state.request;
    return (
      <div style={{ margin: '15px 50px 50px 50px' }}>
        <div>
          <h4 style={{ color: 'white' }}>Javascript</h4>
        </div>
        <CodeMirror
          value={text}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            this.setState({ request: value });
          }}
          onChange={(editor, data, value) => {
            this.props.emit(value);
          }}
        />
        <div style={this.divBtn}>
          <Button style={this.btn} variant='outline-primary' onClick={this.run}>
            Submit
          </Button>
        </div>
      </div>
    );
  }

  divBtn = {
    display: 'flex',
    justifyContent: 'flex-end'
  };
  btn = {
    marginLeft: '1px',
    width: '20%'
  };
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    output: (text) => dispatch(output(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Codemirror);
