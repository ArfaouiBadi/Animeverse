import { useState,useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes,useLocation} from 'react-router-dom'

import './App.css'

import Auth from './components/global/Auth/Auth'
import Navbar from './components/global/navbar/Navbar'

import Catagories from './components/global/Catagories/Catagories'
import Footer from './components/global/Footer/Footer'

import Home from './components/Home/Home'
import SingleProduct from './components/global/SIngleProduct/SingleProduct'
import Cart from './components/global/Cart/Cart'
import Products from './components/global/products/Products'
import Filter from './components/global/Filter/Filter'






function App() {

  return (
    
    <div className='app'>
         
      
      <Router>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Auth/>}></Route>
          <Route path="/products/Figures" element={<Products/>}></Route>
          <Route path="/products/Clothing" element={<Products/>}></Route>
          <Route path='/login' element={<Auth/>}>
          </Route>
          <Route path='/SingleProduct/:id' element={<SingleProduct />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          
        </Routes>
        
      <Footer/>
      </Router>
      {/**/}
      
      
    </div>
  )
}

export default App
