import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

export class Output extends Component {
  render() {
    return (
      <Form.Group>
        {' '}
        <Form.Control
          as='textarea'
          readOnly
          value={this.props.output}
        ></Form.Control>
      </Form.Group>
    );
  }
}

const mapStateToProps = (state) => {
  return { output: state.output };
};

export default connect(mapStateToProps)(Output);
