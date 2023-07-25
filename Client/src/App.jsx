import { useState,useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes,useLocation} from 'react-router-dom'

import './App.css'

import Auth from './components/global/Auth/Auth'
import Navbar from './components/global/navbar/Navbar'
import { Home } from '@mui/icons-material';
import Catagories from './components/global/Catagories/Catagories'
import Footer from './components/global/Footer/Footer'
import Newsletter from './components/global/Newsletter/Newsletter'
import Products from './components/global/products/Products'
import Filter from './components/global/Filter/Filter'





function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Catagories/>
      <Filter/>
      <Products/>
      <Newsletter/>
      <Footer/>
      
      {/*
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
      <Auth/>*/}
      
      
    </div>
  )
}

export default App
