import React, { useEffect, useState } from 'react'

const RoomNumber = ({handleChange}) => {
    const [getRoomNumber,setRoomNumber] = useState([])

    const handleChangeRoomNumber =(e)=>{
        setRoomNumber(e.target.value)
        
    }

   
   
    useEffect(()=>{
        handleChange(getRoomNumber)
    },[getRoomNumber])
  return (
    <div>

        <select onChange={handleChangeRoomNumber} value={getRoomNumber[0]} className="form-control my-2">

            <option value="0"> Select Room</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
        </select>

      

    </div>
  )
}

export default RoomNumber