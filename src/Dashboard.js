// import React from 'react'
// import { useEffect } from 'react';
// import Grid from '@mui/material/Grid';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import MenuIcon from '@mui/icons-material/Menu';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { useState } from 'react';
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
// import CloseSidebar from './CloseSidebar';
// import OpenSidebar from './OpenSidebar';

// function Dashboard() {
//   const [sideBar,setSidebar] = useState(true)


//   function closeSidebar(){
//      setSidebar(false)
//   }
//   function openSidebar(){
//     setSidebar(true)
//  }
//   return (
//     <>
//     <Grid container style={styles.containerArea}>
//       {sideBar ? 
//       //  true condition (open)
//        <>
//        <Grid item xs={3}>
//           <Box 
//           sx={
//             styles.sideBar
//             }> 
//               <Box><ChevronLeftIcon onClick={()=>closeSidebar()} /></Box>
//               <Box>
//               <List>{['File', 'User', 'Profile', 'Order'].map((text, index) => (
//                 <ListItem key={text} disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={text} />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//               </List>

//               </Box>
              
              
//           </Box>  


//       </Grid>
//        <Grid item xs={9} style={styles.navBar}>
//          navbar  
//           <Grid item style={styles.dashboard}> 
//               dashboard  
//           </Grid>
//        </Grid>
//        </>




       
//       : 
//       // false condition (closed)
//       <>
//        <Grid item xs={1}> 
//           <Box 
          
//           sx={
//             styles.sideBar
//             }> 
//               <Box><MenuIcon onClick={()=>openSidebar()} /></Box>
//               <Box>
//               <List>{['', '', '', ''].map((text, index) => (
//                 <ListItem key={text} disablePadding>
//                   <ListItemButton>
//                     <ListItemIcon>
//                       {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                     </ListItemIcon>
//                     <ListItemText primary={text} />
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//               </List>

//               </Box>

//           </Box>  
//       </Grid>
//        <Grid item xs={11} style={styles.navBar}> navbar  
       
//        <Grid item style={styles.dashboard}> dashboard  </Grid>

//        </Grid>
//        </>
      
//       }
      

//     </Grid>
//     </>
//   )
// }

// export default Dashboard

import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';

import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Avatar from '@mui/material/Avatar';

import NotificationsIcon from '@mui/icons-material/Notifications';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import styles from './Style';
import OpenSidebar from './OpenSidebar';
import CloseSidebar from './CloseSidebar';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const drawerWidth = 240;
const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  // Add other theme configurations here
});
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  function openSidebar() {
    setOpen(false);
  };
  function closeSidebar()  {
    setOpen(true);
  };

  return (


    
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          open={open}
          sx={{
            width: `calc(100% - ${drawerWidth}px)`, // Adjust the width as needed
            marginLeft: open ? `${drawerWidth}px` : '0px', // Adjust the margin-left as needed
          }}
        >
          <Toolbar
            sx={{
              marginRight: '0px', // this is for notifications
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              // noWrap
              sx={{ flexGrow: 1 }}
            >
              {/* Dashboard */}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: open ? 'flex' : 'flex',
              alignItems: 'center',
              height:20,
              justifyContent: 'space-between',
              backgroundColor:'green',
              px: [1],
              // flexGrow: 1

            }}
          >
            <div>
              <Avatar src="/dashLogo.png" alt="Logo" sx={{
                width:40,
                height:40,
                // backgroundColor:'yellow'
                }}/> {/* Add the logo image */}
            </div>
            <div
            onClick={open ? openSidebar : closeSidebar }
            sx={{
              
              // backgroundColor:'yellow',
            }}   
            >
            {/* mazaydar kaam */}
              {open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </div>
          </Toolbar>
          <Divider />
          <Typography > overview </Typography>
          {open ? <OpenSidebar/> : <CloseSidebar/>}


          {/* <List component="nav">
              <Typography sx={open ? styles.sidebarListOpened : styles.sidebarListClosed}>
                <AppShortcutIcon />
                Home
              </Typography>
              <Typography sx={open ? styles.sidebarListOpened : styles.sidebarListClosed}>
                <DescriptionIcon />
                File
              </Typography>
              <Typography sx={open ? styles.sidebarListOpened : styles.sidebarListClosed}>
                <LocalMallIcon />
                Store
              </Typography>
              <Typography sx={open ? styles.sidebarListOpened : styles.sidebarListClosed}>
                <PersonIcon />
                User
              </Typography>
              <Typography sx={open ? styles.sidebarListOpened : styles.sidebarListClosed}>
                <DryCleaningIcon />
                Product
                <ChevronRightIcon />
              </Typography>
              <Typography sx={open ? styles.sidebarListOpened : styles.sidebarListClosed}>
                <ShoppingCartCheckoutIcon />
                Order
              </Typography>
              <Typography sx={open ? styles.sidebarListOpened : styles.sidebarListClosed}>
                <MailIcon />
                Mail
              </Typography>
              <Typography sx={open ? styles.sidebarListOpened : styles.sidebarListClosed}>
                <ChatIcon />
                Chat
              </Typography>
          </List> */}

          
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Chart /> */}
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Deposits /> */}
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* <Orders /> */}
                </Paper>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
    
  );
}