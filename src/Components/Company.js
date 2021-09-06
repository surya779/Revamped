import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { Formik, useField,useFormik } from 'formik';
import * as yup from 'yup';
import { multiStepContext } from './Context';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import {TextField,Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Fileupload from './Fileupload';

//validation using yup in React
const validationSchema = yup.object({
  companyname:yup 
  .string('Enter Your Company Detail')
  .required('Company Detail is required'),
  jobtitle:yup 
  .string('Enter Your Job Title')
  .required('Job title is required'),
  yoe:yup 
  .number('Enter Your Year of Experience')
  .required('Year of Experience is required'),
  email: yup
  .string('Enter your email')
  .email('Enter a valid email')
  .required('Email is required'),
   acceptedTerms: yup
  .boolean()
  .required('Checkbox Required')
  .oneOf([true], 'You must accept the terms and conditions.'),
});

//props passed from parent(App.js)
const Company = (props) => {
  
  //data from props
  var data=props.data
  const {setStep,userData,setUserData}=useContext(multiStepContext);

  //for formik value initialization
  const formik = useFormik({
    initialValues: {
      companyname:data[0].companyname,
      email: data[0].email,
      jobtitle:data[0].jobtitle,  
      yoe:data[0].yoe,
      acceptedTerms: '',  
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //updating object keys in data using for in operator
      for (var i in values){
        data[0][i]=values[i]
      }
    
      //updating function in parent - passing data from child to parent via props
      props.update(data)

      //processing to step 2
      setStep(3);
    },
  });

  return (
    <div>
        
      <div>
      <h1>Add your company details</h1>
      <br/>
        {/*form */}
        <FormControl variant="outlined" >
        {/*fileupload component for image*/}
        
        </FormControl>
      </div>
      <br/>
      <br/>

      {/*form */}
      <form onSubmit={formik.handleSubmit}>
        {/*text field for company name */} 
        <Fileupload/>
        <TextField
        id="companyname"
        name="companyname"
        label="Company Name"
        variant="outlined"
        autoComplete="off"
        value={formik.values.companyname}
        onChange={formik.handleChange}
        error={formik.touched.companyname && Boolean(formik.errors.companyname)}
        helperText={formik.touched.companyname && formik.errors.companyname}
        />
        <br/>
        <br/>

        {/*text field for email */} 
        <TextField
        id="email"
        name="email"
        label="Email Id"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        />
        <br/>
        <br/>

        {/*text field for company jobtitle */} 
        <TextField
        id="jobtitle"
        name="jobtitle"
        label="Job Title"
        variant="outlined"
        value={formik.values.jobtitle}
        onChange={formik.handleChange}
        error={formik.touched.jobtitle && Boolean(formik.errors.jobtitle)}
        helperText={formik.touched.jobtitle && formik.errors.jobtitle}
        />
        <br/>
        <br/>
         
        {/*text field for yours of experience */} 
        <TextField
        id="yoe"
        name="yoe"
        label="Year of Experience"
        variant="outlined"
        value={formik.values.yoe}
        onChange={formik.handleChange}
        error={formik.touched.yoe && Boolean(formik.errors.yoe)}
        helperText={formik.touched.yoe && formik.errors.yoe}
        />      
        <br/>
        <br/>

        {/*checkbox for accept the terms and conditions*/} 
        <FormControlLabel control={<Checkbox name="acceptedTerms" />}  
        value={formik.values.acceptedTerms}
        onChange={formik.handleChange}
        error={formik.touched.acceptedTerms && Boolean(formik.errors.acceptedTerms)}
        helperText={formik.touched.acceptedTerms && formik.errors.acceptedTerms} />  
        I accept the <span style={{color:'orangered'}}><b> Terms and Conditions </b></span>
        <br/>
        <br/>

        {/*back button */} 
        <Button variant="contained" onClick={()=>setStep(1)} color="Secondary">Back</Button>
          <span> </span>
          {/*send otp button */} 
          <Button color="primary"  variant="contained" fullWidth type="submit">
          Send OTP
        </Button>
        </form>
    </div>
  );
};

export default Company;