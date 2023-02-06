import React from 'react'
import header22 from  './../../img/Header2.jpg'
import './Carousel.css'
export const Carousel = () => {
  return (
    <>
    <div className="container">
    <div className="row mt-5 contenedor-carousel">
      <div className="col contenedor-carousel">
        <div className="carousel slide carousel" id="mi-carousel" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            <div className="carousel-caption">
      
          </div>
              <img className="img-fluid" src={header22} alt='' />
            </div>
            
            <div className="carousel-item" data-bs-interval="5000">
              <div className="carousel-caption">
      
     
              </div>
              <img className="img-fluid" src={header22}  alt=''/>
            </div>
            <div className="carousel-item">
            <div className="carousel-caption">
  
          
          </div>
            <img className="img-fluid" src={header22} alt='' />
            </div>
          </div>
        


          <button 
            className="carousel-control-prev botonprev"
            type="button"
            data-bs-target="#mi-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon  icono" aria-hidden="true"></span>
            <span className="visually-hidden">Prev</span>
          </button>
          <button 
            className="carousel-control-next"
            type="button"
            data-bs-target="#mi-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon icono" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
           
          


          <div className="carousel-indicators">
            <button 
              type="button"
              className="active"
              data-bs-target="#mi-carousel"
              data-bs-slide-to="0"
              aria-label="Slide 1"
            ></button>
            <button 
              type="button"
              className=""
              data-bs-target="#mi-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button 
              type="button"
              className=""
              data-bs-target="#mi-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
 
    </>
  )
}
