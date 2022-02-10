import React from 'react';
import {  Container } from 'react-bootstrap';
import './TopBanner.css'

import { Grid } from '@mui/material';
import MyImage from './MyImage/MyImage';
import TopHome from './TopHome/TopHome';

const TopBanner = () => {
    return (
        <div className='banner'>
 

  
  <Container>
  <Grid container spacing={0}>
  <Grid item xs={12} md={5}>
   <MyImage></MyImage>
  </Grid>
  <Grid item xs={12} md={7}>
  <TopHome></TopHome>
  </Grid>

 
</Grid>
  </Container>





        </div>
    );
};

export default TopBanner;