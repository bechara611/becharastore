import React from 'react'
import './Caparazon.css'
export const Caparazon = ({ children }) => {
    return (
        <>

            <div className='caparazonPrincipal bg-dark'>
               
                {children}

            </div>
        </>
    )
}
