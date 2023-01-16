import React, { useEffect, useState } from 'react'
import RoomClass from './RoomClass'
import RoomNumber from './RoomNumber'
import Slidebar from './SlideBar'
import "./style.css"
import { useDispatch, useSelector } from 'react-redux'
import { getHomePageRoom, getRoomPrices } from '../../Redux/utilsFunc/Room'
import { getFilterdata } from '../../Redux/Reducers/RoomReducer'

const DeshboradComponents = () => {
  const dispatch = useDispatch()
  const {rooms,priceRange,filter} = useSelector(state => state.room)
  const [sliderValue,setSliderValue] = useState([])
  const [city,setCity] = useState("")
  const [classes,setClasses] = useState([])
  const [bedroom,setBedroom] = useState([])
  const [selectedRange,setSelectedRange] = useState([])
  const handleChange = (e)=>{
    setSelectedRange([e[0],e[1]])
  }

  const handleClassChange = (e)=>{
    setClasses(e);
  }

  const handleRoomChange = (e)=>{
    setBedroom(e);
  }

  useEffect(()=>{
    // let roomPrice = rooms?.map(item => item?.price)
    // let max = Math.max(...roomPrice)
    // let min = Math.min(...roomPrice)
    setSliderValue(priceRange)
    
    setSelectedRange([priceRange[0],priceRange[1]])
  },[rooms])

const filterSrc = ()=>{
  let arg = {
    page : 1,
    limit : 9
  }
  if(selectedRange) arg.price = selectedRange
  if(city.length) arg.city = city
  if(bedroom.length) arg.bedroom = bedroom
  if(classes.length) arg.classes = classes
  // dispatch(getFilterdata(arg))
  dispatch(getHomePageRoom(arg))
}

useEffect(()=>{
 dispatch(getRoomPrices())
},[])
  return (
    <div className='p-3'>
    
    <select
            className=" roomOption mt-1  form-control"
            value={city}
            name="city"
            onChange={(e) => setCity(e.target.value)}
            style={{width: "288px" }}
          >
            <option value=""> Select City</option>
            <option value="Dhaka"> Dhaka</option>
            <option value="Chittagong"> Chittagong</option>
            <option value="Shylate"> Shylate</option>
      
          </select>

    <p className='my-2'>Select Class</p>
    <RoomClass handleChange={handleClassChange}></RoomClass>
    
    <RoomNumber handleChange={handleRoomChange}></RoomNumber>
    <p className='my-2'>Price Range</p>
    <div className='sliderValueShow'> 

      <h6>{sliderValue.length && sliderValue[0]}</h6>
      <h6>{sliderValue.length && sliderValue[1]}</h6>
    </div>
 <Slidebar handleChange={{handleChange,priceRange}}></Slidebar>
  <p className='mt-4'>You Select {selectedRange[0]}$- {selectedRange[1]}$ </p>


<button className='btn btn-danger mt-4' onClick={filterSrc}>Filter</button>
    </div>
  )
}

export default DeshboradComponents