import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <>
      {/*Aca este footer le estamos colocando una posicion absolute y a su padre relativa para poder ubicarlo al final de su div padre */}
      <div className="footer col-12">
      <i className="fa-brands fa-instagram iconoRedes"></i>
      <i className="fa-brands fa-whatsapp"></i>
      </div>
    </>

  )
}
