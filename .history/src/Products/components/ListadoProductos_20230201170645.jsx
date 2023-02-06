import React from 'react'
import './ListadoProductos.css'
export const ListadoProductos = () => {
    return (
        <>
            <div className="row mt-5">
                <div className="col-12 contenedor-busqueda">
                    <div className="col-4"> <input type="text" className='inputBusquedaProducto form-control col-4' placeholder='Search a product' /></div>
                    <div className="col-2">
                        <select className="form-select" aria-label="Select a category">
                            <option value={'all'} selected>All</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
