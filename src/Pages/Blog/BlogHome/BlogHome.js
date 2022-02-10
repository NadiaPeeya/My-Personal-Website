import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';
import BlogPage from '../BlogPage/BlogPage';
import { Container } from 'react-bootstrap';
import { Grid } from '@mui/material';
import MyImage from './../../Home/TopBanner/MyImage/MyImage';

const BlogHome = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
  <Grid container spacing={0}>
  <Grid item xs={12} md={5}>
   <MyImage></MyImage>
  </Grid>
  <Grid item xs={12} md={7}>
   <BlogPage></BlogPage>
  </Grid>

 
</Grid>
  </Container>
            <Footer></Footer>

        </div>
    );
};

export default BlogHome;