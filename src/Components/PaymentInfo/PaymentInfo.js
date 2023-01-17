import React from 'react'
import { Formik,Field,Form,FieldArray ,ErrorMessage }  from 'formik'
import ChildComponent from "../../Components/Common/FormChild"
import { Link,useNavigate } from "react-router-dom";
import { Spin } from 'antd';
import {  toast, ToastContainer } from 'react-toastify';
import {initialValues,validationSchema} from "./validationAndValue"
import "./style.css"
import CreditCard from "../../Assets/credit.jpg"

const PaymentInfo = () => {


  const onSubmit = (e)=>{
    console.log(e);
  }
  return (
    <div className='cardwrapper pt-5'>
      <div className='container py-5'>
      <Formik onSubmit={onSubmit} validationSchema={validationSchema} initialValues={initialValues}>
            <Form>
           <div className='row'>
           
              <div className='col-lg-6 col-12'>
                 <div className='informationOfPayment'>
                        
                 <div className="form-group " >
              <label htmlFor="name" >Name</label>
              <Field  name='name' type="text" class="form-control"  id="name" aria-describedby="emailHelp"/>
               <ErrorMessage name='name' component={ChildComponent}></ErrorMessage>
                </div>

                <div className="form-group " >
              <label htmlFor="exampleInputEmail2">Email</label>
              <Field  name='email' type="email" class="form-control"  id="exampleInputEmail2" aria-describedby="emailHelp"/>
               <ErrorMessage name='email' component={ChildComponent}></ErrorMessage>
                </div>


   



  
  <div class="form-group ">
  <label htmlFor="phone" class="form-label">Phone Number</label>
  <div className="d-flex">
  <span className='mt-1'>+880</span> <Field name="phone" type="text" className="form-control"  id="phone"/>
  </div>
  <ErrorMessage name='phone' component={ChildComponent}></ErrorMessage>
</div>


<div class="form-group ">
  <label htmlFor="address" class="form-label">Address</label>

<Field name="address" component="textarea" row="3"  type="text" className="form-control textAreaResize"   id="address"/>

  <ErrorMessage name='address' component={ChildComponent}></ErrorMessage>
</div>



                 </div>
              </div>
              <div className='col-lg-6 col-12'>
                          <div className='creditCardWrapper'>

                            <div className="creditCardImg text-center">
                            <img src={CreditCard} className='img-fluid' />
                            </div>

                            <div className="form-group mt-2" >
              <label htmlFor="cardNumber" >Card Number</label>
              <Field  name='cardNumber' type="text" class="form-control"  id="cardNumber" aria-describedby="emailHelp"/>
               <ErrorMessage name='cardNumber' component={ChildComponent}></ErrorMessage>
                </div>
                <h4>Amount : 100$</h4>

                <button type='submit' className="btn btn-success">Payment</button>
                          </div>
                
              </div>

            
            
           </div>
           </Form>
              </Formik>
           </div>
    </div>
  )
}

export default PaymentInfo