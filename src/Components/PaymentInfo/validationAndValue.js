import *  as Yup from "yup"

export const initialValues = {
    name : "",

    phone : "",
    address : "",
    
}


export const validationSchema = Yup.object({
       name : Yup.string().min(3,"name minimum 3 character needed").required("Name Is Required"),
      
       phone : Yup.string().min(10,"phone minimum 10 character required").max(10,"phone maximum 10 character required").required("Phone is required"),
       address : Yup.string().min(3,"address minimum 3 character required").required("Address is required"),
      


})