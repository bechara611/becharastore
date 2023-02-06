import React from 'react'
import './Header.css'
import { MenuNavbar, NavBar3 } from './MenuNavbar'
export const Header = () => {
  return (
    <>
    {/*El header ocupa el 30vh de la pagina, el primer div lo tiene, aca se incorpora el nav y el logo. */}
      <div className="header">
        <div className="col-12">
        <NavBar3></NavBar3>
          <h4>Soy un header</h4>
        </div>

      </div>



    </>
  )
}
