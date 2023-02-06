import React from 'react'
import './CardProducto.css'
export const CardProducto = () => {
  return (
   <>
   <div className="col-12 col-sm-6 col-lg-3 mb-4 card2">
   <div className="card">
       <img src='https://media.wuerth.com/stmedia/modyf/eshop/products/std.lang.all/resolutions/category/png-546x410px/24899640.png' className="card-img-top" alt="Imagen" />
       <div className="card-body text-center">
           <h6 className="card-title">{'Dany Bechara'}</h6>
           <p className="card-text">{'The best product'}</p>
           <button className=" btn btn-primary btn-sm  btn-lg"
               data-bs-toggle="modal"
               data-bs-target={"#"}>Details</button>
       </div>


   </div>
</div>

   
   </>
  )
}
