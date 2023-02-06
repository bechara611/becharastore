import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useProductos } from '../../hooks/useProductos'
import { CardProducto } from './CardProducto'
import './ListadoProductos.css'
export const ListadoProductos = () => {
    const {handledAsignar5productosMas} = useProductos();
    //useState para almacenar tanto la informacion del textBox como la de el option box
    const {productosAll}= useSelector((state)=>state.products)
    const [form, setform] = useState({
        busqueda: '',
        category: 'All'
    })
    const onHandledSubmit = (e) => {
        //TODO aca haremos el filtrado de los productos 
        e.preventDefault()
        console.log({ form })
        console.log(productosAll)
    }
    return (
        <>

            <div className='col-12 separador2'></div>
            <div className="row mt-1">
                <div className="col-12  contenedor-titulo">
                    <h6 className='titulo animate__animated animate__lightSpeedInRight  '>We have all these products just for you</h6>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 contenedor-busqueda">
                    <div className="col-4 col-md-4 col-8 m-1">
                        {/*Aca va la busqueda para filtrar por nombre */}
                        <form onSubmit={onHandledSubmit}>
                            <input type="text" className='inputBusquedaProducto form-control col-4' placeholder='Search' onChange={(e) => {
                                //aca estamos obteniendo el valor y guardandolo en el estado local
                                setform({
                                    ...form,
                                    busqueda: e.target.value.toUpperCase()
                                })
                            }} />
                            {/*//Aca generamos el llamado al filtro de los productos ya sea con nuestro useProductos o useSlice al presionar la tecla enter */}
                        </form>
                    </div>
                    <div className="col-md-2 col-6 m-1">
                        {/*Aca van las categorias previamente creadas por el administrador de la tienda/pagina */}
                        {/*TODO Debes hacer el componente option con el backend y luego un map para mostrarlo */}
                        <select className="form-select col-12" aria-label="Select a category" defaultValue={'All'} onChange={(e) => {
                            //aca estamos obteniendo el valor y guardandolo en el estado local
                            setform({
                                ...form,
                                category: e.target.value.toUpperCase()
                            })
                        }}>{/*TODO aca va el map */}
                            <option value={'All'} className='opcionSelect'>All</option>
                            <option value="Children" className='opcionSelect'>Children</option>
                            <option value="Women" className='opcionSelect'>Women</option>
                            <option value="Men" className='opcionSelect'>Men</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row mt-2 mb-5">
                <div className="col-12 contenedor-productos-padre ">
                    <div className="col-10 contenedor-productos-hijo">
                    {
                        productosAll.map((producto,index)=>{
                            return <CardProducto key={index} producto={producto}></CardProducto>

                        })
                    }
                        
                       
                        
                    </div>
                    <div className="col-12 contenedor-vermas"><button className='btn btn-warning'>Ver mas</button></div>
                </div>
               
            </div>

        </>
    )
}
