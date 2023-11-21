// import React from 'react'
// import { useState } from 'react';
// // import CssBaseline from '@mui/material/CssBaseline';
// import Button from '@mui/material/Button';

// // import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// // import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// // import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// // import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import styles from './Style';
// function CreateNewUser() {
//   return (
//     <>
//     <Grid container
//     >
//         <Grid item
//           sx={styles.createNewUser}
//         >
//         <Box>

//         <h1>Create a new user</h1>
//         <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
//             <li style={{ marginRight: '20px' }}>Dashboard</li>
//             <li style={{ marginRight: '20px' }}>User</li>
//             <li>New User</li>
//         </ul>
//         </Box>
//         </Grid>
//     </Grid>
    
//     </>
//   )
// }

// export default CreateNewUser
import React from 'react';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { Grid, Paper, TextField, Button, Typography, Box } from '@mui/material';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import IconButton from '@mui/material/IconButton';
import styles from './Style';
const CreateNewUser = () => {
    const [toggleSwitch, setToggleSwitch] = useState(false);

    const handleToggleSwitch = () => {
      setToggleSwitch(!toggleSwitch);
    };
  
  return (
    <>
    
    <Grid container xs={12} sm={8} md={6} sx={{ display: 'flex', flexDirection: 'row' }}>
      <Grid item>
        <Box style={styles.myHeader}>
          <b>Create New User</b>
        </Box>
        <Box>
          <ul sx={{ display: 'flex', flexDirection: 'row',  listStyle: 'none' }}>
            <li>
              <Typography>Dashboard</Typography>
            </li>
            <li>
              <Typography>User</Typography>
            </li>
            <li>
              <Typography>New User</Typography>
            </li>
          </ul>
        </Box>
      </Grid>
    </Grid>
    <Grid container spacing={2} mt={'0rem'} marginLeft={'2rem'}>
      {/* Upload Photo Section */}
      <Grid item xs={12} sm={4}>
        {/* <Box>Create New User</Box> */}
        <Paper
          sx={{
            borderRadius: 5,
            // borderColor: 'yellow',s
            borderWidth: 2,
            // borderStyle: 'solid',
            padding: 2,
          }}
        >
        <Box
        sx={{
            display:'flex',
            justifyContent:'center'
        }}
        >
        <input accept="image/*" style={{ display: 'none' }} id="upload-photo" type="file" />
        <label htmlFor="upload-photo">
          <IconButton
          variant="contained"
          component="span"
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            padding:6,
            mt:'5rem'
          }}
          
        //   startIcon={<CameraEnhanceIcon sx={{ fontSize: 40 }} />}
        >
            <CameraEnhanceIcon sx={{fontSize:30}}/>
          <Typography sx={{fontSize:12}}>
            Upload photo
          </Typography>
        </IconButton>
        </label> 
        </Box>
        <Box
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography sx={{fontSize:12,display:'flex',justifyContent:'center',opacity:0.5}}>Allowed *.jpeg, *.jpg, *.png, *.gif</Typography>
          <Typography sx={{fontSize:12 ,display:'flex',justifyContent:'center',opacity:0.5}}>  max size of 3.1 MB</Typography>
          </Box>
          {/* toggle switch */}
          <Box>


          </Box>
          <Box><Typography sx={{mt:2}}><b>Email Verified</b></Typography></Box>

          <Box
          sx={{
            display: 'flex',
            justifyContent: 'left',
            // marginTop: 2,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }} onClick={handleToggleSwitch} >
          Disabling this will automatically<br/>
          send the user a verification<br/> 
          email
          </Typography>
          <Switch checked={toggleSwitch} onChange={handleToggleSwitch} 
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              transform: 'translateX(18px)',
              color: '#FFFF',
              size:1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
              },
            },
            '& .MuiSwitch-thumb': {
                mt:0.6,
                marginLeft:0.5,
                width: 15, // Decrease width
                height: 15, // Decrease height
              },
            '& .MuiSwitch-track': {
              borderRadius: 16,
              height:20,
              backgroundColor: toggleSwitch ? 'green' : 'green', // Change color when enabled

            //   backgroundColor:'green'    
              
            },
          }}
          />
        </Box>
        </Paper>
      </Grid>

      {/* Form Section */}
      <Grid item xs={12} sm={8}>
        <Paper
          sx={{
            borderRadius: 2,
            // borderColor: 'yellow',
            borderWidth: 2,
            // borderStyle: 'solid',
            padding: 2,
          }}
        >
          {/* Two Text Fields in a Row */}
          <Grid container spacing={2} >
            <Grid item xs={12} md={6}>
              <TextField label="Full Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Email Address" variant="outlined" fullWidth />
            </Grid>
          </Grid>

          {/* Two Text Fields in a Row */}
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} md={6}>
              <TextField label="Phone Number" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Country" variant="outlined" fullWidth />
            </Grid>
          </Grid>
          {/* Two Text Fields in a Row */}
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} md={6}>
              <TextField label="State/Region" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Zip/Code" variant="outlined" fullWidth />
            </Grid>
          </Grid>

          {/* Two Text Fields in a Row */}
          <Grid container spacing={2} my={1}>
            <Grid item xs={12} md={6}>
              <TextField label="Company" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Role" variant="outlined" fullWidth />
            </Grid>
          </Grid>

          <Box 
          sx={{ 
            marginTop: 2,
            display:'flex',
            justifyContent:'right'
            }}>
            <Button
            sx={{
                backgroundColor:'#212B36',
                color:'white',
                '&:hover': {
                    backgroundColor: '#454F5B',
                  }
            }}
            >
              <b>Create User</b>
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
    </>
  );
};

export default CreateNewUser;
