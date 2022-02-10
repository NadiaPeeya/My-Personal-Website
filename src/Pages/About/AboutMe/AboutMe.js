import React from 'react';
import { Container, Col, Row, ProgressBar, Stack } from 'react-bootstrap';
import { Grid, Box, CircularProgress } from '@mui/material';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div data-aos="fade-right" data-aos-duration="400" className='about'>
          <Container>
              <Box className='mt-5'>
              
                 <h4 className="animate__animated animate__bounce">A B O U T  M E</h4>
                 <Container className='my-5'>
                 <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
    <p className='container writing-text' style={{textAlign: "justify"}}>Hello there! My name is Nadia Rahman Peeya. I am an undergraduate student at North South University, studying a BS in CSE.
 <br />
 <br />
 I have expertise in C, Java, JavaScript, React JS, Node JS, and Python programming. Web development is one of my favorite skills. I am comfortable with web applications using the MERN stack. Currently, I am doing my internship in Uddog O Uddokta, Japan as a web developer, besides developing my skills in Artificial Intelligence. I am a fellow member of Dr. Mohammad Yunus's 3ZERO club. Here I and my team are working for "Zero Unemployment."</p>
  </Grid>
  <Grid item xs={12} md={6}>
  <p className='writing-text' style={{textAlign: "left",}}> <span className='fw-bolder bold-text' style={{ fontWeight: "900"}}>Name: </span> Nadia Rahman </p>
  <p className='writing-text' style={{textAlign: "left"}}><span className='fw-bolder bold-text' style={{ fontWeight: "600"}}>Address: </span>  West Kafrul Taltola 178/2a </p>
  <p className='writing-text' style={{textAlign: "left"}}><span className='fw-bolder bold-text' style={{ fontWeight: "600"}}>Study: </span>  Bsc In Computer Science </p>
  <p className='writing-text' style={{textAlign: "left"}}><span className='fw-bolder bold-text' style={{ fontWeight: "600"}}>Email: </span> nadiapeeya05@gmail.com </p>
  <p className='writing-text' style={{textAlign: "left"}}><span className='fw-bolder bold-text' style={{ fontWeight: "600"}}>Phone: </span> +8801832666987</p>

  </Grid>
  

</Grid>
                 </Container>
                
              </Box>
          </Container>


          <Container>
              <Box>
              <Grid container spacing={2}>
  <Grid item xs={12} md={3}>
    <h6>S E R V I C E S</h6>
  </Grid>
  <Grid item xs={12} md={3}>
   <div>
       <hr />
   </div>
  </Grid>

  <Grid item xs={12} md={3}>
   <h6>I N T E R E S T S</h6>
  </Grid>
  <Grid item xs={12} md={3}>
   <hr />
  </Grid>
</Grid>
            </Box>
      </Container>

          <Container className='mt-3'>
              <Box>
              <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
    <p className='writing-text'>Web Development</p>
    <p className='writing-text'>App Development</p>
    <p className='writing-text'>UI/UX Design</p>
    <p className='writing-text'>Landing Page</p>
    <p className='writing-text'>Web Hosting</p>
  
  </Grid>
  <Grid item xs={12} md={8}>
  <p className='writing-text'>Music</p>
    <p className='writing-text'>Musical Instruments</p>
    <p className='writing-text'>Anime & Movies</p>
    <p className='writing-text'>Travel</p>
    <p className='writing-text'>Gaming</p>
   
  </Grid>
</Grid>


              </Box>
      </Container>


      <Container className='mt-3'>
              <Box>
              <Grid container spacing={2}>
  <Grid item xs={12} md={3}>
    <h6>P R O G R A M M I N G</h6>
  
  </Grid>
  <Grid item xs={12} md={3}>
 <hr />
  </Grid>
  <Grid item xs={12} md={3}>
  <h6>L A N G U A G E S</h6>
  </Grid>
  <Grid item xs={12} md={3}>
  <hr />
  </Grid>
</Grid>


              </Box>
      </Container>


<Container>
    <Box>
    <Grid container spacing={2}>
  <Grid item xs={12} md={6}>

  <p className='writing-text' style={{textAlign: 'left'}}>HTML & CSS</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "95%"}}aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
</div>
  <p className='writing-text' style={{textAlign: 'left'}}>JAVASCRIPT</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "80%"}}aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>
  <p className='writing-text' style={{textAlign: 'left'}}>REACT JS</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "80%"}}aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>
  <p className='writing-text' style={{textAlign: 'left'}}>NODE JS</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "75%"}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>
  <p className='writing-text' style={{textAlign: 'left'}}>MONGODB</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "75%"}}aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
</div>
<p className='writing-text' style={{textAlign: 'left'}}>PYTHON</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "85%"}}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
</div>
<p className='writing-text' style={{textAlign: 'left'}}>Machine Learning</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "85%"}}aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
</div>
  </Grid>
  <Grid item xs={12} md={6}>
  
   
  <p className='writing-text' style={{textAlign: 'left'}}>English</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "90%"}}aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
</div>
<p className='writing-text' style={{textAlign: 'left'}}>Japanese</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "85%"}}aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">70%</div>
</div>
<p className='writing-text' style={{textAlign: 'left'}}>Bengali</p>
  <div className="progress">
  <div className="progress-bar bg-secondary" role="progressbar" style={{width: "100%"}} aria-valuenow="100%" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>
      
   
  </Grid>

</Grid>

    </Box>

</Container>
<Container className='mt-3'>
              <Box>
              <Grid container spacing={2}>
  <Grid item xs={12} md={3}>
    <h6>E D U C A T I O N</h6>
  
  </Grid>
  <Grid item xs={12} md={3}>
 <hr />
  </Grid>
  <Grid item xs={12} md={3}>
  <h6>E X P E R I E N C E</h6>
  </Grid>
  <Grid item xs={12} md={3}>
  <hr />
  </Grid>
</Grid>


              </Box>
      </Container>

      <Container className='mt-3'>
              <Box>
              <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
   
   
  <Container>
  <Row>
    <Col >
        <p style={{border: '1px solid gray', backgroundColor: "#7D7789", borderRadius:"10px", color: "white"}}>2017-2022</p>
    </Col>
    <Col>
    <p style={{textAlign: 'left', fontWeight: "bolder", color: "#2c2727"}}>North South University</p>
    </Col>
  </Row>
  <Row>
    <Col>
        <p style={{border: '1px solid gray', backgroundColor: "#7D7789", borderRadius:"10px", color: "white"}}>2014-2016</p>
    </Col>
    <Col>
    <p style={{textAlign: 'left', fontWeight: "bolder", color: "#2c2727"}}>Shaheed Police Smrity College</p>
    </Col>
  </Row>
  <Row>
    <Col >
        <p style={{border: '1px solid gray', backgroundColor: "#7D7789", borderRadius:"10px", color: "white"}}>2012-2014</p>
    </Col>
    <Col>
    <p style={{textAlign: 'left', fontWeight: "bolder", color: "#2c2727"}}>Mirpur Girl's Ideal Laboratory Institute</p>
    </Col>
  </Row>
  </Container>
  </Grid>
  <Grid item xs={12} md={6}>
  <Container>
  <Row>
 
    <Col >
        <p style={{border: '1px solid gray', backgroundColor: "#7D7789", borderRadius:"10px", color: "white"}}>2021-running</p>
    </Col>

    <Col >
    <p style={{textAlign: 'left', fontWeight: "bolder", color: "#2c2727"}}>Uddog O Uddokta Japan  
    </p>
   <p className='writing-text fw-bold' style={{textAlign: 'left'}}>Intern (Full Stack Developer)</p>
  
    </Col>
  </Row>
  <Row>
 
    <Col >
        <p style={{border: '1px solid gray', backgroundColor: "#7D7789", borderRadius:"10px", color: "white"}}>2021-running</p>
    </Col>

    <Col >
    <p style={{textAlign: 'left', fontWeight: "bolder", color: "#2c2727"}}>3Z CLUB  
    </p>
   <p className='writing-text fw-bold' style={{textAlign: 'left'}}>Deputy Key Member</p>
  
    </Col>
  </Row>
  </Container>
  </Grid>


</Grid>


              </Box>
      </Container>
     
        </div>
    );
};

export default AboutMe;