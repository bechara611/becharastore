import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useProductos } from '../../hooks/useProductos';
import { onCargando, onStopCargando } from '../../UI/slice/uiSlice';
import './Admin.css'
export const Admin = () => {
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const { productosAll, productoscargando5,categorias } = useSelector((state) => state.products)
       // eslint-disable-next-line no-unused-vars
    const { handledAsignar5productosMasUSE, handledGetProductosUSE, handledResetCargando5USE,handledFiltrarproductosUSE,handledGetCategoriasUSE } = useProductos();
    const [form, setform] = useState({
        busqueda: '',
        category: 'ALL'
    })
    useEffect(() => {
        const metodoo = async () => {
            //hacemos que salga el estado cargando
       
            dispatch(onCargando())
       
            //?carga por primera vez tanto TODOS los productos en el vector original y al mismo tiempo ejecuta el del clon con indice 0 y 5.
           await handledGetProductosUSE()
           await handledGetCategoriasUSE()
           dispatch(onStopCargando())
        }
        metodoo();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className='col-12 separadorAdmin'></div>
            <div className="row fila ">
                <div className="col-4 contenedorGeneral contenedor-categorias animate__animated animate__zoomInLeft">
                    <form className='formularioAdmin'>
                        <div className="form-row centrarFilaFormulario">
                            <label htmlFor="txtcategoria">Create a new category</label>
                            <input id='txtcategoria' type="text" className='form-control' placeholder='Category' />
                        </div>
                        <div className="form-row centrarFilaFormulario mt-2">
                            <button className='btn btn-warning col-6'>Save</button>
                        </div>
                        <hr />
                        <div className="form-row centrarFilaFormulario m-2">
                        <select className="form-select col-12" aria-label="Select a category" value={form.category}  onChange={(e) => {
                            //aca estamos obteniendo el valor y guardandolo en el estado local
                            setform({
                                ...form,
                                category: e.target.value.toUpperCase()
                            })
                           
                        }}>
                        {
                            categorias ?
                            
                            <>
                            {categorias.map((category,i)=>{
                                return <option key={i} value={category} className='opcionSelect'>{category}</option>
                            })}
                    
                            </>

                             :

                            
                            <></>
                        }
                     
                        </select>
                        </div>

                    </form>
                </div>
                <div className="col-4 contenedorGeneral contenedor-productos animate__animated animate__zoomInRight">

                </div>
            </div>
            <div className="row fila">
                <div className="col-9 contenedorGeneral contenedor-categorias animate__animated animate__zoomInUp"></div>
            </div>
            <div className='col-12 separadorAdmin mb-3'></div>
        </>
    )
}
