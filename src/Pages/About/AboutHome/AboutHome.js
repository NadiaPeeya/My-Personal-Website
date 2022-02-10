import React from 'react';
import Navigation from '../../Home/Navigation/Navigation';
import AboutMe from '../AboutMe/AboutMe';
import MyImage from './../../Home/TopBanner/MyImage/MyImage';
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import Footer from '../../Home/Footer/Footer';

const AboutHome = () => {
    return (
        <div> 
            <Navigation></Navigation>
            <Container>
  <Grid container spacing={0}>
  <Grid item xs={5}>
   <MyImage></MyImage>
  </Grid>
  <Grid item xs={7}>
 <AboutMe></AboutMe>
  </Grid>

 
</Grid>
  </Container>

  <Footer></Footer>



        </div>
    );
};

export default AboutHome;