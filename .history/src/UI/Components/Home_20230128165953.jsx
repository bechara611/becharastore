
import React, { useEffect } from 'react'
import home2 from './../../img/home33.png'
import './Home.css'
export const Home = () => {

    useEffect(() => {
        /**Esta parte es para colocarle al nombre del boton register cuando los dispositivos sean pequenos */
        if (window.screen.width < 500) {
            const boton = document.getElementById('BotonRegistro');
            boton.innerHTML = 'Register'
        }

    }, [])

    return (
        <>
            {/*De primera instancia en este home estamos haciendo dos separadores de div, que tendran con un eslogan y algun dise;o de home*/}
            <div className="col-12 PadreHome">
                <div className='col-11 separador'></div>
                <div className="col-6 col-md-4 m-1 contenedor-imagen ">
        <div className="col-12 border">
        
        <img src={home2} alt="Home" className='col-12'/>
      
        </div>

                </div>
                <div className="col-12 col-md-6 m-1 contenedor-escrito ">

                    <div className="col-12  contenedor-titulo ">
                        <div className="col-12  contenedor-titulo">
                            <h4 className='titulo '>Welcome to our new online store</h4>
                        </div>
                    </div>
                    <div className="col-12 contenedor-texto ">
                        <div className="col-12"><p>We are your best option for your clothes and more</p></div>
                        <div className="col-12"><button type='button' className='btn btn-success col-6 btn-texto'>Products</button></div>
                        <div className="col-12"><button type='button' id='BotonRegistro' className='btn btn-texto btn-outline-warning mt-3 col-6'>Create a new account</button></div>
                    </div>


                </div>
                <div className='col-10 separador'></div>
                {/**Siguiente seccion de este home abajo de los primeros divisores */}
                <div className="col-12 mb-5">
                    <h1>Hola</h1>
                </div>
            </div>

        </>
    )
}
