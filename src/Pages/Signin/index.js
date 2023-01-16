import React, { useState } from "react";
import "../Signup/style.css";
import { Formik,Field,Form,FieldArray ,ErrorMessage }  from 'formik'
import { initialValuesSignin, validationSchemaSignin } from "../../Components/Common/signUpValidation";
import ChildComponent from "../../Components/Common/FormChild"
import {Link, useNavigate} from "react-router-dom"
import { Spin } from 'antd';
import {useDispatch, useSelector} from "react-redux"
import { SignIn } from "../../Redux/utilsFunc/Signup";
import { clearMsg } from "../../Redux/Reducers/UserReducer";
import {  toast } from 'react-toastify';

const Signin = () => {
  const  navigate = useNavigate()
  const dispatch = useDispatch()
  const {success,error,loading,tokens} = useSelector((state) =>  state.user)

  if(success){
    toast.success(success)
    dispatch(clearMsg(tokens))
    navigate("/")
   }else if(error){
    toast.error(error);
    dispatch(clearMsg(""))
   }

  const onSubmit =(e) => {

        dispatch(SignIn({...e, email : e.email.toLowerCase()}))
}    

  return (
    <div className="signupWrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 ">
            <div className="contentWrapper pt-3 mb-5 ">
              <h2 className="text-center py-3" style={{color : "#fff"}}>Sign in</h2>
              <p onClick={()=> navigate("/signup")} style={{color : "blue", textAlign : "center",cursor : "pointer"}}>Create An Account?</p>
              <Formik onSubmit={onSubmit}
    initialValues={initialValuesSignin}
    validationSchema={validationSchemaSignin}>


              <Form className="p-3 pt-0">

          


                <div className="form-group " >
              <label for="exampleInputEmail1" style={{color : "#fff"}}>Email</label>
              <Field  name='email' type="email" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
               <ErrorMessage name='email' component={ChildComponent}></ErrorMessage>
                </div>

                <div className="form-group "  style={{color : "#fff"}}>
              <label for="exampleInputEmail2">Password</label>
              <Field  name='password' type="password" class="form-control"  id="exampleInputEmail2" aria-describedby="emailHelp"/>
               <ErrorMessage name='password' component={ChildComponent}></ErrorMessage>
                </div>

              
                <div className="text-center py-3">
                <button  type="submit" className="btn btn-info" disabled={loading}>
                {loading ? (<Spin /> ): "Submit"}
                </button>
                </div>
                
              </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
