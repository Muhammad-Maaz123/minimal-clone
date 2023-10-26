// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';

// import Link from '@mui/material/Link';
// // import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// // import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// // import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import DeleteIcon from '@mui/icons-material/Delete'
// import InputAdornment from '@mui/material/InputAdornment';
// import Paper from '@mui/material/Paper';



// // import fontWeightBold

// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import './SignIn.css';
// // import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import styles from './Style';
// import "./data.json";
// import InfoIcon from '@mui/icons-material/Info';

// // TODO remove, this demo shouldn't need to reset the theme.
// const credential = require('./data.json')
// // const defaultTheme = createTheme();
// const theme = createTheme({
//   typography:{
//     fontFamily:'Public Sans, sans-serif',
//     fontSize:24,
//     padding: 10
//     // fontWeightBold,
//     // textAlign: 'left'
//   },
// })
// export default function SignInSide() {

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

//   return (
    
    
//     <Grid container component="main" sx={{ height: '100vh' }}>

//     <Grid item xs={8}>
//         <Box
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//           style={{ height: '100%' }}
//         >
//           <Paper elevation={3} style={{ padding: '16px', width: '40%' }}>
//             {/* Place your image here */}
//             <img
//               src="/hui.png"
//               alt="Your Image"
//               style={{ maxWidth: '100%', height: 'auto' }}
//             />
//           </Paper>  
//         <a href='/'>
//         <Avatar
//           sx={{
//             width: 150,
//             height: 150,
          
//             position: 'absolute', // Set position to absolute for the logo
//             top: -30, // Adjust top value to position the logo
//             left: 10, // Adjust left value to position the logo
//           }}
//           src="/Minimal.png" // Provide the path to your logo image
//         /></a>
//         </Box>
//       </Grid>
//       {/* new grid */}
//       <Grid item xs={4}> {/* This takes the remaining 35% */}
//         <Paper elevation={3} style={{ width: '100%', padding: '16px' }}>
//         <Box
//           sx={{
//             my: 8, // for top/bottom margins
//             mx: 4,
//             // mt: 20,
//             // mx:7,
//             display: 'flex',
//             color:'black',
//             // border:'black',
//             // borderBlock:'red',
//             // backgroundColor:'white',
//             flexDirection: 'column',
//             // alignItems: 'center',
//           }}
//         > 
//         <Box position={'center'}>
//           <ThemeProvider theme={theme}>
//           <Typography sx={{fontWeight: '700'}}> Sign in To Minimal </Typography>
//           </ThemeProvider>
//           <h5>New user? <a href="/">Create an Account</a> </h5>
//         </Box>
//         <Box sx={styles.demoEmail}>
//         Use email : demo@minimals.cc / password: demo1234
//         </Box>

//           <Box component="form" noValidate onSubmit={handleSubmit}>
            
//             <TextField
//               margin="normal"
//               required
//               fullWidth

//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <InfoIcon />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Box item sx={{ textAlign: 'right' }}>
//               <Link href="#" variant="body2">
//                 {"Forgot Password?"}
//               </Link>
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
//         </Box>

//         </Paper>
//   </Grid>

      
      
//     </Grid>  
//   );
// }

