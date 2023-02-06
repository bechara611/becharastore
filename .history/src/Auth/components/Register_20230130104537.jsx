import React from 'react'

export const Register = () => {
  return (
    <div className="contenedor-login col-12">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 contenedor-form animate__animated animate__backInDown">
        <form>
          <div className="form-row p-3">
            <div className="col-8">
              <label htmlFor="txtNameLogin">Name</label>
              <input type="text" className='form-control ' id='txtNameLogin' placeholder='Name' />
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}
