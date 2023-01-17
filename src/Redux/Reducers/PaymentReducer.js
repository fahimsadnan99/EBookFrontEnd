import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name : "payment",
    initialState : {
          date : [],
          tokens : "",
          roomId : ""

    },
    reducers:{
            setPayMentArgument(state,action){
                console.log(action.payload)
            }
    }
})



export const {setPayMentArgument} = paymentSlice.actions
export default paymentSlice.reducer