import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TopBanner.css'
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import MyImage from './MyImage/MyImage';
import TopHome from './TopHome/TopHome';

const TopBanner = () => {
    return (
        <div className='banner'>
           {/* <Container className=''>
           <Row>
    <Col className='large-text'>
        <Box>
        <Typography className='text-white' variant="h1" component="div" gutterBottom>
       Nadia Binte Rahman  
      </Typography>
        <Typography className='text-white' variant="subtitle1" component="div" gutterBottom>
       Creative Web Developer
      </Typography>
        </Box>
 
     
    </Col>
    <Col className='background'>
     <img width="50%" src="https://i.ibb.co/gdPSzt0/shari4-removebg-preview.png" alt="" />
    </Col>
  </Row>
           </Container> */}

  
  <Container>
  <Grid container spacing={0}>
  <Grid item xs={5}>
   <MyImage></MyImage>
  </Grid>
  <Grid item xs={7}>
  <TopHome></TopHome>
  </Grid>

 
</Grid>
  </Container>





        </div>
    );
};

export default TopBanner;