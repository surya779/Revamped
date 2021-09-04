import React, { Component } from 'react'
import * as yup from 'yup';
import { Formik, useField,useFormik } from 'formik';
import FormControl from '@material-ui/core/FormControl';




export default class Fileupload extends Component {

    state={
        profileImg:"./download.jpg"
    }



 imageHandler =(e)=>{
        const reader =new FileReader();
        reader.onload=()=>
        {
            if(reader.readyState===2){
                this.setState({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    render() {
         const {profileImg}=this.state

        return (
            <div >
                <div >
                    <div >
                <img src={profileImg}  className="img"/>
                <input type="file" name="imageupload" id="input" accept="image/*" onChange={this.imageHandler}
                
        />
                &nbsp;&nbsp;&nbsp;&nbsp;<label htmlFor="input" className="image-upload">
                Upload your company logo
             {/* <i className="material-icons">Add your Company Logo</i>    */}
            </label>
            </div>

            </div>
           
        </div>
        )
    }
}
