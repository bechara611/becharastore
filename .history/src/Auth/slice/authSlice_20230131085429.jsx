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
    initialDate: new Date()
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        MostrarEnConsola:(state,action)=>{
            console.log('Hola mundo')
        },
        onLogout:(state,action)=>{
   
       state.status='no-logueado'
       state.user={
        token:null,
        _id:null,
        name:null,
        email:null,
        level:null
    }
    state={initialDate:null}
        }
    }
})

export const {MostrarEnConsola,onLogout} = authSlice.actions;
export default authSlice 
