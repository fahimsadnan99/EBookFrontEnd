import *  as Yup from "yup"

export const initialValues = {
    name : "",
    email : "",
    phone : "",
    address : "",
    cardNumber : ""
}


export const validationSchema = Yup.object({
       name : Yup.string().min(3,"name minimum 3 character needed").required("Name Is Required"),
       email : Yup.string().min(7,"email minimum 7 character required").email("invalid Email").required("Email is required"),
       phone : Yup.string().min(10,"phone minimum 10 character required").max(10,"phone maximum 10 character required").required("Phone is required"),
       address : Yup.string().min(3,"address minimum 3 character required").required("Address is required"),
       cardNumber : Yup.string().min(16, "Minimum 16 character required").max(16, "Maximum 16 character required").required("Card Number is required")


})