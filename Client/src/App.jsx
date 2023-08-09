import { useState,useEffect } from 'react'
import { BrowserRouter as Router ,Route,Routes,Navigate ,useLocation} from 'react-router-dom'

import './App.css'

import Auth from './components/Pages/Auth/Auth'
import Navbar from './components/global/navbar/Navbar'
import WishList from './components/global/WishList/WishList'
import Footer from './components/global/Footer/Footer'
import Cart from './components/Pages/Cart/Cart'
import SingleProduct from './components/Pages/SIngleProduct/SingleProduct'
import Products from './components/Pages/products/Products'
import Home from './components/Pages/Home/Home'
import StoreContext from './hooks/storeContext'

import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Succ from './components/Pages/AfterPayment/Succ'
function App() {
  const [Brand, setBrand] = useState([]);
  const [Size, setSize] = useState("");
  const [Sort, setSort] = useState("");
  const user=useSelector((state) => state.user.currentUser);
  const { theme, toggleColorMode } = useMode();

  return (
    
    <>
    <ColorModeContext.Provider value={{ toggleColorMode }}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <StoreContext.Provider value={{Brand,setBrand,Size,setSize,Sort,setSort,user}}>
      <Router>
      <Navbar/>
      
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Auth/>}></Route>
          <Route path="/products/*" element={<Products/>}></Route>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Auth />}></Route>
          <Route path='/SingleProduct/:id' element={<SingleProduct />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path="/wishList" element={<WishList/>}></Route>
          <Route path="/success" element={<Succ/>}></Route>
          
        </Routes>
        <Footer/>
      </Router>
      
      </StoreContext.Provider>

      </ThemeProvider>
    </ColorModeContext.Provider>
      {/**/}
     
      
    </>
  )
}

export default App
