import React from 'react'
import './FormularioContacto.css'
export const FormularioContacto = () => {
    return (
        <>
            <div className="  col-12 col-sm-10 col-md-8 col-lg-5 contenedor-formulario-contacto  animate__animated animate__bounceInLeft">
                <form className='formularioContacto'>
                    <div className="row col-12 col-sm-10 m-2">
                        <div className="col-12 m-2">
                            <div className="form-group ">
                                <label htmlFor="exampleInputEmail1">Please, insert your email.</label>
                                <input type="email" className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Email' />


                            </div>
                        </div>

                    </div>
                    <div className="row col-12 col-sm-10 m-2">
                        <div className="col-12 m-2">
                            <div className="form-group ">
                                <label htmlFor="inputname">Please, insert your name.</label>
                                <input type="text" className='form-control' id='inputname' aria-describedby='emailHelp' placeholder='Name' />


                            </div>
                        </div>
                    </div>
                   <div className="row col-12 col-sm-10 m-2">
                        <div className="col-12 m-2">
                            <div className="form-group ">
                                <label htmlFor="inputname">Insert your message</label>
                                <textarea className='form-control textarea' id='inputname' aria-describedby='emailHelp' placeholder='Message' />


                            </div>
                        </div>
                    </div> 
                    <button className='btn btn-outline-warning col-6 m-2'>Send</button>
                </form>
            </div>

        </>
    )
}
