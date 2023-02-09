import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useProductos } from '../../hooks/useProductos';
import { onCargando, onStopCargando } from '../../UI/slice/uiSlice';
import CurrencyInput from 'react-currency-input-field';
import './Admin.css'
import { EditProducts } from './EditProducts';
import Swal from 'sweetalert2';
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
        productoConformDataImg: '',
        productoSinformDataImg: '',
        productoPrice: null,
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
    //?este useEffect asigna al estado local el valor de la categoria por defecto
    useEffect(() => {

        //TODO PENDIENTE CON ESTE USEEFFECT ACA ASIGNA POR DEFECTO EL VALOR DE LA CATEGORIA


        setform({ ...form, productocategoria: categorias[0]==="ALL" ? categorias[1]:categorias[0]})
 
        setform({ ...form, categorySeleccionada:categorias[0]==="ALL" ? categorias[1] :categorias[0]})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorias])
    //? este metodo llama al metodo del useProductos para guardar una nueva categoria
    const onSaveCategorias = () => {
        handledSaveCategoriasUSE({ categoria: form.categoryEscrito });
        //TODO verificar aca que si se guarde la categoria para poder mostrar el mensaje

        Swal.fire('Success','Register complete','success');
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
            formData: form.productoConformDataImg,
            ImgSinFormData: form.productoSinformDataImg,
            price: form.productoPrice
        });
    }
    //? este metodo llama al metodo del useProductos para borrar una nueva categoria
    const onDeleteCategorias = () => {
     
        if(form.categorySeleccionada===''){
            if (!categorias) {
                Swal.fire('Error','You have to create a category first','error')
                return; 
            }
   
          
        }
        console.log(form)
        Swal.fire({
            title: 'Do you want to delete the category?',
            showDenyButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Cancel`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                handledDeleteCategoriasUSE({ categoria: form.categorySeleccionada });
                //TODO comprobar que se borre la categoria seleccionada para luego poder mostrar mensaje de exito
              Swal.fire('Delete!', '', 'success')
            } else if (result.isDenied) {
              
            }
          })
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
                                if(form.categoryEscrito===''){
                                    Swal.fire('Error','Please, insert a category','error');
                                    return;
                                }

                                onSaveCategorias();
                                //Borrar el textbox
                                setform({ ...form, categoryEscrito: '' })

                            }}>Save</button>
                        </div>
                        <hr />
                        <div className="form-row centrarFilaFormulario m-3">
                            <select className="form-select col-12" aria-label="Select a category"  onChange={(e) => {

                                //aca estamos obteniendo el valor y guardandolo en el estado local
                                setform({
                                    ...form,
                                    categorySeleccionada: e.target.value
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
                            <div className=" col-12 col-sm-4">
                                <input id='txtidInterno' value={form.productoidstore} type="text" className='form-control ' placeholder='ID' onChange={(e) => {
                                    setform({ ...form, productoidstore: e.target.value })
                                }} />
                            </div>
                            <div className=" col-sm-8 col-12 mt-sm-0 mt-2">
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
                            <div className="col-sm-8 col-12">
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
                            <div className="col-sm-4 col-12 mt-2 mt-sm-0 ">
                                {/** //TODO CURRENCY */}
                                <CurrencyInput
                                    id="input-example"
                                    name="input-name"
                                    placeholder="Price"
                                    value={form.productoPrice}
                                    className='form-control' 
                                    decimalsLimit={2}
                                    suffix='$'
                                    onValueChange={(value, name) => {
                                        setform({...form,productoPrice:value})}}
                                />
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

                                        formData.append('img', e.target.files[i]);
                                    }

                                    setform({ ...form, productoConformDataImg: formData, productoSinformDataImg: e.target.files })
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

        
            <div className="row fila">
              
                                <EditProducts></EditProducts>
             
            </div>
          
        </>
    )
}
