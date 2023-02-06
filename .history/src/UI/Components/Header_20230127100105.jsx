import React from 'react'
import './Header.css'
import { MenuNavbar } from './MenuNavbar'
import brand from './../../img/brand.png'
export const Header = () => {
  return (
    <>
      {/*El header ocupa el 30vh de la pagina, el primer div lo tiene, aca se incorpora el nav y el logo. */}
      <div className="header">
        <div className="col-12">


          <MenuNavbar></MenuNavbar>
          <div className="row">
            <div className="col-12 filaLogoHeader">
              <img src={brand} className='brand' alt="brand" />

            </div>
          </div>

        </div>

      </div>



    </>
  )
}
