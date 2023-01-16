import React, { useState } from 'react'
import {menuOfLeftSide} from "../../../Components/Dashboard/Admin/LeftMenu"
import "./style.css"
import RightSide from './RightSide'

const AdminDeshboard = () => {
  const [menuValue,setMenuValue] = useState(1)
  return (
    <div className='AdminDeshboardWrapper'> 
    <div className=' row'>
        
<div className="leftMenu col-3">
<ul className='menuList pl-2'>
{
    
    menuOfLeftSide?.map((el)=>{
        return (
            <li key={el.id} className="listOfMenu" onClick={()=> setMenuValue(el.id)}>{el.name}</li>
        )
    })
    
}
</ul>

</div>


<div className="RightSitewrapper  col-9">

    <RightSide value={menuValue}></RightSide>

</div>

    </div>
    </div>
  )
}

export default AdminDeshboard