import React from 'react'
import './ModalBootstrap.css'
export const EditModalBootstrap = ({ producto }) => {

    return (
        <div className="modal fade  " id={producto?._id} tabIndex={-1} aria-hidden="true" aria-labelledby="label-modal-1">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content text-center  ">
                    <div className="modal-header text-center justify-content-center contenedorSuperiorModal ">
                        <h5 className="modal-title text-light ">{producto?.title}</h5>
                        <button className="btn-close text-light " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body bg-light ">
                        <div className="col-12 ContenedorImagenModal">
                            <div className="col-10 col-lg-6  ContenedorImagenModal">
                                <img className='img col-12 ' src={producto?.urlimg} alt="" />

                            </div>

                        </div>
                        <div className="col-12">
                              <form 
                              
                              ></form>
                            <p className="my-5 text-dark">{producto?.descriptionLong}</p>
                          
                        </div>
                    </div>
                    <div className="modal-footer text-center d-flex justify-content-center FooterModal">
                        {
                            <p className='text-dark'></p>

                        }

                    </div>
                </div>
            </div>
        </div>

    );

}
