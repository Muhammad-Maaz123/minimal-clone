import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import Link from '@mui/material/Link';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete'
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';



// import fontWeightBold

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './SignIn.css';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './Style';
import "./data.json";

// TODO remove, this demo shouldn't need to reset the theme.
const credential = require('./data.json')
// const defaultTheme = createTheme();
const theme = createTheme({
  typography:{
    fontFamily:'Public Sans, sans-serif',
    fontSize:24,
    padding: 10
    // fontWeightBold,
    // textAlign: 'left'
  },
})
export default function SignInSide() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    console.log(credential.password)
    if(credential.password === password & credential.email === email)
    {
      console.log('User Logged In!!');
    }
    else 
    {
    console.log('Invalid!!');
    }
    // console.log(credential.user2.password)
  };

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
        my:6,
        backgroundColor:'white'
      }}
      > {/* This takes the remaining 35% */}
        
        <Box
          sx={{
            my: 8, // for top/bottom margins
            mx: 4,
            // mt: 20,
            // mx:7,
            display: 'flex',
            color:'black',
            // border:'black',
            // borderBlock:'red',
            backgroundColor:'white',
            flexDirection: 'column',
            // alignItems: 'center'
          }}
        > 
        <Box 
        position={'center'}
        >
          <ThemeProvider theme={theme}>
          <Typography sx={{fontWeight: '700'}}> Sign in To Minimal </Typography>
          </ThemeProvider>
          <h5>New user? <a href="/">Create an Account</a> </h5>
        </Box>
        <Box sx={styles.demoEmail}>
        Use email : <b>demo@minimals.cc</b> / password: <b>demo1234</b>
        </Box>

          <Box component="form" noValidate onSubmit={handleSubmit}>
            
            <TextField
              margin="normal"
              required
              fullWidth

              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <InfoIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Box item sx={{ 
              textAlign: 'right',
              color:'black', 
              }}>
              <Link href="#" variant="body2">
                {"Forgot Password?"}
              </Link>
            </Box>
            <Button
              
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                 mt: 2,
                 mb: 2,
                 height:50,
                 borderRadius:2,
                 backgroundColor: "#212b36",
                 '&:hover': {
                  backgroundColor: '#454F5B', // Set the background color to green on hover
                  
                },
                }}
            >
              <b>Login</b>
            </Button>              
          </Box>
        </Box>

        
  </Grid>
    </Grid>  
  );
}
