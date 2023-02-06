import React from 'react'
import './ModalBootstrap.css'
export const ModalBootstrap = ({ producto }) => {
    console.log(producto)
    return (
        <div className="modal fade  " id={producto._id} tabIndex={-1} aria-hidden="true" aria-labelledby="label-modal-1">
            <div className="modal-dialog-centered modal-lg text-center animate__animated animate__jackInTheBox">
                <div className="modal-content text-center contenedorSuperiorModal ">
                    <div className="modal-header text-center justify-content-center ">
                        <h5 className="modal-title text-dark ">{producto.title}</h5>
                        <button className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body  bg-dark">
                    <div className="col-12 ContenedorImagenModal">
                    <div className="col-10 col-lg-6  ContenedorImagenModal">
                    <img className='img col-12 ' src={producto.urlimg} alt="" />
                    
                    </div>
                    
                    </div>
                    <div className="col-12">
                    
                    <p className="my-5">{producto.descriptionLong}</p>
                    </div>
                    </div>
                    <div className="modal-footer text-center d-flex justify-content-center FooterModal">
                        {
                            <p className='text-dark'>Bechara Store</p>

                        }

                    </div>
                </div>
            </div>
        </div>

    );

}
