import React from 'react';
import Navigation from './../../Home/Navigation/Navigation';
import Footer from './../../Home/Footer/Footer';

import ContactMe from '../ContactMe/ContactMe';
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import MyImage from './../../Home/TopBanner/MyImage/MyImage';

const ContactHome = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
  <Grid container spacing={0}>
  <Grid item xs={5}>
   <MyImage></MyImage>
  </Grid>
  <Grid item xs={7}>
<ContactMe></ContactMe>
  </Grid>

 
</Grid>
  </Container>
            <Footer></Footer>
        </div>
    );
};

export default ContactHome;