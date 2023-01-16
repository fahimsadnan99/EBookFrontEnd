import React from 'react'
import Img from "../../Assets/Hotel2.jpg"
import Img3 from "../../Assets/Hotel3.jpg"

const Experiance = () => {
    
 
  return (
    <div className='experienceWrapper my-5'>
    <div className='container text-center'>
    <h1 className='headingOfExperiance'>Experience</h1>
    <div className='row my-5'>
    <div className="col-md-12  col-lg-6">
    <div className='d-flex'>
   
    <img  src={Img} alt="img"  className='img-fluid experianceImg1'/>
    

   
    <img src={Img3} alt="img"  className='img-fluid experianceImg2'/>
    
    </div>
    
    </div>
    <div className="col-md-12  col-lg-6 mt-lg-0 mt-sm-5 mt-md-5" style={{textAlign : "justify",wordSpacing : "10px",color: "black"}}>
    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
    nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem pisum dolor sit amet, consectetur adpisci elit,
     sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default Experiance