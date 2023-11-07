import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Style'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';


function CloseSidebar() {
    return (
        <>
        <Grid item xs={1}>
              <Box 
            //   sx={styles.sidebarItemStyles}
              >
               
              </Box>
              <List component="nav">
              <Typography sx={styles.sidebarListClosed}>
                <AppShortcutIcon />
                Home
              </Typography>
              <Typography sx={styles.sidebarListClosed}>
                <DescriptionIcon />
                File
              </Typography>
              <Typography sx={styles.sidebarListClosed}>
                <LocalMallIcon />
                Store
              </Typography>
              <Typography sx={styles.sidebarListClosed}>
                <PersonIcon />
                User
              </Typography>
              <Typography sx={styles.sidebarListClosed}>
                <DryCleaningIcon />
                Product
                {/* <ChevronRightIcon /> */}
              </Typography>
              <Typography sx={styles.sidebarListClosed}>
                <ShoppingCartCheckoutIcon />
                Order
              </Typography>
              <Typography sx={styles.sidebarListClosed}>
                <MailIcon />
                Mail
              </Typography>
              <Typography sx={styles.sidebarListClosed}>
                <ChatIcon />
                Chat
              </Typography>
          </List>
            </Grid>
        </>
      )
}

export default CloseSidebar