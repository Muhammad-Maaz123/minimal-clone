// import React from 'react'
// import Box from '@mui/material/Box';
// import InputAdornment from '@mui/material/InputAdornment';
// import InfoIcon from '@mui/icons-material/Info';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// // import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import styles from './Style';
// // import Link from '@mui/material/Link';
// import {Link,useNavigate} from 'react-router-dom'




// const credential = require('./data.json')

// const theme = createTheme({
//   typography:{
//     fontFamily:'Public Sans, sans-serif',
//     fontSize:24,
//     padding: 10
//     // fontWeightBold,
//     // textAlign: 'left'
//   },
// })
// function Login() {
//   const navigate=useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const email = data.get('email');
//     const password = data.get('password');
//     console.log(credential.password)
//     if(credential.password === password & credential.email === email)
//     {
//       console.log('User Logged In!!');
//     }
//     else 
//     {
//     console.log('Invalid!!');
//     }
//     // console.log(credential.user2.password)
//   };
//   const forgetHandleClick = () =>{
    
//     navigate("/forgetpassword")
//   }
//   return (
//     <>
//     <Box 
//         position={'center'}
//         >
//           <ThemeProvider theme={theme}>
//           <Typography sx={{fontWeight: '700'}}> Sign in To Minimal </Typography>
//           </ThemeProvider>
//           <h5>New user? <Link to="createaccount">Create an Account</Link> </h5>
//         </Box>
//         <Box sx={styles.demoEmail}>
//         Use email : <b>demo@minimals.cc</b> / password: <b>demo1234</b>
//         </Box>

//           <Box component="form" noValidate onSubmit={handleSubmit}>
            
//             <TextField
//               margin="normal"
//               required
//               sx={{
//                 width:'90%',
//                 m:2
//               }}

//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               sx={{
//                 width:'90%',
//                 m:2
//               }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <VisibilityIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Box item 
//             onClick={()=>forgetHandleClick()}
            
//             sx={{ 
//               textAlign: 'right',
//               color:'black',
//               }}>
              
//               <Link to="forgetpassword">Forgot Password?</Link>
              
//             </Box>
//             <Button
              
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                  mt: 2,
//                  mb: 2,
//                  height:50,
//                  borderRadius:2,
//                  backgroundColor: "#212b36",
//                  '&:hover': {
//                   backgroundColor: '#454F5B', // Set the background color to green on hover
                  
//                 },
//                 }}
//             >
//               <b>Login</b>
//             </Button>              
//           </Box>
    
//     </>
//   )
// }

// export default Login

import React from 'react'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './Style';
// import Link from '@mui/material/Link';
import { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'


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
function Login() {
//   const navigate=useNavigate();
const [myErr,setMyErr] = useState(false);
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
    if(password === '')
    {
      setPassErr(true);
    }
    if(email ==='')
    {
      setEmailErr(true);
    }
    if (email !=='')
    {
      if(credential.email === email){
        console.log('first')
        setMatchE(true)
      }
      else 
      {
        console.log('second')
        setMatchE(false)
      }
    }
    if (password !=='')
    {
      if(credential.password === password){
        console.log('first P ')
        setMatchP(true)
      }
      else 
      {
        console.log('second P  ')
        setMatchP(false)
      }
    }
    // if(email === '')
    // {
    //   setEmailErr(true);
    //   setMatch(true) 
    // }
    // if(credential.password === password & credential.email === email)
    // {
      
    //   setMyErr(false)
    // //   alert('User Logged In!! ', myErr);
    // }
    // else 
    // {
    
    // setMyErr(true)
    // // alert('Invalid!!', myErr);
    // }
    // alert(myErr)
    // // console.log(credential.user2.password)
  };
  const forgetHandleClick = () =>{
    
    // navigate("/forgetpassword")
  }
  return (
    <>
    <Box 
        position={'center'}
        >
          <ThemeProvider theme={theme}>
          <Typography sx={{fontWeight: '700'}}> Sign in To Minimal </Typography>
          </ThemeProvider>
          <h5>New user? <Link to="createaccount">Create an Account</Link> </h5>
    </Box>
    <Box sx={styles.demoEmail}>
        Use email : <b>demo@minimals.cc</b> / password: <b>demo1234</b>
    </Box>

    <Box component="form" noValidate onSubmit={handleSubmit}>
        
                
            
            <TextField
              margin="normal"
              required
              sx={{
                width:'90%',
                m:2
              }}

              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              
              
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

            <Box item 
            onClick={()=>forgetHandleClick()}
            
            sx={{ 
              textAlign: 'right',
              color:'black',
              }}>
              
              <Link to="forgetpassword">Forgot Password?</Link>
              
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
    </>
  )
}

export default Login