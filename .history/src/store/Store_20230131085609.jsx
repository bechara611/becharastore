import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../Auth/slice/authSlice"


export const store= configureStore({
    reducer:{
        auth:authSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({serializableCheck:false})
    }
})