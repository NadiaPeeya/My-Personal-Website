import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';


import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import useAuth from './../../../hooks/useAuth';
import {  Logout, Person } from '@mui/icons-material';
import MakeAdmin from './../MakeAdmin/MakeAdmin';
import AddBlog from '../AddBlog/AddBlog';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import ManageBlog from '../ManageBlog/ManageBlog';
  

const drawerWidth = 170;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box style={{ backgroundColor: 'rgb(35, 34, 34)', height: '100%' }}>
            <Toolbar />
            <Divider />
            <div>
           
                
                 {admin && <Box>
               
                    <NavLink style={{ display: 'block', marginTop: 3, textDecoration: 'none', color: 'white' }} to='/home'>
                    <Button sx={{ color:'whtie'  }} color="inherit">Home Page</Button>
                </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/makeAdmin`}>
                        <Button sx={{ color:'whtie'  }} color="inherit">Make Admin</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/addBlogs`}>
                        <Button sx={{ color:'whtie' }} color="inherit">Add Blog</Button>
                    </NavLink>
                    <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to={`${url}/manageBlogs`}>
                        <Button sx={{ backgroundColor: '#333333',color:'whtie'  }} color="inherit">Manage Blogs</Button>
                    </NavLink>


                </Box>}
            </div>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', hight: '100%' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'rgb(35, 34, 34)',
                    paddingY:1,
                   
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "D3BDBD" }}>
                      NADIA'S BLOG
                    </Typography>
                    {
                        user?.email &&
                            <Box>
                                <Typography variant="h6" sx={{ display: 'inline', backgroundColor: 'white', color: '#333333', borderBottom: '3px solid aliceBlue', boxShadow: "0px 5px 2px gray", borderRadius: '10px', padding: '9px', marginY: '3px' }}>
                                    <Person /> {user.displayName}
                                </Typography>
                                <Button
                                    sx={{ backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD',m:2 }} variant="contained"
                                    onClick={logOut}
                                    color="inherit"><Logout></Logout></Button>
                            </Box>
                          
                    }
                   
                </Toolbar>

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
           
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>


                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>

              

                  

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    
                    <AdminRoute path={`${path}/addBlogs`}>
                      <AddBlog></AddBlog>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageBlogs`}>
                    <ManageBlog></ManageBlog>
                    </AdminRoute>


                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;