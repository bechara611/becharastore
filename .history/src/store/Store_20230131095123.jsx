import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../Auth/slice/authSlice"
import uiSlice from "../UI/slice/ui"


export const store= configureStore({
    reducer:{
        auth:authSlice.reducer,
        ui:uiSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({serializableCheck:false})
    }
})