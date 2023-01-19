import React from "react";
import {  Formik, Form, Field } from "formik";
import { initialValue, validationSchema } from "./validation";
import apiAxios from "../../../../api/api";
import CustomInput from "../../../input/CustomInput";
import { useSelector,useDispatch } from "react-redux";
import {clearImg} from "../../../../Redux/Reducers/RoomReducer"
import {  toast, ToastContainer } from 'react-toastify';

const city = ["Dhaka", "Chittagong", "Sylhet"];
const classes = ["Gold", "Classic", "Royel"];
const bed = [1, 2, 3, 4];
const toylet = [1, 2];
const ac = ["Yes", "No"];
const pet = ["Yes", "No"];
const breakFaster = ["Yes", "No"];
const swimmingPool = ["Yes", "No"];

const OtherInfoOFroom = () => {
 const dispatcher = useDispatch()
  const {img} = useSelector((state)=> state.room)
 
  const hanleSubmit = (value) => {
    apiAxios.post("/room", {...value,img})
    .then((res =>  {
      console.log(res.data)
      toast.success("Room successfully Added!")
      dispatcher(clearImg())
    }))
    .catch(err => toast.error(err.response.data.message))
  };

  return (
    <div className="py-5">
      <div>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={hanleSubmit}
          enableReinitialize

        >
          {({ values,errors }) => {
            return (
              <Form> 
                <div className="d-flex">
               <Field label="Hotel Name" name="name" type="input" id="name" component={CustomInput}>
                </Field>
                <Field  label="Price" name="price" type="input" id="price" component={CustomInput}>
                </Field>

                </div>

                <div className="d-flex">
                <Field name="city" type="select" id="city" component={CustomInput}>
                  <option value="">Select city</option>
                  {city.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>
                        {item}
                      </option>
                    );
                  })}
                </Field>

                <Field name="class" type="select" id="class" component={CustomInput}>
                  <option value="">Select Class</option>
                  {classes.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>
                        {item}
                      </option>
                    );
                  })}
                </Field>

                </div>
                <div className="d-flex">
                <Field name="bedroom" type="select" id="bedroom" component={CustomInput}>
                  <option value="">Select Bedroom</option>
                  {bed.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>
                        {item}
                      </option>
                    );
                  })}
                </Field>

                <Field name="toylet" type="select" id="toylet" component={CustomInput}>
                  <option value="">Select Toylet</option>
                  {toylet.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>
                        {item}
                      </option>
                    );
                  })}
                </Field>

                </div>

                <div className="d-flex">
                <Field name="ac" type="select" id="ac" component={CustomInput}>
                  <option value="">Add Ac</option>
                  {ac.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>
                        {item}
                      </option>
                    );
                  })}
                </Field>

                <Field name="pet" type="select" id="pet" component={CustomInput}>
                  <option value="">Have Pet</option>
                  {pet.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>
                        {item}
                      </option>
                    );
                  })}
                </Field>
                </div>
                <div className="d-flex">
                <Field name="breakfast" type="select" id="breakfast" component={CustomInput}>
                  <option value="">Add Breakfast</option>
                  {breakFaster.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>
                        {item}
                      </option>
                    );
                  })}
                </Field>

                <Field name="swimmingPool" type="select" id="swimmingPool" component={CustomInput}>
                  <option value="">Add swimmingPool</option>
                  {swimmingPool.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>
                        {item}
                      </option>
                    );
                  })}
                </Field>
                </div>
                
                <button type="submit" className=" mt-4  btn btn-success" style={{marginLeft : "330px"}}>
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
        {/* <form onSubmit={Formik.handleSubmit}>

                    <div className="form-group">
                         <select className="form-control" {...Formik.getFieldProps("city")}  id="city" name="city" style={{width : "250px"}}>
                              <option value="" >Select City</option>  
                              {city.map((item,ind)=>{
                                return <option value={item} key={ind}>{item}</option>
                              })}

                         </select>
                         
                    </div>
                    {(Formik.errors.city && Formik.touched.city) && (<FormChild >{Formik.errors.city}</FormChild>)}


                    <div className="form-group pt-2">
                         <select className="form-control" {...Formik.getFieldProps("class")} id="classes" name="class" style={{width : "250px"}}>
                              <option value="" >Select Class</option>  
                              {classes.map((item,ind)=>{
                                return <option value={item} key={ind}>{item}</option>
                              })}

                         </select>
                        
                    </div>
                    {(Formik.errors.class && Formik.touched.class) && (<FormChild >{Formik.errors.class}</FormChild>)}


                    <div className="form-group pt-2">
                         <select className="form-control" {...Formik.getFieldProps("toylet")} id="toylet" name="toylet" style={{width : "250px"}}>
                              <option value="" >Number Of Toylet</option>  
                              {toylet.map((item,ind)=>{
                                return <option value={item} key={ind}>{item}</option>
                              })}

                         </select>
                    </div>
                    {(Formik.errors.toylet && Formik.touched.toylet) && (<FormChild >{Formik.errors.toylet}</FormChild>)}

                    <button type='submit' className=' mt-4 btn btn-success'>Submit</button>

                 </form> */}
      </div>
    </div>
  );
};

export default OtherInfoOFroom;
