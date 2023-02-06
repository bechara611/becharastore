import React from 'react'
import './ListadoProductos.css'
export const ListadoProductos = () => {
  return (
  <>
  <div className="row mt-5">
  <div className="col-12 contenedor-busqueda">
    <input type="text" className='inputBusquedaProducto form-control' placeholder='Search a product' />
  </div>
  </div>
  </>
  )
}
