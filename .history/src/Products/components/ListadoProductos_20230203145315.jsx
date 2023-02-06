import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useProductos } from '../../hooks/useProductos'
import { CardProducto } from './CardProducto'
import './ListadoProductos.css'
export const ListadoProductos = () => {
    //?utilizamos los metodos del useProducto
    const { handledAsignar5productosMasUSE, handledGetProductosUSE, handledResetCargando5USE,handledFiltrarproductosUSE } = useProductos();
    //useState para almacenar tanto la informacion del textBox como la de el option box
    const { productosAll, productoscargando5 } = useSelector((state) => state.products)
    //? Este estado nos permite darle un valor final al indice del vector clon productos5
    const [valor5, setvalor5] = useState(5)
    const [botones,setbotones]=useState({botonCategoria:false,botonSearch:false})
    //Este estado es para las opciones de categoria
    const [form, setform] = useState({
        busqueda: '',
        category: 'ALL'
    })

    const onHandledSubmit = (e) => {
        //TODO aca haremos el filtrado de los productos 
        e.preventDefault()
        handledFiltrarproductosUSE({search:form.busqueda,category:form.category.toUpperCase()})

    }
    const onCargarmas = () => {
        //? usamos el metodo del useProductos, pasandole el tamano del vector clon para que sea nuestro proximo inicio y le paso el valor final + 5 ya que se decidio que sea de 5 en 5
        //? Todo esta validado para que si no lo encuentra que no retorne nada mas
        handledAsignar5productosMasUSE((productoscargando5.length), valor5 + 5)
    }
    useEffect(() => {
        const metodoo = async () => {
            //cada vez que cargue la pagina, resetea el vector clon5
            handledResetCargando5USE();
            //vuelve a colocar el estado en 5
            setvalor5(5);
            //?carga por primera vez tanto TODOS los productos en el vector original y al mismo tiempo ejecuta el del clon con indice 0 y 5.
           await handledGetProductosUSE()

        }
        metodoo();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
//?Se realiza este useEffect con un estado de un boton de la categoria para que se active cuando el mismo cambie  y pueda en tiempo real cambiar los valores
    useEffect(() => {
    if(botones.botonCategoria===true){
        handledFiltrarproductosUSE({search:form.busqueda,category:form.category})
    }
   
    setbotones({...botones,botonCategoria:false})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [botones.botonCategoria])
    




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
                    <div className="col-md-4 col-8 m-1">
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
                        <select className="form-select col-12" aria-label="Select a category" defaultValue={'ALL'} onChange={(e) => {
                            //aca estamos obteniendo el valor y guardandolo en el estado local
                            setform({
                                ...form,
                                category: e.target.value.toUpperCase()
                            })
              
                         setbotones({...botones,botonCategoria:true})
                            
                          

                           
                        }}>{/*TODO aca va el map */}
                            <option value={'ALL'} className='opcionSelect'>All</option>
                            <option value="CHILDREN" className='opcionSelect'>CHILDREN</option>
                            <option value="WOMEN" className='opcionSelect'>WOMEN</option>
                            <option value="MEN" className='opcionSelect'>MEN</option>
                        </select>
                       
                    </div>
                    <div className="col-1"> <i className="fa-solid fa-arrows-rotate"></i></div>
                </div>
            </div>
            <div className="row mt-2 mb-5">
                <div className="col-12 contenedor-productos-padre ">
                    <div className="col-10 contenedor-productos-hijo">
                        {productoscargando5.length >= 1 &&
                            productoscargando5.map((producto, index) => {
                                return <CardProducto key={index} producto={producto}></CardProducto>

                            })
                        }



                    </div>
                    {
                        //?aca comparamos el tamano del vector clon que se le va sumando 5 con el original, para mostrar  o no el boton de ver mas.
                        !(productoscargando5.length >= productosAll?.length) ?
                            <>
                                <div className="col-12 contenedor-vermas" onClick={() => {
                                    setvalor5(valor5 + 5)
                                    onCargarmas();
                                }}><button className='btn btn-warning'>Ver mas</button></div>
                            </> : <></>
                    }

                </div>

            </div>

        </>
    )
}
