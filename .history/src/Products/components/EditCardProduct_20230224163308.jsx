import React from 'react'
import './CardProducto.css'
import { EditModalBootstrap } from './EditModalBootstrap'



export const EditCardProducto = ({ producto }) => {
    return (
        <>
            {/*? Aca recibimos un producto que viene del estado productos5 clon, el mismo preguntamos si tiene tal propiedad es porque
    viene cargado y asi evitamos errores, luego simplmenete mostramos la car que tiene el producto y su informacion
    */}
            {producto?.urlimg &&
                <div  className="col-10  col-sm-4 col-md-4 cardProducto col-lg-2 m-1 mb-4 animate__animated animate__jackInTheBox " id='cardProducto'>
                    <div className="card " data-bs-toggle="modal" data-bs-target={`#a`+producto._id}>
                        <img src={producto.urlimg} className="card-img-top" alt="Imagen" />
                        <div className="card-body text-center">
                            <h6 className="card-title">{producto.title} </h6>
                            <h5>{producto.price}$</h5>
                           
                        </div>


                    </div>
                </div>

            }
            <EditModalBootstrap producto={producto}></EditModalBootstrap>

        </>
    )
}
