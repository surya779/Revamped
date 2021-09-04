import React, {useContext,useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { ErrorMessage, Formik, useField,useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { multiStepContext } from './Context';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import {TextField,Button} from '@material-ui/core'
import Select from '@material-ui/core/Select';
import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const validationSchema = yup.object({
  fullname:yup 
  
    .string('Enter Your fullname') 
    .required('Fullname is Required')
    .min(3,'Must contain more than 3 characters')
    .max(15, 'Must be 15 characters or less'),

   gender:yup
   .string('Enter Your Gender')
   .required('Gender is Required'),
   country:yup
   .string('Choose your Country')
   .required('Country is Required'),
   state:yup
   .string('Choose your State')
   .required('State is Required'),
   phonenumber:yup
   .string('Choose your phonenumber')
   .required('Phone Number is Required'),
  
  

  
});


const Personal = () => {
  var data = JSON.parse(localStorage.getItem('formdata'))
    
  
  const classes = useStyles();

  const {setStep}=useContext(multiStepContext);
  const formdata = [{fullname:'',
  gender:'',
  state:'',
  country:'',
  phonenumber:'',
  companyname:'',
  email:'',
  jobtitle:'',
  yoe:'',
  acceptedTerms:''}];

 
  const [value, setValue] = useState(data[0].phonenumber);
 
const handlephonenumber=(event)=>{
formik.values.phonenumber=event;
}
  const formik = useFormik({
    
    initialValues: {
     
      fullname:data[0].fullname,
      gender:data[0].gender,
      country:data[0].country,
      state:data[0].state,
      phonenumber:data[0].phonenumber,

    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    
      for(var i in values ){
        console.log(i);
        formdata[0][i]=values[i];
        
      }
      console.log(formdata);
      // alert(JSON.stringify(values, null, 2));
      // console.log(2)
      localStorage.setItem("formdata",JSON.stringify(formdata))

      setStep(2);
    }
  });
  
  return (
    <div>
        

        <form  onSubmit={(event) => formik.handleSubmit(event)}>
        <TextField
        id="fullname"
        name="fullname"
        label="Full Name"
        variant="outlined"
        autoComplete="off"
        value={formik.values.fullname}
        
        onChange={formik.handleChange}
        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
        helperText={formik.touched.fullname && formik.errors.fullname}


        />
        <br/>
        <br/>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-gender-native-simple">Gender</InputLabel>
        <Select 
          native
          value={formik.values.gender}
          onChange={formik.handleChange}
          label="Gender"
          inputProps={{
            name: 'gender',
          }}
          error={formik.touched.gender && Boolean(formik.errors.gender)}
          helperText={formik.touched.gender && formik.errors.gender}
  
        >
          <option aria-label="None" value="" />
          <option value="male">Male</option>
          <option value="female">Female</option>

        
        </Select>
        
      </FormControl>
      <br/>
      <br/>
     

<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-gender-native-simple">Country</InputLabel>
        <Select 
          native
          value={formik.values.country}
          onChange={formik.handleChange}
          label="Country"
          inputProps={{
            name: 'country',
          }}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
  
        >
          <option aria-label="None" value="" />
          <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="afghanistan">Afghanistan</option>
          <option value="bolivia">Bolivia</option>
          <option value="unitedkingdom">United Kingdom</option>
          <option value="france">France</option>
          <option value="latvia">Latvia</option>
          <option value="maldives">Maldives</option>
          <option value="ukraine">Ukraine</option>


          

        
        </Select>
      </FormControl>

<br/>
<br/>
<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-gender-native-simple">State</InputLabel>
        <Select 
          native
          value={formik.values.state}
          onChange={formik.handleChange}
          label="State"
          inputProps={{
            name: 'state',
          }}
          error={formik.touched.state && Boolean(formik.errors.state)}
          helperText={formik.touched.state && formik.errors.state}
  
        >
          <option aria-label="None" value="" />
          <option value="tamilnadu">Tamilnadu</option>
          <option value="kerala">kerala</option>
          <option value="andhrapradesh">Andhra Pradesh</option>
          <option value="gujarat">Gujarat</option>
          <option value="westbengal">West Bengal</option>
          <option value="madhyapradesh">Madhya Pradesh</option>



        
        </Select>
      </FormControl>
     
    
        <br/>
        <br/>
        <FormControl variant="outlined" className={classes.formControl}>
        <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={handlephonenumber}
      error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
      helperText={formik.touched.phonenumber && formik.errors.phonenumber}

       />
       </FormControl>
      <br/>
      <br/>
          {/* <Select 
          name="country"
          label="Country"
          option={countries}/> */}
           
           <Button color="primary"  variant="contained" fullWidth type="submit">
          Next
        </Button>
        </form>
    </div>
  );
};


export default Personal;