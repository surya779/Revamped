import React,{useContext,useState} from 'react'
import {TextField,Button} from '@material-ui/core'
import { multiStepContext } from './Context'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    otp:{
      marginRight:"2%",
      width:"4%",
  
  
    },
    text:{
        color:'orangered',
      },
  
  
  
  }));

  
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

                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" /> 
       
                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" />

                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" />

                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" />

                       <TextField className={classes.otp}  id="outlined-basic"  size="small" variant="outlined" />

        </div><br/>
            <div>
            <Button variant="contained" onClick={()=>setStep(2)} color="Secondary">Back</Button><span> </span>

            <Button variant="contained" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://squashapps.com/';
      }} color="primary">Verify</Button>
       
       </div>
       <p>Didn't recieve an email, Check your spam filter for an email <br></br> from <span className={classes.text}><b> name@domain.com </b></span></p>

       
        </div>
    )
}
