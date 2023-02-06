import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../Auth/components/Login'
import { Register } from '../Auth/components/Register'
import { Home } from '../UI/Components/Home'

/*Este componente es nuestro router, que segun la URL donde estemos mostrada:
1) Una pagina Home
2) Pagina de registro
3) Pagina de login
4) Pagina de Productos
*/

export const RouterApp = () => {
  return (
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/auth' element={<Login></Login>}></Route>
    <Route path='/Register' element={<Register></Register>}></Route>
    <Route path='/Products' element={<h1>Productos</h1>}></Route>
    <Route path='/admin' element={<h1>Admin</h1>}></Route>
    <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>
    </Routes>
  )
}
