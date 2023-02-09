import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useProductos } from '../../hooks/useProductos'
import { onCargando, onStopCargando } from '../../UI/slice/uiSlice'
import { CardProducto } from './CardProducto'
import { EditCardProducto } from './EditCardProduct'
import './ListadoProductos.css'

export const EditProducts = () => {
    const dispatch = useDispatch();
    const {cargando}= useSelector((state)=>state.ui)
    //?utilizamos los metodos del useProducto
    const { handledAsignar5productosMasUSE, handledGetProductosUSE, handledResetCargando5USE,handledFiltrarproductosUSE,handledGetCategoriasUSE } = useProductos();
    //useState para almacenar tanto la informacion del textBox como la de el option box
    const { productosAll, productoscargando5,categorias } = useSelector((state) => state.products)
    //? Este estado nos permite darle un valor final al indice del vector clon productos5
    const [valor5, setvalor5] = useState(5)
    const [botones,setbotones]=useState({botonCategoria:false,botonReset:false,botonSearch:false})
    //Este estado es para las opciones de categoria
    const [form, setform] = useState({
        busqueda: '',
        category: 'ALL'
    })

    const onHandledSubmit = (e) => {
        //TODO aca haremos el filtrado de los productos 
        e.preventDefault()
        handledFiltrarproductosUSE({search:form.busqueda,category:form.category.toUpperCase()})
        setbotones({...botones,botonReset:false,botonSearch:true})
        //ejemplo este setbotones que hacemos aca es para que el boton si salga si hacemos enter teniendoo all y teniendo el search vacio
        if(form.category==='ALL' && form.busqueda===''){
            setbotones({...botones,botonSearch:false})
        }
    }
    const onCargarmas = () => {
        //? usamos el metodo del useProductos, pasandole el tamano del vector clon para que sea nuestro proximo inicio y le paso el valor final + 5 ya que se decidio que sea de 5 en 5
        //? Todo esta validado para que si no lo encuentra que no retorne nada mas
        handledAsignar5productosMasUSE((productoscargando5.length), valor5 + 5)
    }
    useEffect(() => {
        const metodoo = async () => {
            //hacemos que salga el estado cargando
       
            dispatch(onCargando())
            //cada vez que cargue la pagina, resetea el vector clon5
            handledResetCargando5USE();
            //vuelve a colocar el estado en 5
            setvalor5(5);
            //?carga por primera vez tanto TODOS los productos en el vector original y al mismo tiempo ejecuta el del clon con indice 0 y 5.
           await handledGetProductosUSE()
           await handledGetCategoriasUSE()
           dispatch(onStopCargando())
        }
        metodoo();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        //?ESTE USEEFFECT es para resetear, se activa al pulsar el boton de reset
        const metodoo = async () => {
            //cada vez que cargue la pagina, resetea el vector clon5
            handledResetCargando5USE();
            //vuelve a colocar el estado en 5
            setvalor5(5);
            //?carga por primera vez tanto TODOS los productos en el vector original y al mismo tiempo ejecuta el del clon con indice 0 y 5.
           await handledGetProductosUSE()
           setform({...form,category:'ALL',busqueda:''})
        }
        if(botones.botonReset===true){
            metodoo();
        }
      
        setbotones({...botones,botonReset:false,botonSearch:false})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [botones.botonReset])
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

            <div className='col-10 separador2'></div>
            <div className="row mt-1">
                <div className="col-12  contenedor-titulo">
                    <h6 className='titulo animate__animated animate__lightSpeedInRight  '>Select and edit your product</h6>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 contenedor-busqueda">
                <i className="fa-solid fa-arrows-rotate m-2 iconoReset" onClick={()=>{
                    setbotones({...botones,botonReset:true})
                }}></i>
                    <div className="col-md-4 col-8 m-1">
                        {/*Aca va la busqueda para filtrar por nombre */}
                        <form onSubmit={onHandledSubmit}>
                       
                            <input type="text"  className='inputBusquedaProducto form-control col-4' placeholder='Search' value={form.busqueda} onChange={(e) => {
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
      
                </div>
            </div>
            {!cargando ? 
                
                <>
                <div className="row mt-2 mb-5">
                <div className="col-12 contenedor-productos-padre ">
                    <div className="col-10 contenedor-productos-hijo">
                        {productoscargando5.length >= 1 &&
                            productoscargando5.map((producto, index) => {
                                return <EditCardProducto key={index} producto={producto}></EditCardProducto>

                            })
                        }



                    </div>
                    {
                        //?aca comparamos el tamano del vector clon que se le va sumando 5 con el original, para mostrar  o no el boton de ver mas.
                        !(productoscargando5.length >= productosAll?.length) && botones.botonCategoria===false && botones.botonSearch===false
                         ?
                            <>
                           
                                <div className="col-12 contenedor-vermas"><button className='btn btn-warning'
                                onClick={() => {
                                    setvalor5(valor5 + 5)
                                    onCargarmas();
                                }}
                                >Ver mas</button></div>
                            </> : <></>
                    }

                </div>

            </div>
                </> :
                
                <>
                <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
                </>}
           
              
        </>
    )
}
