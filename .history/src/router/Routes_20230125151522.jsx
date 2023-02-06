import React from 'react'
import { Route } from 'react-router'

export const Router = () => {
  return (
    <Router>
    <Route path='/' element={<h1>Home</h1>}></Route>
    <Route path='*' element={<h1>Redireccion</h1>}></Route>
    </Router>
  )
}
