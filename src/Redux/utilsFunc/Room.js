import axios from "axios"
import {BaseUrl} from "../../api/api"
import { loading,getRoomData,getRoomPrice } from "../Reducers/RoomReducer"

export const getHomePageRoom = (data)=> async (dispatch)=>{
    dispatch(loading())
    axios.post(`${BaseUrl}/room/find`,data)
    .then(res => dispatch(getRoomData( res.data)))
    .catch(err => console.log(err.response.data.message))
}


export const getRoomPrices = () => async(dispatch)=>{
    axios.get(`${BaseUrl}/room`)
    .then(res => dispatch(getRoomPrice(res.data)))
    .catch(err => console.log(err))
}