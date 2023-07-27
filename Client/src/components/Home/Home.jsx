import Catagories from '../global/Catagories/Catagories'
import Filter from '../global/Filter/Filter'
import Newsletter from '../global/Newsletter/Newsletter'
import Navbar from '../global/navbar/Navbar'
import Products from '../global/products/Products'
import './Home.css'

const Home = () => {
  return (
    <>
      <Catagories/>
      <Filter/>
      <Products/>
      <Newsletter/>
    </>
  )
}

export default Home
