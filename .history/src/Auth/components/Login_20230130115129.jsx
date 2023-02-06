

import React from 'react'
import './LoginAndRegister.css'
export const Login = () => {
    return (
        <>
            <div className="contenedor-login col-12 mb-5 mt-5">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4  contenedor-form animate__animated animate__bounceInLeft">
                <form className='formulario-login-Register'>
              
                <div className="form-row pt-2  centrarFilaFormulario p-2 ">
                  <div className="col-12 col-sm-8">
                    <label htmlFor="txtName">Email</label>
                    <input type="email" className='form-control ' id='txtEmail' placeholder='Email' required />
                  </div>
                </div>
                <div className="form-row pt-2  centrarFilaFormulario p-2">
                  <div className="col-12 col-sm-8">
                    <label htmlFor="txtPassword1">Password</label>
                    <input type="password" className='form-control ' id='txtPassword1' placeholder='Password' required />
                  </div>
      
                </div>
               
                <div className="form-row pt-2 pb-2  centrarFilaFormulario text-center">
                  <div className="col-6 centrarFilaFormulario  text-center">
                    <button type='submit' className='btn btn-warning'>Login</button>
      
                  </div>
      
                </div>
                <div className="form-row pt-2   centrarFilaFormulario text-center">
                  <div className="col-12 centrarFilaFormulario text-center ">
                    <p className='textoAlready'>Are you new?</p>
                    <span className='SignIn my-0 py-0'>Register</span>
                
                  </div>
      
                </div>
      
              </form>
                </div>

            </div>
        </>
    )
}
