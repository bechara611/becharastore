import React from 'react'

export const ModalBootstrap = ({producto}) => {
 console.log(producto)
    return (
        <div className="modal " id={producto._id} tabIndex={-1} aria-hidden="true" aria-labelledby="label-modal-1">
            <div className="modal-dialog modal-lg text-center ">
                <div className="modal-content text-center ">
                    <div className="modal-header text-center justify-content-center ">
                        <h5 className="modal-title text-center ">{producto.title}</h5>
                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <p className="my-5">DANY BECHARA</p>
                    </div>
                    <div className="modal-footer text-center d-flex justify-content-center">
                        {
                            <p>BOTON</p>

                        }

                    </div>
                </div>
            </div>
        </div>

    );

}
