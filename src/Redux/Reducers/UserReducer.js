import {createSlice} from "@reduxjs/toolkit"
import apiAxios from "../../api/api"




let UserReducer = createSlice({
    name: 'user',
    initialState: {
        tokens : "",
        error : "",
        loading : false,
        success : ""
    },
    reducers : {

        signUpReducer (state,action){
              
         state.success = action.payload.message 
         state.loading = false
         state.error = ""
        },
        
        signInReducer(state,action){
        state.tokens =  action.payload.Token
        state.success = action.payload.message 
        state.loading = false
        state.error = ""
        },

        logout(state,action){
            console.log("click");
            state.tokens =  ""

        },
        loading (state,action){ state.loading = true},

        errorReducer(state,action){
          state.error =  action.payload
          state.loading = false
        },
        clearMsg(state,action){
            state.error = ""
            state.loading = false
            state.success = ""
            state.tokens = action.payload
        },
        clearLoading(state,action){state.loading = false},

    }

    
})

export const {signInReducer,logout,signUpReducer,errorReducer,loading,clearMsg,clearLoading} = UserReducer.actions
export default UserReducer.reducer