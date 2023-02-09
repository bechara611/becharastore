import React from 'react'
import './CardProducto.css'
import { ModalBootstrap } from './ModalBootstrap'


export const CardProducto = ({ producto }) => {
    return (
        <>
            {/*? Aca recibimos un producto que viene del estado productos5 clon, el mismo preguntamos si tiene tal propiedad es porque
    viene cargado y asi evitamos errores, luego simplmenete mostramos la car que tiene el producto y su informacion
    */}
            {producto?.urlimg &&
                <div  className="col-10  col-sm-4 col-md-4 cardProducto col-lg-2 m-1 mb-4 animate__animated animate__jackInTheBox " id='cardProducto'>
                    <div className="card " data-bs-toggle="modal" data-bs-target={`#`+producto._id}>
                        <img src={producto.urlimg} className="card-img-top" alt="Imagen" />
                        <div className="card-body text-center">
                            <h6 className="card-title">{producto.title} </h6>
                            <h6>{producto.price}$</h6>
                            <div className="contenedor-texto-card"><p className="card-text">{producto.description}</p></div> 
                        </div>


                    </div>
                </div>

            }
            <ModalBootstrap producto={producto}></ModalBootstrap>

        </>
    )
}
