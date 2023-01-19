import React, { useState } from "react";
import { Formik, Field, Form, FieldArray, ErrorMessage } from "formik";
import ChildComponent from "../../Components/Common/FormChild";
import { Link, useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { toast, ToastContainer } from "react-toastify";
import { initialValues, validationSchema } from "./validationAndValue";
import "./style.css";
import CreditCard from "../../Assets/credit.jpg";
import { useSelector } from "react-redux";
import axios from "axios";
import { BaseUrl } from "../../api/api";
import StripeCheckout from "react-stripe-checkout";

const PaymentInfo = () => {
  const [loading, setLoading] = useState(false);
  const payment = useSelector((state) => state.payment);
  const [allSaveData,setAllSaveData] = useState()
  const navigate = useNavigate();
  

  // Example POST method implementation:
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const onSubmit = (e) => {
    setLoading(true);
    setAllSaveData({ ...e, ...payment })
    // axios.post(`${BaseUrl}/confirm`,e)
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))

    // postData(`${BaseUrl}/confirm`, { ...e, ...payment }).then((data) => {
    //   setLoading(false);
    //   console.log(data);
    //   toast.success(data.message);
    //   navigate("/");
    //   // JSON data parsed by `data.json()` call
    // });
  };


  const tokenFunc = (token)=>{
 
      postData(`${BaseUrl}/confirm`, {token : token,value : allSaveData}).then((data) => {
      setLoading(false);
      console.log(data);
      toast.success(data.message);
      navigate("/");
      // JSON data parsed by `data.json()` call
    });
  }
  return (
    <div className="cardwrapper pt-5">
      <button
        className="ml-4 btn btn-dark"
        style={{ width: "150px", marginTop: "30px" }}
        onClick={() => navigate(-1)}
      >
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>Go back
      </button>
      <div className="container pt-3 pb-5">
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          <Form>
            <div className="row">
              <div className="col-lg-6 col-12 offset-lg-3">
                <div className="informationOfPayment">
                  <div className="form-group ">
                    <label htmlFor="name">Name</label>
                    <Field
                      name="name"
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                    />
                    <ErrorMessage name="name" component={ChildComponent}></ErrorMessage>
                  </div>

                 

                  <div class="form-group ">
                    <label htmlFor="phone" class="form-label">
                      Phone Number
                    </label>
                    <div className="d-flex">
                      <span className="mt-1">+880</span>{" "}
                      <Field name="phone" type="text" className="form-control" id="phone" />
                    </div>
                    <ErrorMessage name="phone" component={ChildComponent}></ErrorMessage>
                  </div>

                  <div class="form-group ">
                    <label htmlFor="address" class="form-label">
                      Address
                    </label>

                    <Field
                      name="address"
                      component="textarea"
                      row="3"
                      type="text"
                      className="form-control textAreaResize"
                      id="address"
                    />

                    <ErrorMessage name="address" component={ChildComponent}></ErrorMessage>
                  </div>
                  <h5>Day : {payment?.date?.length}</h5>
                  <h5>Amount : {payment?.amount}</h5>

                  <button type="submit" className="btn btn-success" disabled={loading}>
                    Save
                  </button>
                </div>
              </div>
                </div>
          </Form>
        </Formik>
<div className="text-center my-3">
{allSaveData && (
  <StripeCheckout
        stripeKey="pk_test_51MRajQSJQiFGVoj9jC5YvcNo6Z7OcPAKBJMGalbnZd3gIkoP0Rmy3l6tuTCZWngJHdjogrH23AyxMY6C64mUjMhY00J0bUgaQU"
        name="Enter Your Card Id"
       
        token={tokenFunc}
      >
        <button className="btn btn-primary" style={{fontSize : "40px"}}>Payment</button>
      </StripeCheckout>
)}
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
