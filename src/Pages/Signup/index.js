import React, { useState } from "react";
import "./style.css";
import { Formik,Field,Form,FieldArray ,ErrorMessage }  from 'formik'
import { initialValues, validationSchema } from "../../Components/Common/signUpValidation";
import ChildComponent from "../../Components/Common/FormChild"
import { Link,useNavigate } from "react-router-dom";
import { Spin } from 'antd';
import {  toast, ToastContainer } from 'react-toastify';
import {clearMsg} from "../../Redux/Reducers/UserReducer"
import { SignUp } from "../../Redux/utilsFunc/Signup";
import { useDispatch,useSelector } from "react-redux";


 



const Signup = () => {
  const navigate = useNavigate()
   const dispatch = useDispatch()
   const {success,error,loading} = useSelector((state)=> state.user)


 if(success){
  toast.success(success)
  dispatch(clearMsg(""))
  navigate("/signin")
  
 }else if(error){
  toast.error(error);
  dispatch(clearMsg(""))
 }
  

  const onSubmit = (e) => {
  

  dispatch(SignUp({...e, email : e.email.toLowerCase()}))
}    



  return (
    <div className="signupWrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 ">
            <div className="contentWrapper pt-3 mb-5 ">
              <h2 className="text-center py-3" style={{color : "#fff"}}>Sign up</h2>
              <p onClick={()=> navigate("/signin")} style={{color : "blue", textAlign : "center",cursor : "pointer"}}>Alrady Have an Account?</p>
              <Formik onSubmit={onSubmit}
    initialValues={initialValues}
    validationSchema={validationSchema}>


              <Form className="p-3 pt-0">

              <div className="form-group " >
              <label htmlFor="exampleInputEmail1" style={{color : "#fff"}}>Name</label>
              <Field  name='name' type="text" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
               <ErrorMessage name='name' component={ChildComponent}></ErrorMessage>
                </div>


                <div className="form-group " >
              <label htmlFor="exampleInputEmail2" style={{color : "#fff"}}>Email</label>
              <Field  name='email' type="email" class="form-control"  id="exampleInputEmail2" aria-describedby="emailHelp"/>
               <ErrorMessage name='email' component={ChildComponent}></ErrorMessage>
                </div>

                <div className="form-group "  style={{color : "#fff"}}>
              <label htmlFor="exampleInputEmail3">Password</label>
              <Field  name='password' type="password" class="form-control"  id="exampleInputEmail3" aria-describedby="emailHelp"/>
               <ErrorMessage name='password' component={ChildComponent}></ErrorMessage>
                </div>

                <div className="form-group "  style={{color : "#fff"}}>
              <label htmlFor="exampleInputEmail4">Confirm Password</label>
              <Field  name='confirmPassword' type="password" class="form-control"  id="exampleInputEmail4" aria-describedby="emailHelp"/>
               <ErrorMessage name='confirmPassword' component={ChildComponent}></ErrorMessage>
                </div>
                <div className="text-center py-3">
                <button  type="submit" className="btn btn-info" disabled={loading}>
                 {loading ? ( <Spin /> ) : "Submit"}
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

export default Signup;
