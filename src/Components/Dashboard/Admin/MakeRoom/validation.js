import * as Yup from "yup";

export const initialValue = {
    city : "",
    class : "",
    name : "",
    price : "",
    bedroom : "",
    toylet : "",
    ac : "",
    pet : "",
    breakfast : "",
    swimmingPool : "",
}


export const validationSchema = Yup.object({
    city : Yup.string().required("City is required"),
    class : Yup.string().required("Class is required"),
    name : Yup.string().required("Hotel name is required"),
    price : Yup.number().required("Price is required").positive().integer(),
    bedroom : Yup.number().required("Bedroom is required"),
    toylet : Yup.number().required("Toylet is required"),
    ac : Yup.string().required("Ac is required"),
    pet : Yup.string().required("Pat is required"),
    breakfast : Yup.string().required("Breakfast is required"),
    swimmingPool : Yup.string().required("Swimming fool is ")

})