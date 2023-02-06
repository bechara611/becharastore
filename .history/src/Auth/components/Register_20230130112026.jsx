import React from 'react'

export const Register = () => {
  return (
    <div className="contenedor-login col-12 ">
      <div className="col-12 col-sm-10 col-md-8 col-lg-5 contenedor-form animate__animated animate__backInDown">
        <form className='formulario-login-Register'>
          <div className="form-row pt-2 centrarFilaFormulario p-2">
            <div className="col-12 col-sm-8 ">
              <label htmlFor="txtName">Name</label>
              <input type="text" className='form-control ' id='txtName' placeholder='Name' required />
            </div>
          </div>
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
          <div className="form-row pt-2  centrarFilaFormulario p-2">
            <div className="col-12 col-sm-8">
              <label htmlFor="txtPassword2">Repeat password</label>
              <input type="password" className='form-control ' id='txtPassword2' placeholder='Password' required />
            </div>

          </div>
          <div className="form-row pt-2 pb-2  centrarFilaFormulario">
            <div className="col-6 centrarFilaFormulario ">
              <button type='submit' className='btn btn-warning'>Register</button>

            </div>

          </div>
          <div className="form-row pt-2   centrarFilaFormulario">
            <div className="col-12 centrarFilaFormulario ">
              <p className=''>Already have an account?</p>
              <span className='SignIn my-0 py-0'>Sign in</span>
          
            </div>

          </div>

        </form>
      </div>

    </div>
  )
}
