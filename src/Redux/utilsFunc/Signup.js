import axios from "axios"
import {BaseUrl} from "../../api/api"
import { signUpReducer ,errorReducer,loading,signInReducer} from "../Reducers/UserReducer"

export const SignUp =(data)=> async (dispatch)=>{
    dispatch(loading())
    axios.post(`${BaseUrl}/signup`,data)
    .then(res => dispatch(signUpReducer( res.data)))
    .catch(err => dispatch( errorReducer(err.response.data.message)))
}


export const  SignIn =(data)=> async (dispatch)=>{
    dispatch(loading())
    axios.post(`${BaseUrl}/signin`,data)
    .then(response => dispatch(signInReducer(response.data)))
    .catch(err => dispatch( errorReducer(err.response.data.message)))

}