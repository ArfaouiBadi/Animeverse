import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import backimg from '../../../assets/logo1.png'
  import { addToCart } from "../../Redux/cartReducer";
  import { addToWishList } from "../../Redux/wishListReducer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
    background-color: transparent;
    position: relative;
    border-radius: 5px;
    
  
    &:hover ${Info}{
      opacity: 1;
      
    }
  `;
  
  const Image = styled.img`
    height: 95%;
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
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const handleClickCart = () => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };
  const handleClickWishList = () => {
    dispatch(addToWishList({ ...item, quantity: 1 }));
  };
    
    return (
      <Container>
        <Image src={item.image} />
        <Info >
          <Icon onClick={handleClickCart}>
            <ShoppingCartOutlined/>
          </Icon>
          <Icon>
            <Link to={{pathname:`/SingleProduct/${item._id}`}} ><SearchOutlined /></Link>
          </Icon>
          <Icon onClick={handleClickWishList}>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
    );
  };
  
  export default Product_card;