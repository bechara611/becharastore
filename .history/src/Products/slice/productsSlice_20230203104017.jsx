import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productosAll: [],
  productoscargando5: [],
  productosFiltrados: []

}
export const productSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    //?Este metodo del slice al obtener los productos lo asignaras a la estado productosAll el cual no se va a tocar de nuevo
    onAsignarProductosAll: (state, { payload }) => {
      //TODO asignar todos a productos All, el payload.productos lo recibe del backend

      state.productosAll = payload.productos
      //?esta parte agrega los primeros 5 productos que ya se tienen
      if (!state.productosAll) { return }
      if (state.productosAll.length <= 0) { return }
      for (let i = 0; i < 5; i++) {
        state.productoscargando5.push(state.productosAll[i])
      }
    },
    //TODO esto es un metodo que segun los parametros de inicio y final que le demos, ira agregando 5 productos mas al vector que se muestra en la lista
    onAsignar5productos: (state, { payload }) => {
      if (!state.productosAll) { return }
      if (state.productosAll.length <= 0) { return }
      //?aca en el useProductos, una funcion que nos mandara un inicio y un final de posicionnes nos hara ir asignandole mas al vector clon que va teniendo los 5 y es el vector que se muestra
      for (let i = payload.inicio; i < payload.final; i++) {
        if (state?.productosAll[i]?.urlimg) {
          state.productoscargando5.push(state.productosAll[i])
        }

      }
    },
    onReset5Products: (state) => {
      //?Esto es para formatear como tal el vector clon de 5.
      state.productoscargando5 = [];
    },
    onFiltrarProductos: (state, { payload }) => {
      console.log(payload)
      let vectorTemporal = [];
      let expR = new RegExp(payload.search, 'i')
      let expRCategory = new RegExp(payload.category, 'i')
      if (payload.category === 'All' && payload.search === '') {
        return
      }
      state.productoscargando5 = state.productosAll;

      if (payload.category !== 'All' && payload.search === '') {
        vectorTemporal = state.productoscargando5.filter((elemento) => {
          if (elemento.categoria.match(expRCategory)) {
            return elemento
          }
          return null
        })
        return
      }

      vectorTemporal = state.productoscargando5.filter((elemento) => {
        if (elemento.title.match(expR)) {
          return elemento
        }
        return null
      })
      if (payload.category !== 'All') {
        vectorTemporal = vectorTemporal.filter((elemento) => {
          if (elemento.categoria.match(expRCategory)) {
            return elemento
          }
          return null
        })
      }
      state.productoscargando5 = vectorTemporal
      //TODO FILTRAR PRODUCTOS, SLICE
    }
  }
})
//? ACA EXPORTAMOS LAS ACCIONES PARA USARLO CON EL DISPATCH DONDE SEA NECESARIO, GENERALMENTE EN EL useProductos
export const { onAsignarProductosAll, onAsignar5productos, onReset5Products, onFiltrarProductos } = productSlice.actions;