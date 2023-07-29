import styled from "styled-components";

import imgback from '../../../assets/prod.jpg'
import Product_card from "../product/Product_card";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Catagories from "../Catagories/Catagories";
import Filter from "../Filter/Filter";
import StoreContext from "../../../hooks/storeContext";
import axios from "axios";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    background-color: #121D31;
    /*background: url(${imgback}) no-repeat;*/
    background-position: 50% 100%;
    background-size: cover;
    justify-content: space-between;
    
    padding-top: 30px;
    padding-bottom: 30px;
    
`;

const Products = () => {
  const location=useLocation();
  const cata =location.pathname.split("/")[2]
  const [Brand, setBrand] = useState([]);
  const [Size, setSize] = useState('All');
  const [Sort, setSort] = useState('All');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        
        const res = await axios.get("http://localhost:3002/api/products");
        
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cata]);

  useEffect(() => {
    cata &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(Size+Brand).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cata,Size,Brand]);

  useEffect(() => {
    if (Sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [Sort]);
  return (
  
  <StoreContext.Provider value={{Brand,setBrand,Size,setSize,Sort,setSort}}>
    <Catagories/>
    <Filter />
    <Container>
      {products.map((item) => (
        
        <Product_card item={item} key={item.id} />
      ))}
    </Container>
    </StoreContext.Provider>
  );
};

export default Products;