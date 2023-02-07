import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useProductos } from '../../hooks/useProductos';
import { onCargando, onStopCargando } from '../../UI/slice/uiSlice';
import './Admin.css'
export const Admin = () => {
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const { productosAll, productoscargando5, categorias } = useSelector((state) => state.products)
    // eslint-disable-next-line no-unused-vars
    const { handledAsignar5productosMasUSE, handledGetProductosUSE, handledResetCargando5USE, handledFiltrarproductosUSE, handledGetCategoriasUSE } = useProductos();
    const [form, setform] = useState({
        categoryEscrito: '',
        categorySeleccionada: ''
    })
    useEffect(() => {
        const metodoo = async () => {
            //hacemos que salga el estado cargando

            dispatch(onCargando())

            //?carga por primera vez tanto TODOS los productos en el vector original y al mismo tiempo ejecuta el del clon con indice 0 y 5.
            await handledGetProductosUSE()
            //TODO PENDIENTE QUE TODO ESTE MODULO Y ESTA PARTE DONDE CARGAN PRODUCTOS Y CATEGORIAS DEBE FUNCIONAR
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
                            <input id='txtcategoria' value={form.categoryEscrito} type="text" className='form-control' placeholder='Category' onChange={(e)=>{
                                setform({...form,categoryEscrito:e.target.value})
                            }} />
                        </div>
                        <div className="form-row centrarFilaFormulario mt-2">
                            <button className='btn btn-warning col-6'>Save</button>
                        </div>
                        <hr />
                        <div className="form-row centrarFilaFormulario m-3">
                            <select className="form-select col-12" aria-label="Select a category" value={form.category} onChange={(e) => {
                                //aca estamos obteniendo el valor y guardandolo en el estado local
                                setform({
                                    ...form,
                                    categorySeleccionada: e.target.value.toUpperCase()
                                })

                            }}>
                                {
                                    categorias ?

                                        <>
                                            {categorias.map((category, i) => {
                                                if (category !== 'ALL') return <option key={i} value={category} className='opcionSelect'>{category}</option>
                                                return null
                                            })}

                                        </>

                                        :


                                        <></>
                                }

                            </select>
                        </div>
                        <div className="form-row centrarFilaFormulario m-2">
                            <button className='btn btn-danger col-6'>Delete</button>
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
