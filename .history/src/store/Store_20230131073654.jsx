import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../Auth/slice/auth"


export const store= configureStore({
    reducer:{
        auth:authSlice.reducer
    }
})