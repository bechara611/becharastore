import React from 'react'
import { Caparazon } from './UI/Components/Caparazon'
import { ContenedorPrincipal } from './UI/Components/ContenedorPrincipal'
import { Header } from './UI/Components/Header'

export const App = () => {
  return (
    <>
      <Caparazon>
        <Header></Header>
        <ContenedorPrincipal>

        </ContenedorPrincipal>

      </Caparazon>
    </>

  )
}
