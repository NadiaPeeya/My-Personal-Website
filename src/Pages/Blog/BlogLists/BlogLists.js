import React from 'react';
import {  CardActions, CardContent, CardMedia, Grid, } from '@mui/material';
import { Button, Card, } from 'react-bootstrap';
import { Typography } from '@mui/material';
import './BlogLists.css'
import { NavLink } from 'react-router-dom';

const BlogLists = (props) => {
    const {_id, img, name, date, catagory} = props.blog;
    return (
        <Grid item xs={12} md={4}>
            <Card className='blog-card' sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="130"
        image={img}
        alt="green iguana"
      />
      <CardContent>
      <Typography  className='writing-text' gutterBottom variant="body2" component="div">
       {catagory} 
        </Typography>
      <Typography className='writing-text' gutterBottom variant="subtitle1" component="div">
          {date}
        </Typography>
        <Typography sx={{textAlign: "justify", fontWeight: "700", color: "#464040"}} gutterBottom variant="body" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
      </CardContent>
      <CardActions>
      <NavLink  className='mx-auto' to={`blogs/blogItem/${_id}`}><Button  className='viewMore' style={{border: '1px solid #333333', boxShadow: '0px 5px 2px gray'}}  size="small">View</Button></NavLink>
        
      </CardActions>
    </Card>
      </Grid>
    );
};

export default BlogLists;