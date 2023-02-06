import React from 'react'
import './Header.css'
import { MenuNavbar } from './MenuNavbar'
export const Header = () => {
  return (
    <>
    {/*El header ocupa el 30vh de la pagina, el primer div lo tiene, aca se incorpora el nav y el logo. */}
      <div className="header">
        <div className="col-12">
     
       
             <MenuNavbar></MenuNavbar>
             <div className='col-12'>
             <h1>HOLAAA</h1>
            
             </div>
        </div>

      </div>



    </>
  )
}
