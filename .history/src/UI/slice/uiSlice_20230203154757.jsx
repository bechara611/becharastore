const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    error:null,
    cargando:null
}
const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{//este reducer es para activar o desactivar un error siempre en pantalla dependiendo si cambia el estado, el mismo
        //activa una funcion que se encuentra en el archivo App.jsx, donde mostrar una ventana emergente de error en caso de que no sea null y al mismo tiempo por alla la desactiva
              // dispatch(onAsignarError({error:'Esto es un error desde el nav'}))
        onAsignarError:(state,action)=>{
            state.error=action.payload.error
        },
        onResetError:(state,action)=>{
            state.error=null
        }
    }
})

export default uiSlice;
export const {onAsignarError,onResetError} = uiSlice.actions;