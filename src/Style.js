// import { green, red } from "@mui/material/colors";
import { hover } from "@testing-library/user-event/dist/hover";

    const styles = {
        baseBoxStyle: {
            
            
            // borderColor: 'primary.main',
            backgroundImage: 'url(/hui.png)',
            // backgroundSize: 'cover',
            backgroundColor: '#FAFBFB',
            backgroundPosition: 'center',
           
            // position: 'relative', // Set position to relative for the parent container
        },
        myHeader1 :  {
            fontSize:24,
            fontWeight:'700',
        },
        demoEmail:{
            backgroundColor: '#CAFDF5',
            color: 'black',
            border: 'black',
            borderRadius: 4,
            height: 30,
            padding: 2,
            
        },
        //forget Password
        forgetPassword:{
            fontSize:32,
            fontWeight:700,
            marginTop:40
        },
        forgetPasswordDesc:{
            color: '#637381',
            fontFamily:'Public Sans, sans-serif',
            fontSize:14
            // backgroundColor:'green'
            
        },
        myButton:{
            mt: 2,
            mb: 2,
            height:50,
            borderRadius:2,
            color:'white',
            backgroundColor: "#212b36",
        },
        errMessage:{
            color: 'red',
            marginTop:-15,
            marginLeft:16,
            // backgroundColor: 'green',
            fontSize:12,
            fontWeight:400
        },
        //My Dashboard
        containerArea:{
            width:'100%',
            height:'100vh',
            backgroundColor:'pink'
        },
        navBar:{
            height:'20vh',
            backgroundColor:'yellow',
            
        },
        sideBar:{
            height:'100vh',
            backgroundColor:'',
            display:'flex',
            
            // justifyContent:'right'
            
        },
        dashboard:{
            height:'80vh',
            backgroundColor:'green',
            
        },

        // when sidebar is open
        sidebarListOpened:{
            my:4,
            mx:2,
            backgroundColor:'#FFFFF',
            fontSize:15,
            borderRadius:2,
            display:'flex',
            // justifyContent:'center',
            '&:hover': {
                backgroundColor: '#F6F7F8',
              },
            fontFamily: [
                'Roboto',
                'Arial',
                'sans-serif',
              ]
            // display:'flex',
            // justifyContent:'center'
        },
       
        // when sidebar is closed 
        sidebarListClosed : { 
            my:2,
            display: 'flex',

            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize:13,
            borderRadius:2,
            '&:hover': {
                backgroundColor: '#F6F7F8',
              },
          }
       
    };

   export default styles;