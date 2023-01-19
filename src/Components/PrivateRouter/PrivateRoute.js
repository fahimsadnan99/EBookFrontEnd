import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  toast, ToastContainer } from 'react-toastify';

const PrivateRoute = ({children}) => {
    const {tokens} = useSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(()=>{
           if(!tokens){
            toast.error("Please Login first")
            navigate("/signin")
           }
    },[])
  return (
    <div>{children}</div>
  )
}

export default PrivateRoute