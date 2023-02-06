import React from 'react'
import { NavLink } from 'react-router-dom';
import './MenuNavbar.css'
import brand from './../../img/brand.png'
export const MenuNavbar = () => {
    return (
        <>
            {/**Aca va el navBar de la aplicacion que tendra el menu */}
            <div className="col-12 contenedor-nav">
                <nav className="navbar navbar-expand-md  menunav col-8 ">
                    
                <i className="fa-solid fa-shop"></i>
                       
                 

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Show / Hide Menu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mt-3" id="navbarNavAltMarkup">
                        <div className="navbar-nav col-12  contenedor-interno-nav">
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/'}>
                            Home</NavLink>
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/Register'}>Register</NavLink>
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/Products'}>Products</NavLink>
                            <NavLink className={ ({isActive}) => `nav-item nav-link   ${ isActive ? 'activeLink':'' }` } to={'/auth'}>Login</NavLink>
                            </div>
                    </div>
                </nav>
            </div>
        </>
    )
}


