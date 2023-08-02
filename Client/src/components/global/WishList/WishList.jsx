import styled from "styled-components";
import { mobile } from "../../responsive";
import './WishList.css'
import { useDispatch, useSelector } from "react-redux";
import { resetWishList,removeFromWishList } from "../../Redux/wishListReducer";
import { Add, Remove } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import {  useTheme } from "@mui/material/styles";

const Container = styled.div`
background-color: ${(props) => props.theme.palette.background.main};
height: 100vh;
`;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: black;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  
`;

const TopButton = styled.button`
  padding: 10px;
  color: black;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#121D31" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  color: #121D31;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  

`;

const Info = styled.div`
  flex: 3;
  
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  
`;

const Image = styled.img`
  width: 200px;
  
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

const ProductName = styled.span`
    color:black;
`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Btn=styled.button`
  width: 50%;
  padding: 10px;
  border: 1px solid #121D31;
  margin-top: 15px;
  cursor: pointer;
  color: #121D31;
  font-weight: 600;
  border-radius: 10px;
`
const WishList = () => { 
  const theme = useTheme();

    const wishList = useSelector((state) => state.wishList);
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const handleReset = () => {
      dispatch(resetWishList());
    };
    const navigate = useNavigate();
    const handleRemoveFromWishList=(product)=>{
        dispatch(removeFromWishList({ id: product.id }))
    }
  return (
    <Container theme={theme}>
      
      <Wrapper>
        <Title  style={{color:theme.palette.primary.main}}>YOUR BAG</Title>
        <Top>
          <TopButton  style={{color:theme.palette.background.main,backgroundColor:theme.palette.primary.main}} onClick={() => navigate(-1)}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText to="/cart" style={{color:theme.palette.primary.main}}>Shopping Bag({cart.quantity})</TopText>
            <TopText to="/wishList" style={{color:theme.palette.primary.main}}>Your Wishlist ({wishList.quantity})</TopText>
          </TopTexts>
          <TopButton  style={{color:theme.palette.background.main,backgroundColor:theme.palette.primary.main}} onClick={handleReset}>REST WISHLIST</TopButton>
        </Top>
        <Bottom>
          <Info>
            {wishList.products.map(product=>(
                <>
                <Product>
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b style={{color:theme.palette.primary.main}}>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b style={{color:theme.palette.primary.main}}>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color="black" />
                    <ProductSize>
                      <b style={{color:theme.palette.primary.main}}>Size:</b> {product.price}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                <ProductPrice className="totalAmount"><b style={{color:theme.palette.primary.main}}>Total Price :</b></ProductPrice>
                  <ProductPrice><b style={{color:theme.palette.primary.main}}>{product.price*product.quantity}</b></ProductPrice>
                  <Btn onClick={() => handleRemoveFromWishList(product)}>Remove</Btn>
                </PriceDetail>
              </Product>
              <Hr />
              </>
            ))}

            
          </Info>
          
        </Bottom>
      </Wrapper>
      
    </Container>
  );
};

export default WishList;