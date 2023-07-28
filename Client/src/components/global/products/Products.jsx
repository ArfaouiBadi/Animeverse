import styled from "styled-components";

import imgback from '../../../assets/prod.jpg'
import { produit } from "../../../data/data";
import Product_card from "../product/Product_card";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Catagories from "../Catagories/Catagories";
import Filter from "../Filter/Filter";
import StoreContext from "../../../hooks/storeContext";
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
  console.log(location.pathname.split("/")[2])

  const [data,setData]=useState(produit)
  console.log(data)
  return (
  
  <StoreContext.Provider value={{Number}}>
    <Catagories/>
    <Filter />
    <Container>
      
      {data.map((item) => (
        <Product_card item={item} key={item.id} />
      ))}
    </Container>
    </StoreContext.Provider>
  );
};

export default Products;