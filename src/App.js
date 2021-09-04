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
  const[formdata, setformdata]=useState([{fullname:'',
  gender:'null',
  state:'null',
  country:'null',
  phonenumber:'null',
  companyname:'null',
  email:'null',
  jobtitle:'null',
  yoe:'null',
  acceptedTerms:'null'}])
  
  const updateformdata=(data)=>{
    console.log(data)
    setformdata(data)
  }


  // useEffect(() => {
  //   // localStorage.removeItem("personalForm")
  //   const formdata = 
  //   data=formdata
  //   localStorage.setItem("formdata",JSON.stringify(formdata))
  
  // },[])
  function showStep(step){
    switch(step){
      case 1:
      return <Personal data={formdata} update={updateformdata}/>
      case 2:
        return <Company/>
      case 3:
        return <Emailverification/>
        
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className="center-stepper" >
        
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
      {showStep(currentStep)}
      
      
      </header>
      
    </div>
  );
}

export default App;
