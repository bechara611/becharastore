import React from 'react'
import './Caparazon.css'
export const Caparazon = ({ children }) => {
    return (
        <>

            <div className='container-fluid caparazonPrincipal bg-dark'>
               
                {children}

            </div>
        </>
    )
}
