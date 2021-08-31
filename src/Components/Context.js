import React,{useState} from 'react'
import App from '../App';
export const multiStepContext= React.createContext();
const Context=()=>{
     const[currentStep,setStep]=useState(1);
     const[userData,setUserData]=useState([]);
     const[finalData,setFinalData]=useState([]);


     function submitData(){
         setFinalData(finalData=>[...finalData,userData]);
         console.log(setUserData);
         setUserData('');
         window.location.href='http://google.com';
         

     }
    return (
        <div>
            <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>
                <App/>
            </multiStepContext.Provider>
        </div>
    )
}
export default Context