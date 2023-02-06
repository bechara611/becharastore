import React from 'react'
import './CardProducto.css'
export const CardProducto = () => {
    return (
        <>
            <div className="col-12  col-sm-4 -4 col-lg-2 m-1 mb-4 ">
                <div className="card">
                    <img src='https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png' className="card-img-top" alt="Imagen" />
                    <div className="card-body text-center">
                        <h6 className="card-title">{'Dany Bechara'}</h6>
                        <div className="contenedor-texto-card"><p className="card-text">{'The best product lorem10The The best product lorem10The The best product lorem10Thefinal '}</p></div>
                        <button className=" btn btn-primary btn-sm  btn-lg"
                          >Details</button>
                    </div>


                </div>
            </div>


        </>
    )
}
