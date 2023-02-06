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
      <a href='#'><i className="fa-brands fa-instagram iconoRedes"></i></a>
      <i className="fa-brands fa-whatsapp"></i>
      </div>
    </>

  )
}
