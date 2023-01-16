import React from 'react'
import {NavLink} from "react-router-dom"
import "./style.css"
import {useSelector,useDispatch} from "react-redux"
import { logout } from '../Redux/Reducers/UserReducer'

const Navbar = () => {
  const {tokens} = useSelector((state)=> state.user)
  const dispatch =useDispatch()

  return (
    <div className='navbarWrapper'>
    <div className='container'>
    <nav className="navbar navbar-expand-md ">
 <NavLink className="navbar-brand brandName" to="/" style={{color : "#fff",fontSize : "24px"}} onCopy="return false">EasyBook</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">
    <i class="fa fa-bars" aria-hidden="true"></i>
    </span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
    
      <li className="nav-item">
       <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/">Home</NavLink>
      </li>
     
      <li className="nav-item">
       <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/room">Room</NavLink>
      </li>

      <li className="nav-item">
     <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/dashboard">Dashboard</NavLink>
    </li>
 {
  !tokens ? (
   <>
    <li className="nav-item">
     <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/signup">Signup</NavLink>
    </li>

    <li className="nav-item">
   <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/signin">Signin</NavLink>
  </li>
  </>
  ) : (
<li className="nav-item">
   <NavLink className="nav-link logout" to="/" onClick={()=>dispatch(logout())}>Logout</NavLink>
  </li>
  )
 }

  
    </ul>
  </div>
</nav>
    
    </div>
    
    </div>
  )
}

export default Navbar