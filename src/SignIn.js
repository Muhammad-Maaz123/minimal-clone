import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SignIn.css';
import "./data.json";
import Login from './Login';
import CreateAccount from './CreateAccount';
import { Outlet } from 'react-router-dom';

export default function SignIn() {
  return (
    
    
    <Grid container component="main" 
    sx={{ 
      height: '100vh',
      display:'flex',
      justifyContent:{
        xs:'center',
        lg:'space-around'
      },
      backgroundColor: '#FAFBFB'
      
      }}>

    <Grid item
    sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      my:20,
      backgroundColor:'FAFBFB'
    }}
    >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ height: '100%', padding: '16px', width: '50%' }}
          
          sx={
            {
              display:{
                xs:'none',
                lg:'block', 
              }
         
            }
          }
        >
         
            {/* Place your image here */}
            <img
              src="/hui.png"
              alt="Your Image"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          
        </Box>
        <a href='/'>
        <Avatar
          sx={{
            width: 150,
            height: 150,
            position: 'absolute', // Set position to absolute for the logo
            top: -30, // Adjust top value to position the logo
            left: 10, // Adjust left value to position the logo
          }}
          src="/Minimal.png" // Provide the path to your logo image
        /></a>
      </Grid>
      {/* new grid */}
      <Grid item
      xs={10}
      md={6}
      lg={4}
      sx={{
        my:0, //make it 6 (2:14am)
        
        backgroundColor:'white'
      }}
      > {/* This takes the remaining 35% */}
        
        <Box
          sx={{
            my: 13, // giving scrollbar above value 13
            mx: 4,
            display: 'flex',
            color:'black',
            backgroundColor:'white',
            flexDirection: 'column',
          }}
        > 
        <Outlet/>
           
        </Box>
  </Grid>
    </Grid>  
  );
}
