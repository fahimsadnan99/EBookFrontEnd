import React, { useEffect, useState } from 'react'
import AdminDeshboard from "./Admin/AdminDeshboard"
import { useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";
import UserDashBoard from '../../Components/Dashboard/User/UserDashBoard';

const Deshboard = () => {
  let [userInfo,setUserInfo] = useState()
 const {tokens} = useSelector(state => state.user)


 useEffect(()=>{
  let {_id,role} = jwt_decode(tokens)
  setUserInfo({
    role: role,
    _id : _id
  })
 },[])
  return (
    <div>
      {
        userInfo?.role === 'admin' ? (<AdminDeshboard></AdminDeshboard>) : (<UserDashBoard></UserDashBoard>)
      }


    </div>
  )
}

export default Deshboard