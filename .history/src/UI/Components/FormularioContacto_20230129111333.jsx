import React from 'react'
import './FormularioContacto.css'
export const FormularioContacto = () => {
    return (
        <>
            <div className="col-12 col-sm-10 col-md-8 col-lg-5 contenedor-formulario-contacto  animate__animated animate__bounceInLeft">
                <form className='formularioContacto'>
                    <div className="row col-10 m-2">
                        <div className="col-12">
                            <div className="form-group ">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Email' />

                                <small id="emailHelp" className="form-text text-muted">Please insert your email</small>
                            </div>
                        </div>
                    </div>


                </form>
            </div>

        </>
    )
}
