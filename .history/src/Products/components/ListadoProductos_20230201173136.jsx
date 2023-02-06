import React from 'react'
import './ListadoProductos.css'
export const ListadoProductos = () => {
    const onHandledSubmit=(e)=>{
        console.log(e)
        e.preventDefault()
        console.log('enterrrr')
    }
    return (
        <>
        <div className='col-12 separador2'></div>
            <div className="row mt-1">
                <div className="col-12 contenedor-busqueda">
                    <div className="col-4 m-1">
                      {/*Aca va la busqueda para filtrar por nombre */}
                     <form onSubmit={onHandledSubmit}>
                     <input  type="text" className='inputBusquedaProducto form-control col-4' placeholder='Search a product'  />
                   {/*//Aca generamos el llamado al filtro de los productos ya sea con nuestro useProductos o useSlice al presionar la tecla enter */ }
                    </form>
                     </div>
                    <div className="col-2 m-1">
                    {/*Aca van las categorias previamente creadas por el administrador de la tienda/pagina */}
                    {/*TODO Debes hacer el componente option con el backend y luego un map para mostrarlo */}
                        <select className="form-select" aria-label="Select a category" defaultValue={'All'}>
                            <option value={'all'} className='opcionSelect'>All</option>
                            <option value="Children" className='opcionSelect'>Children</option>
                            <option value="Women" className='opcionSelect'>Women</option>
                            <option value="Men" className='opcionSelect'>Men</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
