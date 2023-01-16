import React, { useEffect, useState } from 'react'
import RoomCard from '../Common/RoomCard'
import { useDispatch,useSelector } from 'react-redux'
import {getHomePageRoom} from "../../Redux/utilsFunc/Room"
import { clearFilterdata } from '../../Redux/Reducers/RoomReducer'

const RoomsDisplay = () => {

 
  const [page,setPage] = useState(1)
  const limit = 6
  const {rooms,loading,length} = useSelector(state => state.room)
  const dispatch = useDispatch()
 
console.log(rooms,loading,length);
  
 useEffect(()=>{
  let arg = {
     page : page,
     limit : limit
  }
  dispatch(getHomePageRoom(arg))

  dispatch(clearFilterdata())
 },[page])


  return (
    <div className='container text-center'>
    <div className='row'>
    {
      rooms?.map((item)=>{
        return (
          <div className='col-md-6 col-lg-4 mt-3'>
          <RoomCard item={item}></RoomCard>
          </div>
        )
      })
    }
   
 
    </div>

{ length > page ? ( <button className='bookBtnHome' onClick={()=> setPage(page + 1)}>Click More</button>) : null}
   
    </div>
  )
}

export default RoomsDisplay