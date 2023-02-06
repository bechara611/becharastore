import React from 'react'
import { NavLink } from 'react-router-dom';

export const MenuNavbar = () => {
    return (
        <>
            {/**Aca va el navBar de la aplicacion que tendra el menu */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
              
                <button 
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Mostrar / Ocultar Menu"
           >
           <span className="navbar-toggler-icon"></span>
           </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#">Features</a>
                        <a className="nav-item nav-link" href="#">Pricing</a>
                        <a className="nav-item nav-link disabled" href="#">Disabled</a>
                    </div>
                </div>
            </nav>
        </>
    )
}



export const NavBar3 = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
     
            <a href="#" className="navbar-brand">Companys</a>
        
            <button 
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menu"
                aria-controls="menu"
                aria-expanded="false"
                aria-label="Mostrar / Ocultar Menu"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/marvel"
            >
                Marvel
            </NavLink>
            <NavLink 
            className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
            to="/dc"
        >
            DC
        </NavLink>
                  
                </ul>
                <div className=" p-2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                    <span className="nav-item nav-link text-primary">
                        Dany
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        
                    >
                        Logout
                    </button>
                </ul>
            </div>
            </div>
       
    </nav>
      );
}
