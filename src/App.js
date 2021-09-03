import './App.css';
import Emailverification from './Components/Emailverification';
import {Stepper,StepLabel,Step} from '@material-ui/core'
import React,{Component,useContext} from 'react';
import { multiStepContext } from './Components/Context';
import Personal from './Components/Personal'
import Company from './Components/Company'
import FileUploadComponent from './Components/Fileupload';
function App() {
  const{currentStep,finalData}=useContext(multiStepContext);
  function showStep(step){
    switch(step){
      case 1:
      return <Personal/>
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
