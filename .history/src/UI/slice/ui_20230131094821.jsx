const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    error:null
}
const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
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