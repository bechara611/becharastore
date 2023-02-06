import { Input, TextField } from '@mui/material'
import React from 'react'
import './LoginAndRegister.css'
export const Login = () => {
    return (
        <>
            <div className="contenedor-login col-12">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 contenedor-form animate__animated animate__bounceInLeft">
                <div className="form-control">
                <label htmlFor="my-input">Email address</label>
                <input id="my-input" aria-describedby="my-helper-text" />
                <span id="my-helper-text">Well never share your email.</span>
              </div>
                </div>

            </div>
        </>
    )
}
   