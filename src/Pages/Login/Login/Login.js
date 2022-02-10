import { Container, Box, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React from 'react';
import { Typography } from '@mui/material';
import Navigation from './../../Home/Navigation/Navigation';
import Footer from './../../Home/Footer/Footer';
import './Login.css'
import { useState } from 'react';
import { Link, NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();

    const {user, signInWithGoogle, loginUser, isLoading, authError} = useAuth()
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    const handleLoginSubmit = e => {
         loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container className='login mt-5 pt-5'>
           <Box className='login-box'>
           <Typography variant="body1" gutterBottom>
         Login
      </Typography>
      <form onSubmit={handleLoginSubmit}>
      <TextField 
      sx= {{width: "75%", m: 1}}
      id="standard-basic" 
      label="Your Email"
      type="email"
      name="email" 
      onBlur={handleOnBlur}
      variant="standard" />
        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                           onBlur={handleOnBlur}
                            variant="standard" />
                            
                            <Button sx={{width: '75%', m: 1, backgroundColor: "#333333"}} 
                            type="submit" 
                            variant="contained">Login</Button>
                                  <Button onClick={handleGoogleSignIn} sx={{width: '75%', m: 1, backgroundColor: "#333333"}} 
                            type="submit"
                            variant="contained">Sign In With Google</Button>
                            
                        {
          isLoading && <CircularProgress />
      }
   
    
      </form>
          
 
                            <br />
                            <NavLink className="login-register" sx={{width: "75%", textDecoration: 'none'}} to="/register">New User? Please Register</NavLink>
                   {
                       user?.email && <Alert severity='success'>Logged In Successfully</Alert>
                   }

                            {/* {
          authError && <Alert severity="error">This Email does not exists</Alert>
      }
                */}
           </Box>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;