import styled from "styled-components";
import Product_card from "../../global/product/Product_card";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Catagories from "../../global/Catagories/Catagories";
import Filter from "../../global/Filter/Filter";
import Footer from "../../global/Footer/Footer";
import StoreContext from "../../../hooks/storeContext";
import axios from "axios";
import {  useTheme } from "@mui/material/styles";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    background-color:  ${(props) => props.theme.palette.background.main};
    
    background-position: 50% 100%;
    background-size: cover;
    justify-content: space-between;
    height: 100%;
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
          "https://animeverse-one.vercel.app/api/products"
          :
          `https://animeverse-one.vercel.app/api/products?category=${cata}`
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


  const BrandName = (series) => {
    return Brand.includes(series) ? series : null;
  };

  const filterProductByBrand = () => {
    let tempProducts = [...products];
    if (Brand.length > 0) {
      tempProducts = tempProducts.filter(product =>
        Brand.includes(product.series)
      );
    }
    setFilteredProducts(tempProducts);
  };
  
  useEffect(filterProductByBrand, [Brand, products]);
  
  const theme = useTheme();
  return (
  <>
  
    <Catagories/>
    <Filter />
    <Container  theme={theme} style={{ flex: '1 1 auto', overflowY: 'auto',color:theme.palette.primary.main,backgroundColor:theme.palette.background.main}}>
      {filteredProducts.map((item) => (
        <Product_card item={item} key={item._id}/>
      ))}
    </Container>
    
    </>
  );
};

export default Products;