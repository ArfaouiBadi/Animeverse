
import Newsletter from '../../global/Newsletter/Newsletter'
import Contact from '../../global/Contact/Contact'
import Products from '../../Pages/products/Products'
import './Home.css'
import { useContext } from 'react'
import StoreContext from '../../../hooks/storeContext'

const Home = () => {
  const {user}=useContext(StoreContext)
  console.log(user)
  return (
    <>
      <Products/>
      <Newsletter/>
      <Contact></Contact>
    </>
  )
}

export default Home
