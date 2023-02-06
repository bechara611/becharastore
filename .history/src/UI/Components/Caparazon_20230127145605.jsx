import React from 'react'
import './Caparazon.css'
export const Caparazon = ({ children }) => {
    return (
        <>
{/*Caparazon princiapal donde el mismo tiene un flex en colum, adentro tiene sus hijos que son un div que 
ocupe el 70vh donde eesta todo lo demas y el 30vh primero es del header */}
            <div className='caparazonPrincipal bg-light'>
               
                {children}

            </div>
        </>
    )
}
