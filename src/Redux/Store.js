import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { persistReducer,persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserReducer from "./Reducers/UserReducer";
import RoomSlice from "./Reducers/RoomReducer";
import PaymentSlice from "./Reducers/PaymentReducer"




const persistConfig = {
    key: "root",
    version : 1,
     storage,
}

const reducer = combineReducers({
    
    user : UserReducer,
    room : RoomSlice,
    payment : PaymentSlice
})
 

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    
    reducer :  persistedReducer,
    
})

export let persistor = persistStore(store)