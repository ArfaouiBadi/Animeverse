import styled from "styled-components";

import imgback from '../../../assets/prod.jpg'
import Product_card from "../../global/product/Product_card";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Catagories from "../../global/Catagories/Catagories";
import Filter from "../../global/Filter/Filter";
import StoreContext from "../../../hooks/storeContext";
import waves from "../../../assets/waves.png"
import axios from "axios";
import Newsletter from "../../global/Newsletter/Newsletter";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    
    background-position: 50% 100%;
    background-size: cover;
    justify-content: space-between;
    
    padding-top: 30px;
    padding-bottom: 30px;
    
`;

const Products = () => {
  const location=useLocation();
  const cata =location.pathname.split("/")[2]
  const {Brand,Sort,Size}=useContext(StoreContext)
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        
        const res = await axios.get(cata=="All_Products" 
          ?
          "http://localhost:3002/api/products"
          :
          `http://localhost:3002/api/products?category=${cata}`
          );
        
        setProducts(res.data);
        setFilteredProducts(res.data)
      } catch (err) {}
    };
    getProducts();
  }, [cata]);
  
  
  useEffect(() => {
    let tempProducts = [...products];
    if (Sort === "ASC") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }else {
      if(Sort === "DESC"){
        setFilteredProducts((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
      else{
        setFilteredProducts(tempProducts)
      }
    }
    
  }, [Sort,products]);
  
  
  return (
  <>
  
    <Catagories/>
    <Filter />
    <Container>
      {filteredProducts.map((item) => (
        <Product_card item={item} key={item._id} />
      ))}
    </Container>
    
    </>
  );
};

export default Products;