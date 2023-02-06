import React from 'react'
import './Footer.css'


let linkdn="https://linkedin.com/in/DanyBechara";
let correo="mailto:bechara611@gmail.com";
let blank='_blank';
let github='https://github.com/bechara611';
let whatssap='https://wa.me/584120361952';

export const Footer = () => {
  return (
    <>
      {/*Aca este footer le estamos colocando una posicion absolute y a su padre relativa para poder ubicarlo al final de su div padre */}
      <div className="footer col-12 mt-5 pt-1">
      <a href={linkdn} target={blank}><i className="fa-brands fa-linkedin iconoRedes"></i></a>
      <a href={whatssap} target={blank}><i className="fa-brands fa-whatsapp iconoRedes"></i></a>
      <a href={correo} target={blank}><i className="fa-solid fa-envelope iconoRedes"></i></a>
      <a href={github} target={blank}><i className="fa-brands fa-github iconoRedes"></i></a>
     
     <div className="col-12 contenedor-mensaje-footer">
     <div className="col-6 contenedor-mensaje-footer">
     <p>Created by Dany Bechara {new Date().getFullYear().toString()}</p>
     </div>

     </div>
      </div>
    </>

  )
}
