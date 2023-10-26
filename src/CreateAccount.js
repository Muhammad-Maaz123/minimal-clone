import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';

import {Link} from 'react-router-dom'

// import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './Style';
// import Link from '@mui/material/Link';




const credential = require('./data.json')

const theme = createTheme({
  typography:{
    fontFamily:'Public Sans, sans-serif',
    fontSize:24,
    padding: 10
    // fontWeightBold,
    // textAlign: 'left'
  },
})
function CreateAccount() {

//my states
const [fnameErr,setfnameErr] = useState(false);
const [lnameErr,setlnameErr] = useState(false);
const [passErr,setPassErr] = useState(false);
const [emailErr,setEmailErr] = useState(false);
const[matchE,setMatchE]=useState(true)
const[matchP,setMatchP]=useState(true)

  const handleSubmit = (event) => {
    setEmailErr(false);
    setPassErr(false);
    setMatchP(true);
    setMatchE(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    const fname = data.get('fname') 
    const lname = data.get('lname') 
    if(fname === '')
    {
      setfnameErr(true);
    }
    if(lname === '')
    {
      setlnameErr(true);
    }
    if(password === '')
    {
      setPassErr(true);
    }
    if(email ==='')
    {
      setEmailErr(true);
    }
    // console.log(credential.password)
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
    <>
    <Box 
        position={'center'}
        >
          <ThemeProvider theme={theme}>
          <Typography sx={{fontWeight: '700'}}> Sign in To Minimal </Typography>
          </ThemeProvider>
          <h5>Already Have an account <Link to="/">Sign in</Link> </h5>
        </Box>
          <Box component="form" noValidate onSubmit={handleSubmit}>
             <Box
             sx={{
                '& .MuiTextField-root': { m: 2, width: '40%' },
                my:-3
              }}
             >
          <TextField
              margin="normal"
              required
              id="fname"
              label="First name"
              name="fname"
              autoComplete="firstName"
              autoFocus
            />
            {
              fnameErr ? <p style={styles.errMessage}>First name required</p> : null
            }
            <TextField
              margin="normal"
              required
              id="lname"
              label="Last name"
              name="lname"
              autoComplete="lastName"
              autoFocus
            />
             {
              lnameErr ? <p style={styles.errMessage}>Last name required</p> : null
            }
            </Box>
         
            <TextField
              margin="normal"
              required
              id="email"
              label="Email address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{
                width:'90%',
                m:2
              }}
            />
            {
              emailErr ? <p style={styles.errMessage}>Email is required</p> : null
            }
            {
              !matchE ? <p style={styles.errMessage}> Email must be a valid email address </p> : null
            }
            <TextField
              margin="normal"
              required
              
              
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                width:'90%',
                m:2
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityIcon />
                  </InputAdornment>
                ),
              }}
            />
            {
              passErr ? <p style={styles.errMessage}>Password is required</p> : null
            }
            {
              !matchP ? <p style={styles.errMessage}> Password must be a valid password </p> : null
            }
            
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
              <b>Create Account</b>
            </Button>              
          </Box>
    
    </>
  )
}

export default CreateAccount