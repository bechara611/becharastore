import React from 'react'
import { Caparazon } from './UI/Components/Caparazon'
import { ContenedorPrincipal } from './UI/Components/ContenedorPrincipal'
import { Header } from './UI/Components/Header'
import { Footer } from './UI/Components/Footer'
import { MainCuerpo } from './UI/Components/MainCuerpo'
export const App = () => {
  return (
    <>
      <Caparazon>
        <Header></Header>
        <ContenedorPrincipal>
          <MainCuerpo></MainCuerpo>

          <div className="col-12">
            <h1 style={{ marginBottom: '100px' }}>Hola</h1>
          </div>

          <Footer></Footer>
        </ContenedorPrincipal>


      </Caparazon>
    </>

  )
}
