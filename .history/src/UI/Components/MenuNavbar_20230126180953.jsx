import React from 'react'
import { NavLink } from 'react-router-dom';
import './MenuNavbar.css'
export const MenuNavbar = () => {
    return (
        <>
            {/**Aca va el navBar de la aplicacion que tendra el menu */}
            <div className="col-12 contenedor-nav">
                <nav className="navbar navbar-expand-md  menunav col-8 ">
                    <div className="col-4">

                        <p className="navbar-brand">Bechara</p>
                    </div>

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
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav col-12  contenedor-interno-nav">
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/'}>
                            Home</NavLink>
                            <NavLink className={ ({isActive}) => `nav-item nav-link   ${ isActive ? 'activeLink':'' }` } to={'/auth'}>Login</NavLink>
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/Register'}>Register</NavLink>
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/Products'}>Products</NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}


