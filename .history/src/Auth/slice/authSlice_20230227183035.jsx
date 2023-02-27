import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
        _id: '',
        name: '',
        email: '',
        level: ''
    },
    status: localStorage.getItem('token') ? 'logueado' : 'no-logueado',
    initialDate: new Date()
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        MostrarEnConsola: (state, action) => {
            console.log('Hola mundo')
        },
        onLogout: (state, action) => {

            state.status = 'no-logueado'
            state.user = {
                token: null,
                _id: null,
                name: null,
                email: null,
                level: null
            }
            state.initialDate = null;
        },
        onLogin: (state, {payload}) => {
             state.user = {
                 token: payload.token,
                 _id: payload._id,
                 name: payload.name,
                 email: payload.email,
                 level: payload.level
             }
            state.status = 'logueado'
            state.initialDate = new Date();
        },
    
    },
   
})

export const { MostrarEnConsola, onLogout, onLogin } = authSlice.actions;
export default authSlice 
