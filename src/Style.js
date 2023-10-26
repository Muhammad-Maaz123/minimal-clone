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
        }
       
    };

   export default styles;