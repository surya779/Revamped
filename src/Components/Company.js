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


const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};


const validationSchema = yup.object({
  companyname:yup 
    .string('Enter Your Company Detail')
    .required('required'),
  jobtitle:yup 
    .string('Enter Your Job Title')
    .required('required'),
  yoe:yup 
    .number('Enter Your Year of Experience')
    .required('required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
   acceptedTerms: yup
          .boolean()
          .required('Required')
          .oneOf([true], 'You must accept the terms and conditions.'),
  
});

const Company = () => {
  const {setStep,userData,setUserData}=useContext(multiStepContext);

  const formik = useFormik({
    initialValues: {
     
      companyname:'',
      email: '',
      jobtitle:'',
     // added for our select
      yoe:'',
      acceptedTerms: false, // added for our checkbox

      
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('submit:',values)
      // alert(JSON.stringify(values, null, 2));
      // console.log(2)
      var formdata=localStorage.getItem("formdata");
    formdata=JSON.parse(formdata);
    for (var i in values){
      formdata[0][i]=values[i]

    }
    console.log(formdata);
    localStorage.setItem("formdata",JSON.stringify(formdata));
      setStep(3);
    },
  });

  return (
    <div>
        

        <form onSubmit={formik.handleSubmit}>
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
  
   <FormControlLabel control={<Checkbox name="acceptedTerms" />}  label="I accept the terms and conditions"
   value={formik.values.acceptedTerms}
   onChange={formik.handleChange}
   error={formik.touched.acceptedTerms && Boolean(formik.errors.acceptedTerms)}
   helperText={formik.touched.acceptedTerms && formik.errors.acceptedTerms} />

<br/>
<br/>
           <Button variant="contained" onClick={()=>setStep(1)} color="Secondary">Back</Button>
           <span> </span>
           <Button color="primary"  variant="contained" fullWidth type="submit">
          Send OTP
        </Button>
        </form>
    </div>
  );
};

export default Company;