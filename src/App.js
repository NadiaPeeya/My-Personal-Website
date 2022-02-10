import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Pages/Home/Home';
import ContactHome from './Pages/Contact/ContactHome/ContactHome';
import AboutHome from './Pages/About/AboutHome/AboutHome';
import BlogHome from './Pages/Blog/BlogHome/BlogHome';
import BlogItem from './Pages/Blog/BlogLists/BlogItem/BlogItem';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from '../src/Pages/Login/PrivateRoute/PrivateRoute'

AOS.init();
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
        <Route path="/contact">
          <ContactHome></ContactHome>
          </Route>
        <Route path="/blog">
         <BlogHome></BlogHome>
          </Route>
        <Route path="/blogs/blogItem/:id">
        <BlogItem></BlogItem>
          </Route>
        <Route path="/blog">
         <BlogHome></BlogHome>
          </Route>
        <Route path="/about">
         <AboutHome></AboutHome>
          </Route>
          <Route path="/login">
         <Login></Login>
          </Route>
          <Route path="/register">
         <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
    
        </Switch>
    </Router>
      </AuthProvider>
     
    </div>
  );
}

export default App;
