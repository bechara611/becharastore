import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../Auth/slice/authSlice"
import { productSlice } from "../Products/slice/productsSlice"
import uiSlice from "../UI/slice/uiSlice"


export const store= configureStore({
    reducer:{
        auth:authSlice.reducer,
        ui:uiSlice.reducer,
        products:productSlice.reducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware({serializableCheck:false})
    }
})