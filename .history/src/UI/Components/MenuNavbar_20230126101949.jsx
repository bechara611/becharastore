import React from 'react'
import { NavLink } from 'react-router-dom';
import './MenuNavbar.css'
export const MenuNavbar = () => {
    return (
        <>
            {/**Aca va el navBar de la aplicacion que tendra el menu */}

            <nav className="navbar navbar-expand-lg bg-dark navbar-dark menunav  sticky-top">
            <div className="col-6">
            
            <h4 className="navbar-brand">Store</h4>
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
                    <div className="navbar-nav col-12 fondito contenedor-interno-nav">
                        <NavLink className="nav-item nav-link">Features</NavLink>
                        <NavLink className="nav-item nav-link">Pricing</NavLink>
                        <NavLink className="nav-item nav-link disabled">Disabled</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

