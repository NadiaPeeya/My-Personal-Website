import React, { useState } from 'react';
import { Container, Alert } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { Button, TextField } from '@mui/material';
import { Add } from '@mui/icons-material';


const AddBlog = () => {
    const [blogInfo, setBlogInfo] = useState({})
    const [blogAdded, setBlogAdded] = useState(false);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...blogInfo };
        newInfo[field] = value;
        setBlogInfo(newInfo);
    }

    const handleConfirmation = e => {
        setBlogAdded(false);
        e.preventDefault();
        
        fetch('https://murmuring-meadow-96410.herokuapp.com/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBlogAdded(true);
                    

                }
            })

        e.preventDefault();
    }
    return (
        <Container>
            
            
        <Typography variant="h1" sx={{fontWeight:500, padding: '30px', color: 'white', marginTop: 3, backgroundColor:'rgb(35, 34, 34)'}}>ADD NEW BlOGS</Typography>
        
        {blogAdded && <Alert severity="success">Added Successfully</Alert>}

        <form style={{backgroundColor: 'white', paddingTop: '20px', height: '500px'}} onSubmit={handleConfirmation}>

            <TextField
                sx={{ width: '70%', m: 1 }}
                name="name"
                onBlur={handleOnBlur}
                label="Blog Name"
                id="outlined-size-small"
                size="small"
            />
            <TextField
                sx={{ width: '70%', m: 1 }}
                name="catagory"
                onBlur={handleOnBlur}
                label="Catagory"
                id="outlined-size-small"
                size="small"
            />
            

            <TextField
                sx={{ width: '70%', m: 1 }}
                name="description"
                onBlur={handleOnBlur}
                label="Description"
                id="outlined-size-small"
                size="small"
            />
             {/* <TextField
                    required
                    sx={{ width: '70%', m: 1 }}
                    name="key"
                    onBlur={handleOnBlur}
                    label="Set Key < 7 to appear on home"
                    id="outlined-size-small"
                    size="small"
                /> */}
            <TextField
                sx={{ width: '70%', m: 1 }}
                name="date"
                onBlur={handleOnBlur}
                label="Date"
                id="outlined-size-small"
                size="small"
            />
            <TextField
                sx={{ width: '70%', m: 1 }}
                name="img"
                onBlur={handleOnBlur}
                label="Image"
                id="outlined-size-small"
                size="small"
            />
       
            <br />
            <Button sx={{ backgroundColor: '#2c2727', m: 1 }} type="submit" variant="contained"> <Add sx={{marginX:1}}/> Add To Database</Button>
        </form>
        {/* <NavLink style={{textDecoration:'none'}} to='/'>
        <Button sx={{margin: '20px'}} variant="outlined">Home</Button>
        </NavLink> */}
    </Container>
    );
};

export default AddBlog;