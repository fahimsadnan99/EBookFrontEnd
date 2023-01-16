import { createSlice } from "@reduxjs/toolkit";



let RoomSlice = createSlice({
  name : "Room",
  initialState : {
    img : [],
    search : {
      city : "",
      bedroom : ""
    },
    rooms : [],
    loading : false,
    length : 0,
    priceRange : {max : 0,min : 0},
    filter : {}
  },
  reducers :{
    imgUpdate(state,action){
        state.img = [...state.img, action.payload]
    },
    updateImg(state,action){
      
        let {data,index} = action.payload
        state.img[index] = data


    },
    deleteImg(state,action){
         state.img.splice(action.payload,1)

    },
    clearImg (state,action){
     state.img = []
    },
    loading (state,action){ state.loading = true},
    getRoomData(state,action){
      state.rooms = action.payload.room
      state.length = action.payload.roomLength
      state.loading = false
    },
    getRoomPrice(state,action){
      state.priceRange = action.payload
    },

    getFilterdata(state,action){
      state.filter = action.payload
    },

    clearFilterdata(state,action){
      state.filter = action.payload
    }
  }
})


export const {imgUpdate,updateImg,deleteImg,clearImg,getRoomData,loading,getRoomPrice,getFilterdata,clearFilterdata
} = RoomSlice.actions
export default RoomSlice.reducer