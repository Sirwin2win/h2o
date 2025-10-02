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
import { AuthProvider } from './AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import useAuthInit from './useAuthInit'
import RequireAuth from './RequireAuth'
import ResetEmailForm from './forms/ResetEmailForm'
import RegisterForm from './forms/RegisterForm'
import ResetPassword from './forms/ResetPassword'




function App() {
  useAuthInit();

  return (
    
    <BrowserRouter>
     <AuthProvider>
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
    <Route path='/register' element={<RegisterForm />} />
    <Route path='/cart' element={
      <RequireAuth>
      <ShoppingCartCard />
      </RequireAuth>
      } />
    <Route path='/checkout' element={<CheckoutForm />} />
    <Route path='/manage' element={<Manage />} />
    <Route path='/sidebar' element={
      
       <RequireAuth>
              <Sidebar />
            </RequireAuth>
      }>
    <Route path='manage-product' element={<ManageProducts />} />
    <Route path='manage-category' element={<ManageCategory />} />
      </Route>
      <Route path='reset-email' element={<ResetEmailForm />} />
      <Route path="/reset-password" element={<ResetPassword />} />
        {/* <Route
          path="/sidebar/*"
          element={
            <RequireAuth>
              <Sidebar />
            </RequireAuth>
          }
        /> */}
      </Route>
    </Routes>
      </AuthProvider>
    </BrowserRouter>
  
  )
}

export default App
