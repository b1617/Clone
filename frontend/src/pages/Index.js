import React from 'react';
import work from '../assets/svg/work.svg';
import { Col, Row, Container, Form } from 'react-bootstrap';

export default function Index() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className='slogan'>Coding is art</h1>
        </Col>
        <Col>
          <img src={work} alt='undraw' height='100%' width='100%' />
        </Col>
      </Row>
    </Container>
  );
}
