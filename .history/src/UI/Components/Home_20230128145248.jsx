import React from 'react'
import './Home.css'
export const Home = () => {
    return (
        <>
            {/*De primera instancia en este home estamos haciendo dos separadores de div, que tendran con un eslogan y algun dise;o de home*/}
            <div className="col-12 PadreHome">
                <div className='col-11 separador'></div>
                <div className="col-4 m-1 bg-success contenedor-imagen ">

                    <h1>Imagen</h1>
                    <h1>Imagen</h1>
                    <h1>Imagen</h1>
                    <h1>Imagen</h1>

                </div>
                <div className="col-6 m-1 bg-success contenedor-escrito ">
                    <div className="col-4">
                    <h4 className='titulo col-2'>Escrito</h4>
                    
                    </div>
                    <div className="col-4 fondito">
                    <h4 className='titulo col-2'>Escrito</h4>
                    
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
