
import React, { useEffect } from 'react'
import './Home.css'
export const Home = () => {
useEffect(() => {
  console.log(window.screen.width)

 
}, [window.screen.width])

    return (
        <>
            {/*De primera instancia en este home estamos haciendo dos separadores de div, que tendran con un eslogan y algun dise;o de home*/}
            <div className="col-12 PadreHome">
                <div className='col-11 separador'></div>
                <div className="col-6 col-md-4 m-1 bg-success contenedor-imagen ">

                    <h1>Imagen</h1>
                    <h1>Imagen</h1>
                    <h1>Imagen</h1>
                    <h1>Imagen</h1>

                </div>
                <div className="col-12 col-md-6 m-1 contenedor-escrito ">

                    <div className="col-12  contenedor-titulo ">
                        <div className="col-12  contenedor-titulo">
                            <h4 className='titulo '>Welcome to our new online store</h4>
                        </div>
                    </div>
                    <div className="col-12 contenedor-texto ">
                        <div className="col-12"><p>We are your best option for your clothes and more</p></div>
                        <div className="col-12"><button type='button' className='btn btn-success col-6'>Products</button></div>
                        <div className="col-12"><button type='button' id='gg' className='btn btn-outline-warning mt-3 col-6'>Create a new account</button></div>
                    </div>


                </div>
                <div className='col-10 separador'></div>
                <div className="col-12 mb-5">
                    <h1>Hola</h1>
                </div>
            </div>

        </>
    )
}
