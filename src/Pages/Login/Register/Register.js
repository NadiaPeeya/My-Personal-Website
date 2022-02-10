import React, { useState } from 'react';
import Navigation from '../../Home/Navigation/Navigation';
import Footer from './../../Home/Footer/Footer';
import { Container, Button, Alert } from 'react-bootstrap';
import { Box, TextField, CircularProgress } from '@mui/material';
import { Typography } from '@mui/material';

import { NavHashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth';
import { useHistory, NavLink } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [loginData, setLoginData] = useState({})
   const history = useHistory();

    const {registerUser, isLoading, user, authError} = useAuth();
    const handleOnBlur = e => {
     const field = e.target.name;
     const value= e.target.value;
     const newLoginData = {...loginData};
     newLoginData[field] = value;
     setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container className='login mt-5 pt-5'>
           <Box className='login-box'>
           <Typography variant="body1" gutterBottom>
         Register
      </Typography>
  {!isLoading && <form onSubmit={handleLoginSubmit}>
      <TextField 
      required
      sx= {{width: "75%", m: 1}}
      id="standard-basic" 
      label="Your Name"
      type="text"
      name="name" 
      onBlur={handleOnBlur}
      variant="standard" />
      <TextField 
      required
      sx= {{width: "75%", m: 1}}
      id="standard-basic" 
      label="Your Email"
      type="email"
      name="email" 
      onBlur={handleOnBlur}
      variant="standard" />
        <TextField          required
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                           onBlur={handleOnBlur}
                            variant="standard" />
        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            id="standard-basic"
                            label="ReType your Password"
                            type="password"
                            name="password2"
                           onBlur={handleOnBlur}
                            variant="standard" />
                            <br />
                            <Button className="register-btn" sx={{width: '75%', m: 1}} 
                            type="submit"
                            variant="contained">Register</Button>
                             <NavHashLink className="login-register"
                            style={{ textDecoration: 'none' }}
                            to="/login">
                                <br />
                                <NavLink className="login-register" sx={{width: "75%", textDecoration: 'none'}} to="/login">New User? Please Register</NavLink>
                        </NavHashLink>
                     
      {
          user?.email && <Alert severity="success">Your Account has been created successfully</Alert>
      }
    
      </form> 
      }
         {
          isLoading && <CircularProgress />
      }
    
      
      
    
           </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;