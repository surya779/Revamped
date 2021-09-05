import React,{useContext,useState} from 'react'
import {TextField,Button} from '@material-ui/core'
import { multiStepContext } from './Context'
import { makeStyles } from '@material-ui/core/styles';

var globaltag;
const useStyles = makeStyles((theme) => ({
    otp:{
      marginRight:"2%",
      width:"4%",

    },
    text:{
        color:'orangered',
    },
}));
   
//to automatically focus/switch to the next otp input field
const handlechange=(e, id,tag)=>{
    if (e != "null" && e.target.value.length === 1) {
      globaltag=tag
      document.getElementById(id).focus();
      if (tag=="last"){
        document.getElementById("verify").style.opacity=1;
      }
    }
    if(globaltag=="last" && tag=="verify"){
     //redirect to squashapps website using the verify button
     window.location.href='https://squashapps.com/';
      
    }
   
}
  
export default function Emailverification() {
    const classes = useStyles();

    const {setStep,userData,setUserData,submitData}=useContext(multiStepContext);
    return (
      <div>
        <div>
          <h1>Enter your OTP</h1>
          <br/>
          <p>For your security, we need to verify your identity. We sent a 5-digit<br/>
              code to name@domain.com. Please enter it below</p>
          <br/>
          
          {/*text fields for OTP inputs*/} 
          <TextField className={classes.otp}  onChange={(e) => handlechange(e, 'box2',"first")} id="box1"  size="small" variant="outlined" />
          <TextField className={classes.otp} onChange={(e) => handlechange(e, 'box3',"first")} id="box2"  size="small" variant="outlined" />
          <TextField className={classes.otp} onChange={(e) => handlechange(e, 'box4',"first")}  id="box3"  size="small" variant="outlined" />
          <TextField className={classes.otp} onChange={(e) => handlechange(e, 'box5',"first")} id="box4"  size="small" variant="outlined" />
          <TextField className={classes.otp} onChange={(e) => handlechange(e, 'box5',"last")} id="box5"  size="small" variant="outlined" />
          
        </div>
        <br/>
        <div>
          <Button variant="contained" onClick={()=>setStep(2)} color="Secondary">Back</Button><span> </span>
          <Button variant="contained" id="verify" style={{opacity:0.5}} onClick={(e) => handlechange('null','button','verify')} color="primary">Verify</Button>
       </div>
       <p>Didn't recieve an email, Check your spam filter for an email <br></br> from <span className={classes.text}><b> name@domain.com </b></span></p>
      </div>
    )
}
