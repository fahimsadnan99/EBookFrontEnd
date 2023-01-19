import React, { useEffect, useState } from 'react'
import RoomManu from '../../Components/Room/RoomComponents'
import "./style.css"
import RoomCard from "../../Components/Common/RoomCard"
import { useDispatch, useSelector } from 'react-redux'
import { getHomePageRoom } from '../../Redux/utilsFunc/Room'
import Pagination from '../../Components/Room/Pagination'
import { clearFilterdata } from '../../Redux/Reducers/RoomReducer'
import { clearPaymentData } from '../../Redux/Reducers/PaymentReducer'

const Deshboard = () => {
  const [page,setPage] = useState(1)
  const limit = 9
  const {rooms,loading,length,filter} = useSelector(state => state.room)
  const dispatch = useDispatch()
 
console.log(rooms,loading,length,filter);
  const roomData = (e) =>{
    console.log(e);
  }
 useEffect(()=>{
  let arg = {
     page : page,
     limit : limit
  }
  dispatch(getHomePageRoom({...arg,...filter}))

  
 },[page])

 useEffect(()=>{
  dispatch(clearFilterdata({}))
  dispatch(clearPaymentData())
 },[])
  return (
    <div className='py-5 deshBoardwrapper'>
       <div className='row'>

        <div className='col-12 col-md-3 col-lg-3 py-5'>
          
          <RoomManu ></RoomManu>
        </div>

        <div className='col-10 col-md-9 col-lg-9 roomWrapper mx-auto '>
          <div className='row '>
            {
              rooms?.map(item =>{
                return (
                  <div className='col-12 col-md-6 col-lg-4  mt-3 roomMenuCard p-1' >

                    <RoomCard item={item}></RoomCard>
                  </div>
                )
              })
            }
          
            <div className="row mt-5">
              <div className='col-12'>

              <Pagination propsData={{page,setPage,length}}></Pagination>
              </div>
            
            </div>
          </div>
        </div>
       </div>


    </div>
  )
}

export default Deshboard
