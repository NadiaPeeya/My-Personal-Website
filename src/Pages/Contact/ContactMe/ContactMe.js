import React, { useState } from 'react';
import img from '../../../images/email (4).png';
import img2 from '../../../images/phone.png';
import img3 from '../../../images/address.png';
// import { Container, Row, Col } from 'react-bootstrap';
import './ContactMe.css'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Container } from 'react-bootstrap';
import { Alert, Box, Button, Grid, Rating, TextField } from '@mui/material';
import useAuth from './../../../hooks/useAuth';
import { Typography } from '@mui/material';


const containerStyle = {
    width: '330px',
    height: '430px'
  };
  
  const center = {
    lat: 21.123409,
    lng: 78.544601
  };
  
const ContactMe = () => {
  
  const [reviewMessage, setreviewMessage] = useState({})
  const [reviewMessageAdded, setreviewMessageAdded] = useState(false);
  const [starValue, setStarValue] = React.useState(0);

  const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...reviewMessage };
      newInfo[field] = value;
      setreviewMessage(newInfo);
  }

  const handleConfirmation = e => {
      setreviewMessageAdded(false);
      const reviewFinal = {
        ...reviewMessage,
        star: starValue
    }
      e.preventDefault();
      
      fetch('http://localhost:5000/reviewMessages', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(reviewFinal)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  setreviewMessageAdded(true);
                  

              }
          })

      e.preventDefault();
  }
    return (
        <div data-aos="fade-left" data-aos-duration="400" className='about'>
 <Container className="my-3">
  <h3 class="animate__animated animate__heartBeat" >Get In Touch</h3>
  <Box className='mt-4'>
  <Container >
  <Grid container spacing={2}>
  <Grid item xs={12} md={4}>
    <div>
     <img width="15%" src={img3} alt="" />
        <p className='writing-text'>Agargaon Taltola</p>
    </div>
  </Grid>
  <Grid item xs={12} md={4}>
  <div>
     <img width="15%" src={img} alt="" />
        <p className='writing-text'>nadiapeeya05@gmail.com</p>
    </div>
  </Grid>
  <Grid item xs={12} md={4}>
  <div>
     <img width="15%" src={img2} alt="" />
        <p className='writing-text'>+8801832666987</p>
    </div>
  </Grid>
</Grid>
  </Container>
  </Box>
</Container>

<Box className='mt-5 pt-5'>
<Grid container spacing={2}>
  <Grid item xs={12} md={6}>
  {reviewMessageAdded && <Alert severity="success">Review Posted Successfully</Alert>}
  <form style={{ backgroundColor: 'white', paddingTop: '20px', height: '500px' }} onSubmit={handleConfirmation}>

<TextField
        sx={{ width: '70%', my: 1 }}
        name="name"
        onBlur={handleOnBlur}
        label="Name"
        id="standard-basic"
        variant="standard"
        
    />
<TextField
        sx={{ width: '70%', my: 1 }}
        name="email"
        onBlur={handleOnBlur}
        label="email"
        id="standard-basic"
        variant="standard"
        
    />
    <TextField
        id="standard-multiline-static"
        name="message"
        label="Leave a message"
        sx={{ width: '70%', my: 1 }}
        onBlur={handleOnBlur}
        multiline
        rows={8}
        
        variant="standard"
    />
    <br />
    <Typography className='writing-text fw-bold' variant="body1" component="legend">Rate Me!!</Typography>
            <Rating
                name="simple-controlled"
                value={starValue}
                onChange={(event, newValue) => {
                    setStarValue(newValue);
                }}
            />
            <br />
    <Button   sx={{ backgroundColor: '#333333', my: 1 }} type="submit" variant="contained">Post Review</Button>
</form>
  

  </Grid>
  <Grid item xs={12} md={6}>
  <LoadScript
googleMapsApiKey="AIzaSyDaCqacq6HBDQwGHiurAddTymRV0B4s-68"
>
<GoogleMap
 mapContainerStyle={containerStyle}
 center={center}
 zoom={10}
>
 { /* Child components, such as markers, info windows, etc. */ }
 <></>
</GoogleMap>
</LoadScript>
  </Grid>
</Grid>

</Box>





        </div>
        
  
     
      
    );
};

export default ContactMe;