import React from 'react'
import './ModalBootstrap.css'
export const ModalBootstrap = ({ producto }) => {
    console.log(producto)
    return (
        <div className="modal fade  " id={producto._id} tabIndex={-1} aria-hidden="true" aria-labelledby="label-modal-1">
            <div className="modal-dialog modal-lg text-center animate__animated animate__jackInTheBox">
                <div className="modal-content text-center ">
                    <div className="modal-header text-center justify-content-center ">
                        <h5 className="modal-title text-dark ">{producto.title}</h5>
                        <button className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body bg-dark">
                    <div className="col-12 ContenedorImagenModal">
                    <div className="col-6 ContenedorImagenModal">
                    <img className='img ' src={producto.urlimg} alt="" />
                    
                    </div>
                    
                    </div>
                        <p className="my-5">{producto.descriptionLong}</p>
                    </div>
                    <div className="modal-footer text-center d-flex justify-content-center">
                        {
                            <p className='text-dark'>Bechara Store</p>

                        }

                    </div>
                </div>
            </div>
        </div>

    );

}
