import React, { Component } from 'react'
import * as yup from 'yup';
import { Formik, useField,useFormik } from 'formik';
import FormControl from '@material-ui/core/FormControl';

export default class Fileupload extends Component {
    
    //default image url 
    state={profileImg:"./images.png"}
    
    //updating default image url with the image upload
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
            //image upload div
            <div>
                <div>
                    <div>
                        <img src={profileImg}  className="img"/>
                        <input type="file" name="imageupload" id="input" accept="image/*" onChange={this.imageHandler}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<label htmlFor="input" className="image-upload">
                        Upload your company logo
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
