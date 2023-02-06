import React from 'react'
import { Route,Router, Routes } from 'react-router-dom'

export const RouterApp = () => {
  return (
    <Routes>
    <Route path='/' element={<h1>Home</h1>}></Route>
    <Route path='/auth' element={<h1>Redireccion al Login</h1>}></Route>
    </Routes>
  )
}
