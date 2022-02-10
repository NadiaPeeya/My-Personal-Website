import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import MyImage from './../../Home/TopBanner/MyImage/MyImage';
import { Container, Spinner } from 'react-bootstrap';
import BlogLists from '../BlogLists/BlogLists';


const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

     
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    if(!blogs.length){
        return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }
    return (
        <div data-aos="zoom-out-down" className='about'>
        <Container className='mt-3'>
            <Box className=''>
             <h4 class="animate__animated animate__swing" >B L O G</h4>
              
 <Container className='mt-5'>
<Grid container spacing={2}>
{
     blogs.map(blog =><BlogLists blog={blog} key={blog._id}></BlogLists>)
}
</Grid>
 </Container>

                
             
            </Box>

        </Container>
        </div>
    );
};

export default BlogPage;