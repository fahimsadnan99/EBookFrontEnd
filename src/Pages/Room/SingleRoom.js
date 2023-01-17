import React, { useEffect, useState } from 'react'

import Calender from '../../Components/Room/Calender'
import "./style.css"
import {  useParams, useNavigate } from 'react-router-dom'
import apiAxios, { BaseUrl } from '../../api/api'
import axios from 'axios'
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux'


const SingleRoom = () => {
  const params = useParams()
  const [loading,setLoading] = useState(false)
  const [itemData,setItemData] = useState()
  const [images,setImages] = useState([])
  const [arg,setArg] = useState()
  const {tokens} = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(()=>{
          axios.get(`${BaseUrl}/room/${params.id}`)
          .then(res => setItemData(res.data))
          .catch(err => console.error(err))
  },[])

  
  useEffect(()=>{
  let img =  itemData?.img?.map(imte => ({original : imte, thumbnail:imte}))
  setImages(img)
  },[itemData])
  

  const handlePay = (date)=>{
    let arg = {
      roomId : params.id,
      date : date,
      tokens : tokens
    }  

    setArg(arg)
  }

  const handlePaymentBtn = ()=>{
    if(!tokens){
     navigate("/signup")
    }
   
    if(tokens){
      navigate("/payment")
    }
    
    }
    
   
  
  return (
    <div className='singleRoomWrapper'>
     <div className='container'>
     <div className='row'>
          <div className='col-lg-8 offset-lg-2 text-center' style={{marginTop : "80px"}}>
            {
              images  && ( <ImageGallery items={images} />)
            }
           
         
            </div>

            <div className='col-12'>
                 <div className='row'>
                 
                 <div className=' my-4 col-lg-6 col-md-6 col-12 order-lg-0 col-md-1'>
                  <div className='singleRoomInfo'>
                   <h4>City : {itemData?.city}</h4>
                   <h5>Class : {itemData?.class}</h5>
                   <h5>Hotel Name : {itemData?.name}</h5>
                   <h5 style={{color : "red"}}>Price : {itemData?.price}$ Per Night</h5>
                   <p>Bed : {itemData?.bedroom}</p>
                   <p>Rest Room : {itemData?.toylet}</p>
                   <p>Ac :{itemData?.ac}</p>
                   <p>Pet : {itemData?.pet}</p>
                   <p>Breakfast : {itemData?.breakfast}</p>
                   <p>Swimming Pool : {itemData?.swimmingPool}</p>

                   </div>
                 </div>
                 <div className=' my-4 col-lg-6 col-md-12 order-lg-1 col-md-0'>
                 
           <Calender roomPrice={itemData?.price} getDate={handlePay}></Calender>



<button className='PaybillBtn' onClick={handlePaymentBtn}>Pay Bill</button>
                 </div>
            </div>
     </div>
     </div>
    </div>
    </div>
  )
}

export default SingleRoom