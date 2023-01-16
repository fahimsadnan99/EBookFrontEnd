import React from 'react'
import DeshboardOverview from './DeshboardOverview'
import CreateRoom from "../../../Components/Dashboard/Admin/MakeRoom/CreateRoom"
import AllRoom from "./AllRoom"
import User from "./Users"

const RightSide = ({value}) => {
    console.log(value);
 switch(value ){
    case 2 :
       
        return (
            <DeshboardOverview></DeshboardOverview>
        )
    break;
    case 1 :
      
        return(
            <CreateRoom></CreateRoom>
        )
        break;
    case 3 :
 
        return(
            <AllRoom></AllRoom>
        )
        break;
    case 4 :
    
        return (
            <User></User>
        )
        break;
    default : 
    return (
        <h1>Noting Show</h1>
    )
    break;
 }
}

export default RightSide