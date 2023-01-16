import React, { useEffect, useState } from 'react'

const RoomNumber = ({handleChange}) => {
    const [getRoomNumber,setRoomNumber] = useState([])

    const handleChangeRoomNumber =(e)=>{
        if(!getRoomNumber.includes(e.target.value)){
            setRoomNumber([...getRoomNumber,Number(e.target.value)])
          
        }
        
    }

    const handleDelete = (e)=>{
        setRoomNumber( getRoomNumber.filter(num => num !== e))
       
       
    }
   
    useEffect(()=>{
        handleChange(getRoomNumber)
    },[getRoomNumber])
  return (
    <div>

        <select onChange={handleChangeRoomNumber} className="form-control my-2">

            <option value="0"> Select Room</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <div className='my-3 roomList'>
            {
                getRoomNumber?.map(num =>{
                   return <p className='number' key={num}>{num} <span onClick={()=> handleDelete(num)}>X</span></p>
                })
            }

        </div>
    </div>
  )
}

export default RoomNumber