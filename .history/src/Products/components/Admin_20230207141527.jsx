import React from 'react'
import './Admin.css'
export const Admin = () => {
    return (
        <>
            <div className='col-12 separadorAdmin'></div>
            <div className="row fila ">
                <div className="col-4 contenedorGeneral contenedor-categorias animate__animated animate__zoomInLeft"></div>
                <div className="col-4 contenedorGeneral contenedor-productos animate__animated animate__zoomInRight"></div>
            </div>
            <div className="row fila">
                <div className="col-9 contenedorGeneral contenedor-categorias animate__animated animate__zoomInUp"></div>
            </div>
            <div className='col-12 separadorAdmin mb-3'></div>
        </>
    )
}
