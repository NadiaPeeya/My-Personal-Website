import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Alert, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';

const ManageBlog = () => {
    const { token } = useAuth();
    const [allBlogs, setAllBlogs] = useState([])
    const [success, setSucsess] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/blogs', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllBlogs(data);
            });
    }, [token, success])


    const handleDelete = id => {
        setSucsess(false);
        if (window.confirm('Are you sure you want to delete this bike from database?')) {

            const url = `http://localhost:5000/blogs/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${token}`,

                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setSucsess(true);
                        console.log(data);

                    }

                })

        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
        }


    }

    return (
        <>
        <Typography variant="h1" sx={{ width: '100%', fontWeight: 500, paddingY: '30px', fontSize:{xs:'40px', md:"70px"}, color: 'white', backgroundColor: 'rgb(35, 34, 34)' }}>MANAGE BlOGS</Typography>
        <Box sx={{ width: '100%', display: { xs: 'none', md: 'block' } }}>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label=" List">
                    <TableHead>
                        <TableRow>

                            <TableCell align="left">Blog Banners</TableCell>
                            <TableCell align="left">Blog Name</TableCell>
                            <TableCell align="left"> Date</TableCell>
                            <TableCell align="left">Delete Blog</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allBlogs.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="left"><img style={{ height: '150px', width: '205px', borderRadius: '20px' }} src={row.img} alt="" /></TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">

                                    <Button onClick={() => handleDelete(row._id)} sx={{ backgroundColor: '#C54B47', m: 1 }} variant="contained"><DeleteForeverOutlined></DeleteForeverOutlined> </Button>
                                

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        <Box sx={{ width: '100%', display: { xs: 'block', md: 'none' }}}>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label=" List">
                    <TableBody>
                        {allBlogs.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{
                                    display: { xs: 'grid' },
                                    gridAutoColumns: { xs: '1fr' },
                                    gap: { xs: 1 },
                                }}
                            >

                                <TableCell align="center">
                                    <span style={{ fontSize: "20px", color: 'gray', fontWeight: 500 }}>Product Preview</span> <br />
                                    <img style={{ height: '100px', width: '125px', borderRadius: '20px' }} src={row.img} alt="" />
                                </TableCell>
                                <TableCell align="center">
                                    <span style={{ fontSize: "20px", color: 'gray', fontWeight: 500 }}>Products:</span>
                                    <span style={{ fontSize: "20px", color: 'black', fontWeight: 500 }}>{row.name}</span>
                                </TableCell>
                                <TableCell align="center">
                                    <span style={{ fontSize: "20px", color: 'gray', fontWeight: 500 }}>Price:</span>
                                    <span style={{ fontSize: "20px", color: 'black', fontWeight: 500 }}>{row.price}</span>
                                </TableCell>
                                <TableCell align="center">

                                    <Button onClick={() => handleDelete(row._id)} sx={{ backgroundColor: '#C54B47', m: 1 }} variant="contained"><DeleteForeverOutlined></DeleteForeverOutlined> </Button>
                                   

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        {success && <Alert severity="success">Deleted Successfully</Alert>}
    </>
    );
};

export default ManageBlog;