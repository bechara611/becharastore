import { createSlice } from "@reduxjs/toolkit";

const initialState={}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        MostrarEnConsola:(state,action)=>{
            console.log('Hola mundo')
        }
    }
})

export const {MostrarEnConsola} = authSlice.actions;
export default authSlice 
