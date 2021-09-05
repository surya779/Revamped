import React, {useContext,useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Formik, useField,useFormik } from 'formik';
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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

//validation using yup in React
const validationSchema = yup.object({
  fullname:yup 
  .string('Enter Your fullname') 
  .required('Fullname is Required')
  .min(3,'Must contain more than 3 characters')
  .max(15, 'Must be 15 characters or less'),

   gender:yup
   .string('Enter Your Gender')
   .ensure()
   .required('Gender is Required'),
   country:yup
   .string('Choose your Country')
   .required('Country is Required'),
   state:yup
   .string('Choose your State')
   .required('State is Required'),
   phonenumber:yup
   .string('Choose your phonenumber')
   .min(13,'Must contain more than 10 Numbers')
   .required('Phone Number is Required'), 
});

//props passed from parent(App.js)
const Personal = (props) => {

  //data from props
  var data=props.data

  const classes = useStyles();

  const {setStep}=useContext(multiStepContext);
  
  const [value, setValue] = useState(data[0].phonenumber);
 
//for setting phone number input value  
const handlephonenumber=(event)=>{
formik.values.phonenumber=event;
}

//for formik value initialization
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
  
    //updating object keys in data using for in operator
    for(var i in values ){
      data[0][i]=values[i];
    }
  
    //updating function in parent - passing data from child to parent via props
    props.update(data)
    
    //processing to step 2
    setStep(2);
  }
});
  
  return (
    <div>
      <h1>Add your personal details</h1>
      <br/>
      <br/>
      {/*form */}  
      <form  onSubmit={(event) => formik.handleSubmit(event)}>
      {/*text field for full name */}  
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
      {/*select dropdown for gender */}  
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
        >
          <option aria-label="None" value="" />
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
        <span style={{textAlign:'start', color:'#f44336',fontWeight:'400',fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',letterSpacing:'0.03333em',fontSize:'0.75rem', marginLeft:'4%',marginTop:'3px' }}>{formik.touched.gender && formik.errors.gender}</span>
      </FormControl>
      <br/>
      <br/>
      {/*select for country*/}  
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
        <span style={{textAlign:'start', color:'#f44336',fontWeight:'400',fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',letterSpacing:'0.03333em',fontSize:'0.75rem', marginLeft:'4%',marginTop:'3px' }}>{formik.touched.country && formik.errors.country}</span>
      </FormControl>    
      <br/>
      <br/>
      {/*text field for full name */}  
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
        <span style={{textAlign:'start', color:'#f44336',fontWeight:'400',fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',letterSpacing:'0.03333em',fontSize:'0.75rem', marginLeft:'4%',marginTop:'3px' }}>{formik.touched.state && formik.errors.state}</span>
      </FormControl>
      <br/>
      <br/>
      {/*input for phone number */}  
      <FormControl variant="outlined" className={classes.formControl}>
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={handlephonenumber}
          error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
          helperText={formik.touched.phonenumber && formik.errors.phonenumber}
       />
        <span style={{textAlign:'start', color:'#f44336',fontWeight:'400',fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',letterSpacing:'0.03333em',fontSize:'0.75rem', marginLeft:'20%',marginTop:'3px' }}>{formik.touched.phonenumber && formik.errors.phonenumber}</span>
       </FormControl>
        <br/>
        <br/>
        {/*next button */}  
        <Button color="primary"  variant="contained" fullWidth type="submit">
          Next
        </Button>
        </form>
    </div>
  );
};

export default Personal;