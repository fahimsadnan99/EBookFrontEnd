import React, { useEffect } from 'react'
import ROOMOne from "../../Assets/room4.jpg"
import "./style.css"
import { useNavigate } from "react-router-dom";

const RoomCard = ({item}) => {
  const navigate = useNavigate();
  
  


  return (
    <div className='cardWrapper card' onClick={()=> navigate(`/room/${item._id}`)}>
    <div>
      
    <div className='imgWrapperOfCardWrapper'>
      
      <img src={item?.img[0]} alt="Assets" className='img-fluid'/>
      <div className="cityClass">
      <span className='ml-3'> City  :  {item.city}</span>    
      <span className='ml-3'> Class : {item.class} </span>
       </div>
   </div>
        <div className="descriptionCard">
        <p className='m-0'>Hotel Name : {item.name}</p>
        <div className='d-flex'><p className='mb-0'>Bed : {item.bedroom}</p>
        <p className='ml-5 mb-0'>Bathroom : {item.toylet}</p>
        </div>
        <div className='d-flex'>
        <p className='mb-1'>Ac : {item.ac}</p>
        <p className='ml-5 mb-1'>Pet :{item.pet}</p>
        
        </div>
        <p className='p-0 m-0' style={{color : "red", display : "block", padding : "5px 0px",fontWeight : "700"}}>Price : {item.price}$ Per Night</p>
        
        </div>
        </div>

       
        
    </div>
  )
}

export default RoomCard