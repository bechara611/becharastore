import React from 'react'
import './FormularioContacto.css'
export const FormularioContacto = () => {
    return (
        <>
            <div className="col-12 col-sm-10 col-md-8 col-lg-5 contenedor-formulario-contacto  animate__animated animate__bounceInLeft">
                <form className='formularioContacto'>
                    <div className="row col-10 m-2">
                        <div className="col-12 m-2">
                            <div className="form-group ">
                                <label for="exampleInputEmail1">Please, insert your email.</label>
                                <input type="email" className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Email' />

                           
                            </div>
                        </div>
                        <div className="col-12 m-2">
                            <div className="form-group ">
                                <label for="inputname">Please, insert your name.</label>
                                <input type="text" className='form-control' id='inputname' aria-describedby='emailHelp' placeholder='Name' />

                               
                            </div>
                        </div>
                    </div>


                </form>
            </div>

        </>
    )
}
