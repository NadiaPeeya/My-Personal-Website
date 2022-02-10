import React from 'react';
import './MyImage.css'
import { Container, Row, Col } from 'react-bootstrap';

const MyImage = () => {
    return (
        // <div className='background'>
        //     <img width="76%" src="https://i.ibb.co/gdPSzt0/shari4-removebg-preview.png" alt="" />
        // </div>
        <Container>
        <Row>
          <Col className='background'>
          <img width="76%" src="https://i.ibb.co/gdPSzt0/shari4-removebg-preview.png" alt="" />
          </Col>
        </Row>
      </Container>
    );
};

export default MyImage;