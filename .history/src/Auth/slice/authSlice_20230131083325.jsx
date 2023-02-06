import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
        token:'abc123',
        _id:1,
        name:'Dany',
        email:'Bechara611@gmail.com',
        level:'admin'
    },
    status:'logueado2',
    fechaInitial: new Date(),
}

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
