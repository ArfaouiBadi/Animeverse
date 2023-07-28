import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import backimg from '../../../assets/logo1.png'
import { Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(42, 67, 118, 0.3);;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    width: 280px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    border-radius: 5px;
    
  
    &:hover ${Info}{
      opacity: 1;
      
    }
  `;
  
  const Image = styled.img`
    height: 90%;
    z-index: 2;
   
  `;
  
  const Icon = styled.div`
   aspect-ratio: 1/1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: rgba(42, 67, 118, 1);;
      transform: scale(1.1);
    }
  `;
  
  const Product_card = ({ item }) => {
    
    return (
      <Container>
        
        <Image src={item.image} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <Link to="/SingleProduct"><SearchOutlined /></Link>
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product_card;