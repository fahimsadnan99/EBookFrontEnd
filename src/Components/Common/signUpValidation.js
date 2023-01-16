import *  as Yup from "yup"

export const initialValues = {
    name : '',
    email : '',
    password : '',
    confirmPassword : '',
  }


export const validationSchema = Yup.object({
    name : Yup.string().required("Name is required"),
    email : Yup.string().email("invalid Email").required("Email is required"),
    password : Yup.string().min(6, "Password is too short - should be 6 chars minimum").required("Password is required"),	
    confirmPassword : Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Not match")
})



export const initialValuesSignin = {

  email : '',
  password : '',
 
}


export const validationSchemaSignin = Yup.object({

  email : Yup.string().email("invalid Email").required("Email is required"),
  password : Yup.string().min(6, "Password is too short - should be 6 chars minimum").required("Password is required"),	

})