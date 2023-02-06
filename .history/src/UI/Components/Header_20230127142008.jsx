import React from 'react'
import './Header.css'
import { MenuNavbar } from './MenuNavbar'
import brand from './../../img/brand2.png'


export const Header = () => {
  return (
    <>
      {/*El header ocupa el 30vh de la pagina, el primer div lo tiene, aca se incorpora el nav y el logo. */}
      <div className="header">
        <div className="col-12">


          <MenuNavbar></MenuNavbar>
          <button onClick={(e)=>{
            const elemento= document.getElementById('#brand');
            elemento.classList.toggle('animate__flip');
          }}>dddd</button>
          <div className="row">
            <div className="col-12 filaLogoHeader">
              <img src={brand} className='brand animate__animated animate__flip ' id='brand' alt="brand" />

            </div>
          </div>

        </div>

      </div>



    </>
  )
}
