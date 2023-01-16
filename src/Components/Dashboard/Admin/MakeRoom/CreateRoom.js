import React, { useState } from 'react'
import ImageUploade from './ImageUploade';
import OtherInfoOFroom from './OtherInfoOFroom';


const CreateRoom = () => {
  const [file,setFile] = useState()
  console.log(file);
  return (
    <div className='createRoomWrapper'>
     <ImageUploade/>
    <OtherInfoOFroom></OtherInfoOFroom>
    </div>
  )
}

export default CreateRoom