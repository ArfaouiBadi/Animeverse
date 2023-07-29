import { useState,useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes,useLocation} from 'react-router-dom'

import './App.css'

import Auth from './components/Pages/Auth/Auth'
import Navbar from './components/global/navbar/Navbar'
import Footer from './components/global/Footer/Footer'
import Cart from './components/Pages/Cart/Cart'
import SingleProduct from './components/Pages/SIngleProduct/SingleProduct'
import Products from './components/Pages/products/Products'
import Home from './components/Pages/Home/Home'


function App() {

  return (
    
    <>
      <Router>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Auth/>}></Route>
        <Route path="/products/All_Products" element={<Products/>}></Route>
        <Route path="/products/Figures" element={<Products/>}></Route>
        <Route path="/products/Clothing" element={<Products/>}></Route>
        <Route path="/products/Homeware" element={<Products/>}></Route>
        <Route path="/products/NewArrivales" element={<Products/>}></Route>
        <Route path='/login' element={<Auth/>}>
        </Route>
        <Route path='/SingleProduct/:id' element={<SingleProduct />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        
      </Routes>
      
    <Footer/>
    </Router>
      
      
      
    </>
  )
}

export default App
