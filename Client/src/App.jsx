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
import StoreContext from './hooks/storeContext'


function App() {
  const [Brand, setBrand] = useState([]);
  const [Size, setSize] = useState("");
  const [Sort, setSort] = useState("");
  return (
    
    <><StoreContext.Provider value={{Brand,setBrand,Size,setSize,Sort,setSort}}>
      <Router>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Auth/>}></Route>
          
          <Route path="/products/*" element={<Products/>}></Route>
          
          <Route path='/login' element={<Auth/>}>
          </Route>
          <Route path='/SingleProduct/:id' element={<SingleProduct />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
        </Routes>
       
      <Footer/>
      </Router>
      </StoreContext.Provider>
      {/**/}
      
      
    </>
  )
}

export default App
