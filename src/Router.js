import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import Category from'./pages/Category/Category'
import Detail from'./pages/Category/Detail/Detail'
import Cart from'./pages/Cart/Cart'
import Login from './pages/Login/Login'
import Signup from'./pages/Signup/Signup'



const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Category" element={<Category/>} />
      <Route path="/Category/Detail" element={<Detail/>} />      
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
  
  )
}

export default Router