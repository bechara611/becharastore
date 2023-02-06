

import React from 'react'
import './LoginAndRegister.css'
export const Login = () => {
    return (
        <>
            <div className="contenedor-login col-12">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 contenedor-form animate__animated animate__bounceInLeft">
                    <form className='formulario-login' >
                        <div className="form-row">
                        <div className="col-12">
                        <label htmlFor="txtNameLogin"></label>
                        <input type="text" className='form-control ' id='txtNameLogin' placeholder='Name' />
                        </div>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
