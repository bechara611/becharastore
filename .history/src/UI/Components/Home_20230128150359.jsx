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
                  
                <div className="row">
                <h1 className='titulo'>Dany Bechara</h1>
                </div>
                <div className="row">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo repellendus hic facere doloremque sapiente nisi sint ratione inventore necessitatibus?</p>
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
