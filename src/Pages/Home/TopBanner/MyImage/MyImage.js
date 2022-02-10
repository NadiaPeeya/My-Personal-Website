import React from 'react';
import './MyImage.css'
import { Container, Row, Col } from 'react-bootstrap';

const MyImage = () => {
    return (
        <Container className='my-img'>
        <Row>
          <Col className='background'>
          <img width="100%" src="https://i.ibb.co/gdPSzt0/shari4-removebg-preview.png" alt="" />
          </Col>
        </Row>
      </Container>
    );
};

export default MyImage;