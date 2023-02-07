import React from 'react'
import './Admin.css'
export const Admin = () => {
    return (
        <>
            <div className='col-12 separadorAdmin'></div>
            <div className="row fila">
                <div className="col-4 contenedorGeneral contenedor-categorias"></div>
                <div className="col-4 contenedorGeneral contenedor-productos"></div>
            </div>
            <div className="row fila">
                <div className="col-9 contenedorGeneral contenedor-categorias"></div>
            </div>
            <div className='col-12 separadorAdmin mb-2'></div>
        </>
    )
}
