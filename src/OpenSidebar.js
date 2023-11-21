import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from './Style'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
import Button from '@mui/material/Button';
import { useState } from 'react';




function OpenSidebar() {
const [productList,setProductList] = useState(false);
const list =['List','Details','Create','Edit'];
function showList()
{
    setProductList(!productList) //alternating true/false values
    // alert(productList);
}
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
              
               
                <Typography  onClick={()=>showList()} sx={styles.sidebarListOpened}>
                <Typography ><DryCleaningIcon />
                Product
                </Typography>
              {productList ? <KeyboardArrowDownIcon/>: <ChevronRightIcon/>}
              </Typography>
              {productList ? 
                //true condition
               <ul>
                  {list.map((n, index) => (
                    <li key={index}>
                    <Typography sx={styles.sidebarProductList}>
                        {n}
                    </Typography>
                    </li>
                    ))}
               </ul>
             
                //false condition
                : null}
              
              
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