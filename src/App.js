import './App.css';
import Emailverification from './Components/Emailverification';
import {Stepper,StepLabel,Step} from '@material-ui/core'
import React,{Component,useContext,useEffect, useState} from 'react';
import { multiStepContext } from './Components/Context';
import Personal from './Components/Personal'
import Company from './Components/Company'
import FileUploadComponent from './Components/Fileupload';


function App() {
  const{currentStep,finalData}=useContext(multiStepContext);
  //setting the state for form data
  const[formdata, setformdata]=useState([{fullname:'',
  gender:'',
  state:'',
  country:'',
  phonenumber:'',
  companyname:'',
  email:'',
  jobtitle:'',
  yoe:'',
  }])
  
  //updating the form data and storing it to the local storage
  const updateformdata=(data)=>{
    //updating the state of "form data" using the "setformdata" function
    setformdata(data)
    localStorage.setItem("formdata",JSON.stringify(data))
  }

  function showStep(step){
    switch(step){
      case 1:
        //Personal - child component
        //passing the data prop and update prop (for child to parent communication )  
        return <Personal data={formdata} update={updateformdata}/>
      case 2:
        //Company - child component
        //passing the data prop and update prop (for child to parent communication ) 
        return <Company data={formdata} update={updateformdata}/>
      case 3:
        //Emailverification - child component
        return <Emailverification/>
        
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className="center-stepper" >
        
      {/*form stepper - one way of implementation without the use of material ui's stepper*/}
      <Stepper  activeStep={currentStep-1} orientation="horizontal">
        <Step>
          <StepLabel>Personal details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Company details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Email Verification</StepLabel>
        </Step>
      </Stepper>
      <br/>
      
      </div>

      {/*passing the current step - for proceeding form steps via switch case*/}
      {showStep(currentStep)}
      
      
      </header>
      
    </div>
  );
}

export default App;
