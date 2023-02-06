import React from 'react'
import './FormularioContacto.css'
export const FormularioContacto = () => {
    return (
        <>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 contenedor-formulario-contacto  animate__animated animate__bounceInLeft">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className='form-control' id='exampleInputEmail' aria-describedby='emailHelp' placeholder='Email' />

                        <small id="emailHelp" className="form-text text-muted">Please insert your email</small>
                    </div>
                </form>
            </div>

        </>
    )
}
