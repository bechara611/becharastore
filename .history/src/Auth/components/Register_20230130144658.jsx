import React from 'react'
import { useForm } from '../../hooks/useForm'
const initialForms = {
  displayName: '',
  email: '',
  password1: '',
  password2: ''
}
const formValidations = {
  email: [(value) => value.includes('@'), 'INSERT A VALID EMAIL'],
  password1: [(value) => value.length >= 6, 'INSERT A VALID PASSWORD'],
  password2: [(value) => value.length >= 6, 'INSERT A VALID PASSWORD'],
  displayName: [(value) => value.length >= 1, 'INSERT A VALID NAME']
}

export const Register = () => {



  const {formState, displayName, email, password1, password2, onInputChange } = useForm(initialForms, formValidations)
  const onHandledSubmit = (e) => {
    e.preventDefault();
    console.log({formState})
    //TODO hacer la parte del registro
  }
  return (
    <div className="contenedor-login col-12 mb-5 mt-3">
      <div className="col-12 col-sm-8 col-md-6 col-lg-4 contenedor-form animate__animated animate__backInDown">
        <form className='formulario-login-Register' onSubmit={(e) => onHandledSubmit(e)}>
          <div className="form-row pt-2 centrarFilaFormulario p-2">
            <div className="col-12 col-sm-8 ">
              <label htmlFor="txtName">Name</label>
              <input type="text" name='displayName' className='form-control ' id='txtName' placeholder='Name' required
                value={displayName}
                onChange={(e) => { onInputChange(e) }}
              />
            </div>
          </div>
          <div className="form-row pt-2  centrarFilaFormulario p-2 ">
            <div className="col-12 col-sm-8">
              <label htmlFor="txtName">Email</label>
              <input type="email" className='form-control ' name='email' id='txtEmail' placeholder='Email' required
                value={email}
                onChange={(e) => { onInputChange(e) }}
              />
            </div>
          </div>
          <div className="form-row pt-2  centrarFilaFormulario p-2">
            <div className="col-12 col-sm-8">
              <label htmlFor="txtPassword1">Password</label>
              <input type="password" className='form-control ' name='password1' id='txtPassword1' placeholder='Password' required
                value={password1}
                onChange={(e) => { onInputChange(e) }}
              />
            </div>

          </div>
          <div className="form-row pt-2  centrarFilaFormulario p-2">
            <div className="col-12 col-sm-8">
              <label htmlFor="txtPassword2">Repeat password</label>
              <input type="password" className='form-control ' name='password2' id='txtPassword2' placeholder='Password' required
                value={password2}
                onChange={(e) => { onInputChange(e) }}
              />
            </div>

          </div>
          <div className="form-row pt-2 pb-2  centrarFilaFormulario text-center">
            <div className="col-6 centrarFilaFormulario  text-center">
              <button type='submit' className='btn btn-warning'>Register</button>

            </div>

          </div>
          <div className="form-row pt-2   centrarFilaFormulario text-center">
            <div className="col-12 centrarFilaFormulario text-center ">
              <p className='textoAlready'>Already have an account?</p>
              <span className='SignIn my-0 py-0'>Sign in</span>

            </div>

          </div>

        </form>
      </div>

    </div>
  )
}
