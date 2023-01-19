import React, { useEffect, useState } from 'react'
import Avatar from '../../../Assets/avatar.png'
import "./style.css"
import { useSelector } from 'react-redux'
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { BaseUrl } from '../../../api/api';
import { useNavigate } from 'react-router-dom';


const UserDashBoard = () => {

  let [userInfo,setUserInfo] = useState()
  let [rooms,setRooms] = useState()
  const {tokens} = useSelector(state => state.user)
 let navigate = useNavigate()
 
  useEffect(()=>{
   let {name,email,_id} = jwt_decode(tokens)
   setUserInfo({
     name : name,
     email : email,
     _id : _id
   })

  
  },[])
  
  useEffect(()=>{
    if(userInfo?._id){
      axios.get(`${BaseUrl}/user/order/${userInfo?._id}`)
      .then(res => setRooms(res.data))
      .catch(err => console.log(err.response.data.message))
     }
  },[userInfo])


  console.log(rooms);
  return (
    <div className='userDeshBoardWrapper py-5'>
       <button className="ml-4 mb-2 btn btn-dark" style={{width : "150px", marginTop : "40px"}} onClick={() => navigate(-1)}><i class="fa fa-arrow-circle-left" aria-hidden="true"></i>Go back</button> 
      <div className="container ">
       
   <div className="row">

    <div className="col-md-12 col-lg-4 mb-4">
       <div className="userInfoWrapper">
         <img src={Avatar} alt="abatar"/>
         <h5 className='my-2'>Name : {userInfo?.name}</h5>
         <h5 className='my-2'>Email : {userInfo?.email}</h5>
         
       </div>
    </div>
    <div className="col-md-12 col-lg-8">
      
      <div className='userSingleRoomWrapper'>

      <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Booking Date</th>
      <th scope="col">Amount</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>


    {
      rooms?.map(room => {
        return (
          <tr>
          <td className='tableImg'> <img src={room?.roomId?.img[0]} alt="img" className='img-fluid'/></td>
          <td>{new Date(room?.date[0]).toDateString()}</td>
          <td>{room?.amount}</td>
          <td><button className='btn btn-info' onClick={()=>  navigate(`/userDashboard/order/${room?._id}`)}><i class="fa fa-eye" aria-hidden="true"></i> view</button></td>
        </tr>
        )
     
      })
    }
   

  </tbody>
</table>
      </div>
    </div>
 </div>


 </div>
    </div>
  )
}

export default UserDashBoard