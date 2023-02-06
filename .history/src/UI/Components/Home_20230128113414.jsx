import React from 'react'
import './Home.css'
export const Home = () => {
    return (
        <>
        {/*De primera instancia en este home estamos haciendo dos separadores de div, que tendran con un eslogan y algun dise;o de home*/}
            <div className="col-12 PadreHome">
                <div className='col-10 separador'></div>
                <div className="col-4 m-1 bg-success contenedor-imagen ">
                  
                    <h1>1</h1>
                    <h1>1</h1>
                </div>
                <div className="col-6 m-1 bg-success contenedor-escrito ">
                  
                <h1>1</h1>
                <h1>1</h1>
            </div>
                <div className='col-10 separador'></div>
                <div className="col-12 mb-5">
                    <h1>Hola</h1>
                </div>
            </div>

        </>
    )
}
