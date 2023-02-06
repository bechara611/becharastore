import React from 'react'

export const Register = () => {
  return (
    <div className="contenedor-login col-12">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 contenedor-form animate__animated animate__backInDown">
        <form className='formulario-login-Register'>
          <div className="form-row pt-2 centrarFilaFormulario">
            <div className="col-8">
              <label htmlFor="txtName">Name</label>
              <input type="text" className='form-control ' id='txtName' placeholder='Name' />
            </div>
          </div>
          <div className="form-row pt-2  centrarFilaFormulario">
          <div className="col-8">
            <label htmlFor="txtName">Email</label>
            <input type="text" className='form-control ' id='txtEmail' placeholder='Email' />
          </div>
        </div>
        </form>
      </div>

    </div>
  )
}
