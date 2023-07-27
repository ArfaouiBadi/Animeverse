import styled from "styled-components";

import imgback from '../../../assets/prod.jpg'
import { produit } from "../../../data/data";
import Product_card from "../product/Product_card";

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
  return (
    <Container>
      {produit.map((item) => (
        <Product_card item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;