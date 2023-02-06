const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    error:null
}
const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{//este reducer es para activar o desactivar un error siempre en pantalla dependiendo si cambia
        onAsignarError:(state,action)=>{
            state.error=action.payload.error
        },
        onResetError:(state,action)=>{
            state.error=null
        }
    }
})

export default uiSlice;
export const {onAsignarError} = uiSlice.actions;