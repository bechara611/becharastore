import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
        token:'abc123',
        _id:1,
        name:'Dany',
        email:'Bechara611@gmail.com',
        level:'admin'
    },
    status:'logueado',

}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        MostrarEnConsola:(state,action)=>{
            console.log('Hola mundo')
        },
        onLogout:(state,action)=>{
            console.log('logout')
       state.status='no-logueado'
        }
    }
})

export const {MostrarEnConsola,onLogout} = authSlice.actions;
export default authSlice 
