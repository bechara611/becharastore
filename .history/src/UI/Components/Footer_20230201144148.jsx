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
      <div className="footer col-12">
      <a href={linkdn}><i className="fa-brands fa-linkedin iconoRedes"></i></a>
      <a href={whatssap}><i className="fa-brands fa-whatsapp iconoRedes"></i></a>
      <a href={correo}><i className="fa-solid fa-envelope iconoRedes"></i></a>
      <a href={correo}><i className="fa-brands fa-github iconoRedes"></i></a>

      </div>
    </>

  )
}
