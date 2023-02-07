import React from 'react'
import './Admin.css'
export const Admin = () => {
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
                            <div className="col-12 contenedor-lista-categorias">
                                <ul className="list-group">
                                    <li className="list-group-item disabled">Cras justo odio</li>
                                    <li className="list-group-item">Dapibus ac facilisis in</li>
                                    <li className="list-group-item">Morbi leo risus</li>
                                    <li className="list-group-item">Porta ac consectetur ac</li>
                                    <li className="list-group-item">Vestibulum at eros</li>
                                </ul>
                            </div>
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
