import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import styles from './Style';
import './SignIn.css';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function ForgetPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component="main" 
    sx={{ 
      height: '100vh',
      display:'flex',
      justifyContent:{
        xs:'center',
        lg:'flex-end'
      },
      backgroundColor: '#FFFFFF'
      
      }}>
      <Container component="main" maxWidth="xs" sx={{
        backgroundColor:'#FFFFFF'
      }}>
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
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:'#FFFFFF'
          }}
        >
         
            {/* <LockOutlinedIcon /> */}
            <img

              src="/lock.png"
              alt="Your Image"
              style={{ maxWidth: '100%', height: 'auto' , margin:1}}
            
            />
          
          <Typography style={styles.forgetPassword}>
            Forgot your password ?
          </Typography>
          <Typography style={styles.forgetPasswordDesc}>Please enter the email address associated with your account and We will email you a link to reset your password.</Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
              autoFocus
              style={{
                // fontFamily:'Roboto Helvetica Arial sans-serif',
                fontSize:20
              }}
            />
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                 mt: 2,
                 mb: 2,
                 height:50,
                 borderRadius:2,
                 fontSize:15,
                 fontWeight:700,
                 backgroundColor: "#212b36",
                 '&:hover': {
                  backgroundColor: '#454F5B', // Set the background color to green on hover
                  
                },
                }}  
            >
              Send Request
            </Button>
            <Grid container justifyContent={'center'}>
              
                <a style={{color:'#212B36'  , fontWeight:600 , fontSize:14}} href='/'>
                  <ArrowBackIosNewTwoToneIcon style={{fontSize:11}}/>  
                 Return to sign in 
                </a>
              
             
            </Grid>
          </Box>
        </Box>
        
      </Container>
      </Grid>
  );
}