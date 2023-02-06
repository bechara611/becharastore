import React from 'react'
import './ContenedorPrincipal.css'
export const ContenedorPrincipal = ({ children }) => {
  return (
    <div className='ContenedorPrincipal'>
    {/*Aca de hijos tendran las rutas para verse en el medio y el footer, este tiene un position relative para que su hijo footer pueda
  ubicarse en la parte de abajo */}
      {children}
    </div>
  )
}
