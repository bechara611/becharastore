import React from 'react'
import { Caparazon } from './UI/Components/Caparazon'
import { ContenedorPrincipal } from './UI/Components/ContenedorPrincipal'
import { Header } from './UI/Components/Header'
import { Footer } from './UI/Components/Footer'
import { MainCuerpo } from './UI/Components/MainCuerpo'
export const App = () => {
  return (
    <>
      {/*Primero el caparazon de la pagibna, que es un div que tiene un 100vh de altura, el cual en el obtiene a sus children:
    esto children son el Header ocupando el 30vh y el Contenedor Principal ocupando el 70vh restante.
  */}
      <Caparazon>
        <Header></Header>
        <ContenedorPrincipal> {/*El contenedor principal a su vez lleva sus hijos dos elementos, el footer que le pusimos absolute para ubicarlo de ultimo y el MainCuerpo que tienes las rutas */}
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
