import React from 'react'
import { Caparazon } from './UI/Components/Caparazon'
import { ContenedorPrincipal } from './UI/Components/ContenedorPrincipal'
import { Header } from './UI/Components/Header'
import {Footer} from './UI/Components/Footer'
export const App = () => {
  return (
    <>
      <Caparazon>
        <Header></Header>
        <ContenedorPrincipal>
      
   <Footer></Footer>
        </ContenedorPrincipal>
        

      </Caparazon>
    </>

  )
}
