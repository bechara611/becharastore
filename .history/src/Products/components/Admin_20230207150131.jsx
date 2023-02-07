import React from 'react'
import { useSelector } from 'react-redux'
import './Admin.css'
export const Admin = () => {
    // eslint-disable-next-line no-unused-vars
    const { productosAll, productoscargando5,categorias } = useSelector((state) => state.products)
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
                        <div className="form-row centrarFilaFormulario">
                        <select className="form-select col-12" aria-label="Select a category" value={form.category}  onChange={(e) => {
                            //aca estamos obteniendo el valor y guardandolo en el estado local
                            setform({
                                ...form,
                                category: e.target.value.toUpperCase()
                            })
              
                         setbotones({...botones,botonCategoria:true})
                            
                          

                           
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
