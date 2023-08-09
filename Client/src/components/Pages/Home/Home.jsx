
import Newsletter from '../../global/Newsletter/Newsletter'
import Contact from '../../global/Contact/Contact'
import Products from '../../Pages/products/Products'
import './Home.css'
import { useContext } from 'react'
import StoreContext from '../../../hooks/storeContext'
import About from '../../global/About_Us/About'

import Slider from '../../global/Slider/Slider'
import Catagories from '../../global/Catagories/Catagories'

const Home = () => {
  const {user}=useContext(StoreContext)
  return (
    <>
      
      <Catagories/>
      <Slider/>
      <About/>
      <Newsletter/>
      <Contact/>
      
    </>
  )
}

export default Home
