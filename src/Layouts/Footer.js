import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{zIndex : 999}}>
    <div className='footerWrapper'>
    <div className='container '>
    <div className='row  text-center'>
    <div className='col-md-4  footerLink'>
    <h3>Useful Link</h3>

    <ul>
     <li>
     <NavLink className="footerLink" to="/">Home</NavLink>
     </li>

     <li>
     <NavLink className="footerLink" to="/room">Room</NavLink>
     </li>

     <li>
     <NavLink className="footerLink" to="/dashboard">Dashboard</NavLink>
     </li>

     
     <li>
     <NavLink className="footerLink" to="/signin">Signin</NavLink>
     </li>
     
     <li>
     <NavLink className="footerLink" to="/signup">Signup</NavLink>
     </li>
    </ul>
    </div>


    <div className='col-md-4'>
     <h3>Social Media</h3>

     <div className='socialLink'>
     
     <a href='#'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
     
     <a href='#'> <i class="fa fa-youtube-play" aria-hidden="true"></i></a>
     <a href='#'>  <i class="fa fa-yahoo" aria-hidden="true"></i></a>
     <a href='#'> <i class="fa fa-twitter-square" aria-hidden="true"></i></a>
    
     </div>

    </div>

    <div className='col-md-4'>
    <h3>Contact Info</h3>
     <p className='mb-1'>Phone : </p>
    <p className='mb-1'>+8801812345678</p>

    <p className='mb-1'>Email : </p>
    <p className='mb-1'>EasyInfo@gmail.com</p>
   </div>
    </div>
    </div>
    </div>

    <div className='copyright'>CopyRight@2015-2022 EasyBook (Fahim Sadnan)</div>
    </div>
  )
}

export default Footer