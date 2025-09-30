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
// import Sidebar from './components/Sidebar'
import CheckoutForm from './forms/CheckoutForm'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Manage from './pages/Manage'
import EditProductForm from './forms/EditProductForm'
import ManageProducts from './components/ManageProducts'
import ManageCategory from './components/ManageCategory'
import ProtectedRoute from './features/auth/ProtectedRoute'



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
    <Route path='/edit/:id' element={<EditProductForm />} />
    <Route path='/login' element={<Login />} />
    <Route path='/cart' element={<ShoppingCartCard />} />
    <Route path='/checkout' element={<CheckoutForm />} />
    <Route path='/manage' element={<Manage />} />
    <Route path='/sidebar' element={
      
       <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>
      }>
    <Route path='manage-product' element={<ManageProducts />} />
    <Route path='manage-category' element={<ManageCategory />} />
      </Route>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
