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




function OpenSidebar() {
  return (
    
    <>
    <Grid item xs={3}>

          <List component="nav">
              <Typography sx={styles.sidebarListOpened}>
                <AppShortcutIcon />
                Home
              </Typography>
              <Typography sx={styles.sidebarListOpened}>
                <DescriptionIcon />
                File
              </Typography>
              <Typography sx={styles.sidebarListOpened}>
                <LocalMallIcon />
                Store
              </Typography>
              <Typography sx={styles.sidebarListOpened}>
                <PersonIcon />
                User
              </Typography>
              <Typography sx={styles.sidebarListOpened}>
                <DryCleaningIcon />
                Product
                {/* <ChevronRightIcon /> */}
              </Typography>
              <Typography sx={styles.sidebarListOpened}>
                <ShoppingCartCheckoutIcon />
                Order
              </Typography>
              <Typography sx={styles.sidebarListOpened}>
                <MailIcon />
                Mail
              </Typography>
              <Typography sx={styles.sidebarListOpened}>
                <ChatIcon />
                Chat
              </Typography>
          </List>
        </Grid>
    </>
  )
}

export default OpenSidebar