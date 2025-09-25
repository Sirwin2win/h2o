// import './App.css'
import Sidebar from './components/Sidebar'
import Cart from './components/Cart'
import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import ProductDetail from './components/ProductDetail'
import Login from './pages/Login'
import DetailPage from './components/DetailPage'
import ShoppingCartCard from './components/ShoppingCartCard'
import CheckoutForm from './forms/CheckoutForm'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/product' element={<Product />} />
    {/* <Route path='/product/:id' element={<ProductDetail />} /> */}
    <Route path='/product/:id' element={<DetailPage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/cart' element={<ShoppingCartCard />} />
    <Route path='/checkout' element={<CheckoutForm />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
