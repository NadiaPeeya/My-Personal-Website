import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'
import { Box } from '@mui/material';


const Navigation = () => {
    const {user , logOut} = useAuth()
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="transparent">
        <Container>
        <NavHashLink className='styling-navbrand nav-brand' to="/home">NADIA</NavHashLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='me-auto'>
            
          </Nav>
          <Nav >
          <NavHashLink className='styling-nav fw-bold'
  to="/about"

>ABOUT</NavHashLink>
          <NavHashLink className='styling-nav fw-bold'
  to="/blog"

>BLOG</NavHashLink>

          <NavHashLink className='styling-nav fw-bold'
  to="/contact"

>CONTACT</NavHashLink>
<NavHashLink className='styling-nav fw-bold'
  to="/login"

>ADMIN</NavHashLink>
          </Nav>
          {
    user.email &&   
      
    <Box>
       <NavHashLink className='styling-nav fw-bold'
  to="/dashboard"

>DASHBOARD</NavHashLink>

<Button  onClick={logOut} className="styling-nav-logout fw-bold" color="inherit"> LOGOUT
     </Button> 
    </Box>
  
 

                    
  }
 
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navigation;