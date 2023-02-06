import React from 'react'
import { Caparazon } from './UI/Components/Caparazon'
import { Header } from './UI/Components/Header'

export const App = () => {
  return (
    <>
    <Header></Header>
    <Caparazon>
    <div className="footer">SOY UN MAIN</div>
    <div className="footer">SOY UN FOOTER</div>
    </Caparazon>
    </>

  )
}
