import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

export class Output extends Component {
  render() {
    return (
      <Form.Group
        controlId='exampleForm.ControlTextarea1'
        style={{ margin: '145px 100px 135px  0px' }}
      >
        {' '}
        <Form.Control
          style={{
            border: '1px black solid',
            minHeight: '70vh'
          }}
          as='textarea'
          rows='12'
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
