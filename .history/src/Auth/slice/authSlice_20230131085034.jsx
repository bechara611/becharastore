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
    fechaInitial: new Date(),
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
            state={
                user:{
                    token:null,
                    _id:null,
                    name:null,
                    email:null,
                    level:null
                },
                status:'no-logueado',
                fechaInitial: null,
            }
        }
    }
})

export const {MostrarEnConsola,onLogout} = authSlice.actions;
export default authSlice 
