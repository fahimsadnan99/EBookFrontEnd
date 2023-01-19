import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name : "payment",
    initialState : {
          date : [],
          tokens : "",
          roomId : "",
          amount : 0,

    },
    reducers:{
            setPayMentArgument(state,action){
                state.date = action.payload.date;
                state.tokens = action.payload.tokens;
                state.roomId = action.payload.roomId;
                state.amount = action.payload.amount;
            },

            clearPaymentData(state,action){
                state.date = []
                state.tokens = ""
                state.roomId = ""
                state.amount = 0
            }
    }
})



export const {setPayMentArgument,clearPaymentData} = paymentSlice.actions
export default paymentSlice.reducer