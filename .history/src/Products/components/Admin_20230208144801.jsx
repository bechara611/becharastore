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
    const { handledGetProductosUSE, handledGetCategoriasUSE, handledDeleteCategoriasUSE, handledSaveCategoriasUSE, handledSaveProductosUSE } = useProductos();
    const [form, setform] = useState({
        categoryEscrito: '',
        categorySeleccionada: '',
        productoidstore: '',
        productotitle: '',
        productodescription: '',
        productodescriptionLong: '',
        productocategoria: '',
        productoformDataImg: '',
    }) //TODO muy quizas aca debas cambiar el productourlimg para que sea pasado como file o de otra forma y no por el body
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
    //?este useEffect asigna al estado local el valor de la categoria por defecto
    useEffect(() => {
        //TODO PENDIENTE CON ESTE USEEFFECT ACA ASIGNA POR DEFECTO EL VALOR DE LA CATEGORIA
        setform({ ...form, categorySeleccionada: categorias[0] === 'ALL' ? categorias[1] : categorias[0] || '' })
        setform({ ...form, productocategoria: categorias[0] === 'ALL' ? categorias[1] : categorias[0] || '' })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorias])
    //? este metodo llama al metodo del useProductos para guardar una nueva categoria
    const onSaveCategorias = () => {
        handledSaveCategoriasUSE({ categoria: form.categoryEscrito });

    }
    const onSaveProducto = () => {
        handledSaveProductosUSE({
            _id: '',
            idstore: form.productoidstore,
            urlimg: '',
            title: form.productotitle,
            description: form.productodescription,
            categoria: form.productocategoria,
            descriptionLong: form.productodescriptionLong,
            formData: form.productoformDataImg
        });
    }
    //? este metodo llama al metodo del useProductos para borrar una nueva categoria
    const onDeleteCategorias = () => {
        handledDeleteCategoriasUSE({ categoria: form.categorySeleccionada });

    }


    return (
        <>
            <div className='col-12 separadorAdmin'></div>
            <div className="col-12 contenedor-articulos-home ">
                <div className="col-12 contenedor-articulos-home-titulo">
                    <h4 className='titulo-contacto  animate__animated animate__lightSpeedInLeft  '>Categories</h4>
                </div>
            </div>
            <div className="row fila ">
                <div className="col-md-5 col-10 contenedorGeneral contenedor-categorias animate__animated animate__zoomInLeft">
                    <form className='formularioAdminCategorias'>
                        <div className="form-row centrarFilaFormulario">
                            <label htmlFor="txtcategoria">Create a new category</label>
                            <input id='txtcategoria' value={form.categoryEscrito} type="text" className='form-control' placeholder='Category' onChange={(e) => {
                                setform({ ...form, categoryEscrito: e.target.value })
                                //TODO registrar categorias

                            }} />
                        </div>
                        <div className="form-row centrarFilaFormulario mt-2">
                            <button className='btn btn-warning col-6' onClick={(e) => {
                                e.preventDefault();
                                onSaveCategorias();

                            }}>Save</button>
                        </div>
                        <hr />
                        <div className="form-row centrarFilaFormulario m-3">
                            <select className="form-select col-12" aria-label="Select a category" value={form.categorySeleccionada} onChange={(e) => {
                                //aca estamos obteniendo el valor y guardandolo en el estado local
                                setform({
                                    ...form,
                                    categorySeleccionada: e.target.value.toUpperCase()
                                })

                            }} >
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
                            <button className='btn btn-danger col-6' onClick={(e) => {
                                e.preventDefault();
                                onDeleteCategorias();
                            }}>Delete</button>
                        </div>
                    </form>
                </div>

            </div>
            <div className="col-12 contenedor-articulos-home ">
                <div className="col-12 contenedor-articulos-home-titulo">
                    <h4 className='titulo-contacto  animate__animated animate__lightSpeedInLeft  '>Upload your products</h4>
                </div>

            </div>
            <div className="row fila">
                <div className="col-10 col-md-5 contenedorGeneralMayor contenedor-productos animate__animated animate__zoomInRight">
                    <form className='formularioSubirProductos col-12'>
                        <div className="row centrarFilaFormulario">
                            <h6>Create your product</h6>
                        </div>
                        <div className="row  centrarFilaFormulario ">
                            <div className="col-4">
                                <input id='txtidInterno' value={form.productoidstore} type="text" className='form-control ' placeholder='ID' onChange={(e) => {
                                    setform({ ...form, productoidstore: e.target.value })
                                }} />
                            </div>
                            <div className="col-8">
                                <input id='txtproductotitle' value={form.productotitle} type="text" className='form-control ' placeholder='Title' onChange={(e) => {
                                    setform({ ...form, productotitle: e.target.value })
                                }} />
                            </div>


                        </div>
                        <div className="row  mt-2 centrarFilaFormulario ">
                            <div className="col-12">
                                <input id='txtshortdescription' value={form.productodescription} type="text" className='form-control ' placeholder='Short description' onChange={(e) => {
                                    setform({ ...form, productodescription: e.target.value })
                                }} />
                            </div>



                        </div>

                        <div className="row  mt-2 centrarFilaFormulario">
                            <div className="col-12">
                                <select className="form-select col-12" aria-label="Select a category" value={form.productocategoria} onChange={(e) => {
                                    //aca estamos obteniendo el valor y guardandolo en el estado local
                                    setform({ ...form, productocategoria: e.target.value })

                                }} >
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
                        </div>
                        <div className="row  mt-2 mb-2 centrarFilaFormulario">
                            <div className="col-12">
                                <textarea value={form.productodescriptionLong} onChange={(e) => {
                                    setform({ ...form, productodescriptionLong: e.target.value })
                                }} className='form-control textarea' id='txtlongdescription' aria-describedby='emailHelp' placeholder='Long description' />
                            </div>
                        </div>
                        <div className="row  mt-2 mb-3 centrarFilaFormulario ">
                            <div className="col-12 fila">
                                <input name='imagen' id='txtshortdescription' accept="image/.jpeg,.jpg,.png,.gif,.ico" type="file" className='form-control ' onChange={(e) => {
                                    //TODO DE obtener el file
                                    const formData = new FormData();

                                 
                                    for (let i = 0; i < e.target.files.length; i++) {

                                        formData.append('imagenes', e.target.files[i]);
                                    }
                                    setform({ ...form, productoformDataImg: e.target.files[0] })
                                }} />
                            </div>



                        </div>
                        <div className="row  mt-2 mb-3 centrarFilaFormulario ">
                            <div className="col-12">
                                <button className='btn btn-warning col-6 ' onClick={(e) => {
                                    e.preventDefault();
                                    //TODO validaciones
                                    onSaveProducto();
                                }}>Save</button>
                            </div>



                        </div>

                    </form>
                </div>
            </div>

            <div className="col-12 contenedor-articulos-home ">
                <div className="col-12 contenedor-articulos-home-titulo">
                    <h4 className='titulo-contacto  animate__animated animate__lightSpeedInLeft  '>Edit your products</h4>
                </div>
            </div>
            <div className="row fila">
                <div className="col-11 col-md-10 p-5 ml-5 contenedorGeneralMayor animate__animated animate__zoomInUp">

                </div>
            </div>
            <div className='col-12 separadorAdmin mb-3'></div>
        </>
    )
}
