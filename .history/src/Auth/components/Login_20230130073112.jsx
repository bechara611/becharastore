import { Input, TextField } from '@mui/material'
import React from 'react'
import './LoginAndRegister.css'
export const Login = () => {
    return (
        <>
            <div className="contenedor-login col-12">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6 contenedor-form animate__animated animate__bounceInLeft">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField fullWidth label="fullWidth" id="fullWidth"  />
                <Input defaultValue="Hello world" inputProps={''} />
                </div>

            </div>
        </>
    )
}
   