import React from 'react'
import { Route,Router } from 'react-router-dom'

export const RouterApp = () => {
  return (
    <Router>
    <Route path='/' element={<h1>Home</h1>}></Route>
    <Route path='*' element={<h1>Redireccion</h1>}></Route>
    </Router>
  )
}
