
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
// import Link from '@mui/material/Link';
// import { useState } from 'react';
// // import {Link,useNavigate} from 'react-router-dom'


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
// function Test() {
// //   const navigate=useNavigate();
// const [myErr,setMyErr] = useState(false);
// const [passErr,setPassErr] = useState(false);
// const [emailErr,setEmailErr] = useState(false);

// // const[match,setMatch]=useState(true)
//   const handleSubmit = (event) => {

//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     const email = data.get('email');
//     const password = data.get('password');
//     if(password === '')
//     {
//       setPassErr(true)
//     }
    
//     if(credential.password === password && credential.email === email){
//         setMatch(true)
//     }
//     else 
//     {
//       setMatch(false)
//     }
//     // if(email === '')
//     // {
//     //   setEmailErr(true);
//     //   setMatch(true) 
//     // }
//     // if(credential.password === password & credential.email === email)
//     // {
      
//     //   setMyErr(false)
//     // //   alert('User Logged In!! ', myErr);
//     // }
//     // else 
//     // {
    
//     // setMyErr(true)
//     // // alert('Invalid!!', myErr);
//     // }
//     // alert(myErr)
//     // // console.log(credential.user2.password)
//   };
//   const forgetHandleClick = () =>{
    
//     // navigate("/forgetpassword")
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
//     </Box>
//     <Box sx={styles.demoEmail}>
//         Use email : <b>demo@minimals.cc</b> / password: <b>demo1234</b>
//     </Box>

//     <Box component="form" noValidate onSubmit={handleSubmit}>
        
                
            
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
            

//             {
//              !match ? <p style={styles.errMessage}>Email must be a valid email address</p> :null
//             }
//             {
//               emailErr ? <p style={styles.errMessage}>Email is required</p> :null
//             }

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
//             {
//               passErr ? <p style={styles.errMessage}>Password is required</p> :null
//             }

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
//     </Box>
//     </>
//   )
// }

// export default Test

import React from 'react';
import { Box, Typography, Select, MenuItem, Menu } from '@mui/material';

const SizeDropdownBox = () => {
  const [selectedSize, setSelectedSize] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSize = (event) => {
    setSelectedSize(event.target.value);
    handleClose();
  };

  return (
    <Box display="flex" alignItems="center">
      {/* Label Box */}
      <Box marginRight={1}>
        <Typography>Size</Typography>
      </Box>

      {/* Dropdown Box */}
      <Box>
        <Select
          value={selectedSize}
          onOpen={handleOpen}
          onClose={handleClose}
          inputProps={{ 'aria-label': 'Select Size' }}
        >
          {/* Default Empty Option */}
          <MenuItem value="" disabled>Select Size</MenuItem>

          {/* Options from 1 to 10 */}
          {[...Array(10).keys()].map((number) => (
            <MenuItem key={number + 1} value={number + 1}>
              {number + 1}
            </MenuItem>
          ))}
        </Select>

        {/* Menu with Scrolling */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ style: { maxHeight: 200, overflowY: 'auto' } }}
        >
          {[...Array(10).keys()].map((number) => (
            <MenuItem key={number + 1} onClick={() => handleSize({ target: { value: number + 1 } })}>
              {number + 1}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};

export default SizeDropdownBox;
