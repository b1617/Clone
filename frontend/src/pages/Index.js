import React from 'react';
import work from '../assets/svg/work.svg';
import footer from '../assets/img/footer.png';
import { Col, Row, Container, Form, Tabs, Tab, Button } from 'react-bootstrap';

export default function Index() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className='slogan'>Coding is art</h1>
          <Tabs defaultActiveKey='join' className='join'>
            <Tab eventKey='join' title='Your Interview is waiting'>
              <Row className='form-join'>
                <Col>
                  <Form.Control size='lg' placeholder='Enter your key...' />
                </Col>
                <Col>
                  <Button size='lg' variant='outline-primary' block>
                    Join
                  </Button>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
        <Col>
          <img src={work} alt='undraw' height='100%' width='100%' />
        </Col>
      </Row>
      <Row>
        <img
          src={footer}
          alt='waves'
          width='100%'
          style={{
            position: 'fixed',
            bottom: '-250px',
            opacity: '0.2',
            zIndex: '-1'
          }}
        />
      </Row>
    </Container>
  );
}
