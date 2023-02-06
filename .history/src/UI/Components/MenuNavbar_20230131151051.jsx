import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { onLogout } from '../../Auth/slice/authSlice';
import { Animacionlogo } from '../helper/AnimacionAlLogo';

import './MenuNavbar.css'

export const MenuNavbar = () => {
    const authEstado = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    return (
        <>
            {/**Aca va el navBar de la aplicacion que tendra el menu */}
            <div className="col-12 contenedor-nav">
                <nav className="navbar navbar-expand-md  menunav col-8 ">
                    
               
                  <NavLink to={'/'}> <i className="fa-solid fa-shop marca"></i></NavLink>     
                 
                  <NavLink className={ ({isActive}) => `nav-item nav-link ` } to={'/'} onClick={()=>{Animacionlogo()
                    dispatch(onLogout())
                   
                    }}> <i className="fa-solid fa-arrow-right-from-bracket marca"></i></NavLink>
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
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/'} onClick={()=>Animacionlogo()}>
                            Home</NavLink>
                           
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/Products'} onClick={()=>Animacionlogo()}>Products</NavLink>
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/admin'} onClick={()=>Animacionlogo()}>Admin</NavLink>
                            <NavLink className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'activeLink':'' }` } to={'/Register'} onClick={()=>Animacionlogo()}>Register</NavLink>
                            {
                                authEstado.status==='logueado' ? 
                                <NavLink className={ ({isActive}) => `nav-item nav-link ` } to={'/'} onClick={()=>{Animacionlogo()
                                dispatch(onLogout())
                               
                                }}>Logout</NavLink>
                                
                             :
                              <>
                              <NavLink className={ ({isActive}) => `nav-item nav-link   ${ isActive ? 'activeLink':'' }` } to={'/auth'} onClick={()=>Animacionlogo()}>Login</NavLink>
                              </>
                            }
                         
                           
                            </div>
                    </div>
                </nav>
            </div>
        </>
    )
}


