import React from 'react'
import { RouterApp } from '../../router/Routes'
import './MainCuerpo.css'

export const MainCuerpo = () => {
  
  return (
    <>
    {/*Aca se guardan las rutas como tal de la aplicacion y es llamado adentro de contenedorPrincipal */}
    <RouterApp></RouterApp>
    </>
    )
}
