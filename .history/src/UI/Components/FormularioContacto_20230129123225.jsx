import React, { useState } from 'react'
import './FormularioContacto.css'
export const FormularioContacto = () => {
    const [formValuesContact, setformValuesContact] = useState({
        name:'',
        email:'',
        message:''
    })
    const onReset=()=>{
        setformValuesContact({
            name:'',
            email:'',
            message:''
        })
    }
    const onHandledSubmit =(e)=>{
        e.preventDefault();
        //TODO Realizar el envio de la informacion del contacto
        console.log({formValuesContact})
        onReset();
    }
    const onhandledChange=(event,type)=>{
        setformValuesContact({
            ...formValuesContact,
            [type]:event.target.value
        })
    }
    return (
        <>
            <div className="  col-12 col-sm-10 col-md-8 col-lg-5 contenedor-formulario-contacto  animate__animated animate__bounceInLeft">
                <form className='formularioContacto' onSubmit={(e)=>{onHandledSubmit(e)}}>
                    <div className="row col-12 col-sm-10 m-2">
                        <div className="col-12 m-2">
                            <div className="form-group ">
                                <label htmlFor="exampleInputEmail1">Please, insert your email.</label>
                                <input value={formValuesContact.email} onChange={(e)=>{onhandledChange(e,'email')}} type="email" className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Email' />


                            </div>
                        </div>

                    </div>
                    <div className="row col-12 col-sm-10 m-2">
                        <div className="col-12 m-2">
                            <div className="form-group ">
                                <label htmlFor="inputname">Please, insert your name.</label>
                                <input value={formValuesContact.name} onChange={(e)=>{onhandledChange(e,'name')}} type="text" className='form-control' id='inputname' aria-describedby='emailHelp' placeholder='Name' />


                            </div>
                        </div>
                    </div>
                   <div className="row col-12 col-sm-10 m-2">
                        <div className="col-12 m-2">
                            <div className="form-group ">
                                <label htmlFor="inputname">Insert your message</label>
                                <textarea value={formValuesContact.message} onChange={(e)=>{onhandledChange(e,'message')}} className='form-control textarea' id='inputname' aria-describedby='emailHelp' placeholder='Message' />


                            </div>
                        </div>
                    </div> 
                    <button type='submit' onSubmit={onHandledSubmit} className='btn btn-warning col-6 m-2'>Send</button>
                </form>
            </div>

        </>
    )
}
