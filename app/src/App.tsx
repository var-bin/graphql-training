import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default App;
