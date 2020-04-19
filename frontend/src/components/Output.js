import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

export class Output extends Component {
  render() {
    return (
      <div style={{ margin: '50px 50px 0px 0px' }}>
        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Control
            as='textarea'
            rows='12'
            readOnly
            defaultValue={this.props.output}
          ></Form.Control>
        </Form.Group>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { output: state.output };
};

export default connect(mapStateToProps)(Output);
