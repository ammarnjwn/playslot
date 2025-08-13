import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AuthLayout from './layouts/AuthLayout'

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>

      <Route element={<AuthLayout/>}>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
      </Route>
    </Routes>
  )
}

export default App
