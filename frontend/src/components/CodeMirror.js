import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/mode/javascript/javascript.js';
import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
import { Lightning, Trash, Wrench } from 'react-bootstrap-icons';
import { output } from '../actions/outputActions';
import { connect } from 'react-redux';

class Codemirror extends Component {
  state = {
    request: ''
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
    this.props.output(text ?? 'undefined');
  };

  send = () => {
    console.log('send', this.state.request);
    this.props.emit(this.state.request);
  };

  clear = () => {
    console.log('clear');
    this.setState({
      request: ''
    });
    this.state.request = '';
    this.send();
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      request: nextProps.message
    });
  }

  render() {
    return (
      <div>
        <Nav>
          <NavDropdown title='Javascript' id='nav-dropdown'>
            <NavDropdown.Item active>Javascript</NavDropdown.Item>
            <NavDropdown.Item>Python</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link onClick={this.run}>
              <Lightning></Lightning> Run
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={this.clear}>
              <Trash></Trash> Clear
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <CodeMirror
          value={this.state.request}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            console.log('before', value);
            this.setState({ request: value });
          }}
          onChange={(editor, data, value) => {
            console.log(data.origin);
            if (data.origin !== undefined) {
              this.send();
            }
          }}
        />
      </div>
    );
  }
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
