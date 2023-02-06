import React from 'react'
import './ListadoProductos.css'
export const ListadoProductos = () => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-12 contenedor-busqueda">
                    <div className="col-4 m-1">
                     <input type="text" className='inputBusquedaProducto form-control col-4' placeholder='Search a product' />
                     </div>
                    <div className="col-2 m-1">
                        <select className="form-select" aria-label="Select a category">
                            <option value={'all'} className='opcionSelect' selected>All</option>
                            <option value="Children" className='opcionSelect'>Children</option>
                            <option value="Women" className='opcionSelect'>Women</option>
                            <option value="Men" className='opcionSelect'>Men</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
