import React from 'react'
import './ContenedorPrincipal.css'
export const ContenedorPrincipal = ({ children }) => {
  return (
    <div className='ContenedorPrincipal'>
      {children}
    </div>
  )
}
