
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useProductos } from '../../hooks/useProductos'
// eslint-disable-next-line no-unused-vars
import { CardProducto } from '../../Products/components/CardProducto'
import { EstaActivoElemento } from '../helper/ElementoActivo'
import home2 from './../../img/home44.png'
import { FormularioContacto } from './FormularioContacto'
import './Home.css'
export const Home = () => {
const navegar = useNavigate();
const {handledGetProductosUSE}= useProductos();
// eslint-disable-next-line no-unused-vars
const {  productoscargando5 } = useSelector((state) => state.products)
const [estadoAnimacion, setestadoAnimacion] = useState({
    contacto:false,
})
    useEffect(() => {
        /**Esta parte es para colocarle al nombre del boton register cuando los dispositivos sean pequenos */
        if (window.screen.width < 500) {
            const boton = document.getElementById('BotonRegistro');
            boton.innerHTML = 'Register'
        }
        const metodo = async()=>{
            await handledGetProductosUSE();
        }
       metodo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        /**Esta parte es para colocarle al nombre del boton register cuando los dispositivos sean pequenos */
        if (estadoAnimacion.contacto===true) {
      

    
            setTimeout(() => {
               
       
                document.getElementById('contenedor-contacto').classList.add('animate__animated')
                document.getElementById('contenedor-contacto').classList.add('animate__fadeInLeftBig')
                document.getElementById('contenedor-contacto').classList.remove('opacity0')
            }, 200);
        }
       

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [estadoAnimacion.contacto])

    window.addEventListener('scroll',(e)=>{
        if(EstaActivoElemento(document.getElementById('contenedor-contacto'))){
            setestadoAnimacion({...estadoAnimacion,contacto:true})
        }
    })
    return (
        <>

            {/*De primera instancia en este home estamos haciendo dos separadores de div, que tendran con un eslogan y algun dise;o de home*/}
            <div className="col-12 PadreHome">
                <div className='col-11 separador'></div>
                <div className="col-6 col-md-4 m-1 contenedor-imagen ">
                    <div className="col-12 cajaImagen">

                        <img src={home2} alt="Home" className='col-12 animate__animated animate__heartBeat' />

                    </div>

                </div>
                <div className="col-12 col-md-6 m-1 contenedor-escrito ">

                    <div className="col-12  contenedor-titulo ">
                        <div className="col-12  contenedor-titulo">
                            <h4 className='titulo animate__animated animate__lightSpeedInLeft  '>Welcome to our new online store</h4>
                        </div>
                    </div>
                    <div className="col-12 contenedor-texto ">
                        <div className="col-12"><p>We are your best option for your clothes and more</p></div>
                        <div className="col-12"><button type='button' className='btn btn-success col-6 btn-texto ' onClick={()=>{navegar('/products',{replace:true})}}> Products</button></div>
                        <div className="col-12"><button type='button' id='BotonRegistro' className='btn btn-texto btn-outline-warning mt-3 col-6'  onClick={()=>{navegar('/register',{replace:true})}}>Create a new account</button></div>
                    </div>


                </div>
                <div className='col-10 separador mb-5'></div>
                {/**Siguiente seccion de este home abajo de los primeros divisores */}
         

            </div>
         <div className="col-12 contenedor-articulos-home ">
            <div className="col-12 contenedor-articulos-home-titulo">
                <h4 className='titulo-contacto  animate__animated animate__lightSpeedInLeft  '>Our products are waiting for you!</h4>
            </div>
        </div>
        <div className="row mt-2 mb-2">
        <div className="col-12 contenedor-producto-home-padre">
        <div className="col-12 contenedor-producto-home-jr">
        {productoscargando5.length >= 1 &&
                       productoscargando5.map((producto, index) => {
                           if(index<4){
                               return <CardProducto key={index} producto={producto}></CardProducto>
            
                           }else{

                               return null
                           }
                           
                      })
                    }
        </div>
        <p className='SeeMore'>View All</p>
        </div>
        </div>
            <div className="col-12 mb-5 contenedor-contacto  " >
                <div className="col-6 contenedor-contacto  ">
                    <h4 className='titulo-contacto  animate__animated animate__lightSpeedInLeft  'id='TITUULO'>Contact</h4>
                </div>
                <div className="contenedor-contacto col-12 p-3 opacity0 " id='contenedor-contacto'>
                {/*TODO colocar otra seccion del home, ejemplo mostrar 5 articulos top con un boton de ver mas */}
                   <FormularioContacto></FormularioContacto>

                </div>
            </div>

        </>
    )
}

// <div className="row mt-2 mb-5">
// <div className="col-12 contenedor-productos-padre ">
//     <div className="col-10 contenedor-productos-hijo">
//         {productoscargando5.length >= 1 &&
//             productoscargando5.map((producto, index) => {
//                 if(index<5){
//                     return <CardProducto key={index} producto={producto}></CardProducto>

//                 }
//                 return null
               
//             })
//         }



//     </div>
//     </div>
//     </div>
