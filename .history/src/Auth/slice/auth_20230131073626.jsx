import { createSlice } from "@reduxjs/toolkit";

const initialState={}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        MostrarEnConsola:(state,action)=>{
            console.log('Hola mundo')
        }
    }
})

export const {MostrarEnConsola} = authSlice.actions; 
