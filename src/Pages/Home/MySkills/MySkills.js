import React from 'react';
import './MySkills.css'
import { Row, Col, Container } from 'react-bootstrap';

const MySkills = () => {
    return (
        <div className='skills-background'> 
            <p className='fw-bold'>What I do</p>
            <h1 className='fw-bold'>My Skills</h1>
      

       <Container>
       <Row className='my-2'>
    <Col className='single-skills'>

        <h6>Web Design</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta facilis velit et illo ut fuga, laborum inventore magni iste.</p>
    
    
    
    </Col>
    <Col className='single-skills'> 
    <h6>Web Design</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta facilis velit et illo ut fuga, laborum inventore magni iste.</p>
    </Col>
    <Col className='single-skills'> 
    <h6>Web Design</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta facilis velit et illo ut fuga, laborum inventore magni iste.</p>
    </Col>
  </Row>
       </Container>
           
        </div>
    );
};

export default MySkills;