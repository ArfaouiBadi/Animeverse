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
import Home_admin from './components/Pages/src/pages/home/Home_admin'
import UserList_admin from './components/Pages/src/pages/UserList/UserList_admin'
import User_admin from './components/Pages/src/pages/user/User_admin'
import Sidebar from "./components/Pages/src/components/sidebar/Sidebar";
import Topbar from "./components/Pages/src/components/topbar/Topbar";
import NewUser_admin from './components/Pages/src/pages/NewUser/NewUser_admin'
import NewProduct_admin from './components/Pages/src/pages/NewProduct/NewProduct_admin'
import ProductList_admin from './components/Pages/src/pages/ProductList/ProductList_admin'
import Product_admin from './components/Pages/src/pages/Product/Product_admin'
import StoreContext from './hooks/storeContext'
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import Succ from './components/Pages/AfterPayment/Succ'
function App() {
  const [Brand, setBrand] = useState([]);
  const [Size, setSize] = useState("");
  const [Sort, setSort] = useState("");
  const [adminDashboard, setadminDashboard] = useState(false);
 
  const user=useSelector((state) => state.user.currentUser);
  const { theme, toggleColorMode } = useMode();
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  return (
    
    <>
    <ColorModeContext.Provider value={{ toggleColorMode }}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <StoreContext.Provider value={{Brand,setBrand,Size,setSize,Sort,setSort,user,adminDashboard,setadminDashboard}}>
      {!adminDashboard?(
        <Router>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Auth/>}></Route>
          <Route path="/products/*" element={<Products/>}></Route>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Auth />}></Route>
          <Route path='/SingleProduct/:id' element={<SingleProduct />}></Route>
          <Route path='/Cart' element={user ? <Cart /> : <Auth/>}></Route>
          <Route path="/wishList" element={<WishList/>}></Route>
          <Route path="/success" element={<Succ/>}></Route>
            
          </Routes>
          <Footer/>
      </Router>
      ):(!admin &&(
        
        <Router>
          
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/admin" element={<Home_admin/>} />
          <Route path="/admin/users" element={<UserList_admin />} />
          <Route path="/admin/user/:userId" element={<User_admin />} />
          <Route path="/admin/newUser" element={<NewUser_admin />} />
          <Route path="/admin/products" element={<ProductList_admin />} />
          <Route path="/admin/product/:productId" element={<Product_admin />} />
          <Route path="/admin/newproduct" element={<NewProduct_admin/>} />
        </Routes>
      </div>
    </Router>
      )
      )
        
      }
    
    
      </StoreContext.Provider>

      </ThemeProvider>
    </ColorModeContext.Provider>
      {/**/}
     
      
    </>
  )
}

export default App
