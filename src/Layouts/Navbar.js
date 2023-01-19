import React from 'react'
import {NavLink} from "react-router-dom"
import "./style.css"
import {useSelector,useDispatch} from "react-redux"
import { logout } from '../Redux/Reducers/UserReducer'
import logoVideo from "../Assets/logo.gif"

const Navbar = () => {
  const {tokens} = useSelector((state)=> state.user)
  const dispatch =useDispatch()

  return (
    <div className='navbarWrapper'>
    <div className='container'>
    <nav className="navbar navbar-expand-md p-0">
 <NavLink className="navbar-brand brandName" to="/" style={{color : "#fff",fontSize : "30px",fontWeight : "bold"}} onCopy="return false">
 <img src={logoVideo} alt="logo"/>


 </NavLink>
  <button className="navbar-toggler" style={{border : "none"}} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"  style={{background : "red"}}>
    <i class="fa fa-bars" aria-hidden="true" style={{color : "#fff",fontSize : "24px"}}></i>
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
    <>
    <li className="nav-item">
     <NavLink className={(navInfo)=> (navInfo.isActive ? "activeNavbar nav-link" : "nav-link") }  to="/dashboard">Dashboard</NavLink>
    </li>
<li className="nav-item ">
   <NavLink className="nav-link logout" to="/" onClick={()=>dispatch(logout())}>Logout</NavLink>
  </li>
  </>
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