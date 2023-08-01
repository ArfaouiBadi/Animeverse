import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";

  import { addToCart } from "../../Redux/cartReducer";
  import { addToWishList } from "../../Redux/wishListReducer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './Product_cart.css'
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(42, 67, 118, 0.5);
    z-index: 6;
    display: flex;
    overflow:hidden;

    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    position: absolute;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1 0 21%;
    margin: 5px;
    width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    border-radius: 5px;
    &:hover ${Info}{
      opacity: 1;
      
    }
  `;
  const Image = styled.img`
    height: 80%;
    z-index: 2;
  `;
  const InfoText=styled.div`
  
  opacity: 0;
  width: 200px;
  height: 100%;
  text-align: center;
  z-index: 4;
  display: flex;
  overflow:hidden;
  padding-top: 50%;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  position: absolute;
  scale: calc(0.5);
  transition: 0.5s all ease-out ;
  &:hover  {
    opacity: 1;
    padding-top: 5%;
    scale: calc(1);
    
 
  }

  `
  const Icon = styled.div`
  aspect-ratio: 1/1;
  width: 40px;
  height: 40px;
  z-index: 7;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #122447;;
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
          <div className="Search">
            <Link to={{pathname:`/SingleProduct/${item._id}`}} className="Search"><SearchOutlined /></Link>
          </div>
          <Icon onClick={handleClickWishList}>
            <FavoriteBorderOutlined />
          </Icon>
          <InfoText><div>{item.title}</div><div style={{padding:"10px",fontSize:"40px",}}>{item.price}$</div></InfoText>
        </Info>
        
        
        
      </Container>
      
    );
  };
  
  export default Product_card;