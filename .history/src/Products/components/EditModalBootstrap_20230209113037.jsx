import React, { useState } from 'react'
import CurrencyInput from 'react-currency-input-field';
import { useSelector } from 'react-redux';
import './ModalBootstrap.css'
export const EditModalBootstrap = ({ producto }) => {
    const { productosAll, productoscargando5, categorias } = useSelector((state) => state.products)
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
    return (
        <div className="modal fade  " id={producto?._id} tabIndex={-1} aria-hidden="true" aria-labelledby="label-modal-1">
            <div className="modal-dialog modal-dialog-centered ">
                <div className="modal-content text-center  ">
                    <div className="modal-header text-center justify-content-center contenedorSuperiorModal ">
                        <h5 className="modal-title text-light ">{producto?.title}</h5>
                        <button className="btn-close text-light " data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body bg-light ">
                        <div className="col-12 ContenedorImagenModal">
                            <div className="col-10 col-lg-6  ContenedorImagenModal">
                                <img className='img col-12 ' src={producto?.urlimg} alt="" />

                            </div>

                        </div>
                        <div className="col-12">
                             {/*TODO  */}
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
                        
                                         }}>Save</button>
                                     </div>
         
         
         
                                 </div>
         
                             </form>
                         </div>
                            <p className="my-5 text-dark">{producto?.descriptionLong}</p>
                          
                        </div>
                    </div>
                    <div className="modal-footer text-center d-flex justify-content-center FooterModal">
                        {
                            <p className='text-dark'></p>

                        }

                    </div>
                </div>
            </div>
        </div>

    );

}
