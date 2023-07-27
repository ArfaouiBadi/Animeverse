import { useState,useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes,useLocation} from 'react-router-dom'

import './App.css'

import Auth from './components/global/Auth/Auth'
import Navbar from './components/global/navbar/Navbar'

import Catagories from './components/global/Catagories/Catagories'
import Footer from './components/global/Footer/Footer'

import Home from './components/Home/Home'
import SingleProduct from './components/global/SIngleProduct/SingleProduct'






function App() {

  return (
    
    <div className='app'>
         
      
      <Router>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Auth/>}></Route>
          <Route path='/login' element={<Auth/>}></Route>
          <Route path='/SingleProduct' element={<SingleProduct />}></Route>
          
        </Routes>
        
      <Footer/>
      </Router>
      {/**/}
      
      
    </div>
  )
}

export default App
