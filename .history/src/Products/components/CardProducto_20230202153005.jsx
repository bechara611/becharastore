import React from 'react'
import './CardProducto.css'
export const CardProducto = ({producto}) => {
    return (
        <>
            <div className="col-12  col-sm-4 -4 col-lg-2 m-1 mb-4 ">
                <div className="card ">
                    <img src={producto.urlimg} className="card-img-top" alt="Imagen" />
                    <div className="card-body text-center">
                        <h6 className="card-title">{producto.title}</h6>
                        <div className="contenedor-texto-card"><p className="card-text">{producto.description}</p></div>
                        <button className=" btn btn-primary btn-sm  btn-lg"
                          >Details</button>
                    </div>


                </div>
            </div>


        </>
    )
}
