import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive";
import './Cart.css'
import { useDispatch, useSelector } from "react-redux";
import { resetCart,removeFromCart } from "../../Redux/cartReducer";
import { Link, useNavigate } from "react-router-dom";
import {  useTheme } from "@mui/material/styles";

const Container = styled.div`
  transition: 0.3 all ease;
  background-color: ${(props) => props.theme.palette.background.main};
  height: 100%;
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
  border: 1px #121D31 solid;
  border-radius: 10px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#121D31" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
  
`;
const ProductColor=styled.div``

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
  margin-bottom: 20px;

  ${mobile({ flexDirection: "column" })}
  
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  
`;

const Image = styled.img`
  width: 200px;
  border: 1px solid #eeeeee11;
  border-radius: 10px;
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


const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  margin-right: 10px;
  margin: 10px;
  font-family: 'Josefin Sans';

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  color:black;
  ${mobile({ marginBottom: "20px" })}
  
`;

const Hr = styled.hr`
  background-color: #eee;
  
  height: 1px;
  margin: 10px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
  
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  color:black;
  
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  `;

const SummaryItemPrice = styled.span`
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px #121D31 solid;
  border-radius: 10px;
  background-color: #121D31;
  color: white;
  font-weight: 600;
  margin-top: 20px;
  cursor:pointer;
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
const Cart = () => { 
  const navigate = useNavigate();
  const cart=useSelector(state=>state.cart)
  const wishList=useSelector(state=>state.wishList)
  const dispatch=useDispatch()
  const handleReset = () => {
    dispatch(resetCart({}));
  };
  const handleRemove = (product) => {
    dispatch(removeFromCart({ id: product.id }));
  };
  const theme = useTheme();
  const check = async (e) => {
    e.preventDefault();
    fetch("https://animeverse-backend.onrender.com/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    }) 
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json((json) => Promise.reject(json));
        }
      })
      .then(({ url }) => {
        window.location = url;

      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Container theme={theme}>
      
      <Wrapper>
        <Title style={{color:theme.palette.primary.main}}>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => navigate(-1)} style={{color:theme.palette.background.main,backgroundColor:theme.palette.primary.main}}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText style={{color:theme.palette.primary.main}} to="/cart">Shopping Bag({cart.quantity})</TopText>
            <TopText style={{color:theme.palette.primary.main}} to="/wishList">Your Wishlist ({wishList.quantity})</TopText>
          </TopTexts>
          <TopButton style={{color:theme.palette.background.main,backgroundColor:theme.palette.primary.main}} onClick={handleReset}>REST SHOPPING CART</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product=>(
                <div key={product._id}>
                <Product >
                <ProductDetail>
                  <Image src={product.image} />
                  <Details>
                    <ProductName style={{color:theme.palette.primary.main}}> 
                      <b style={{color:theme.palette.primary.main}}>Product: {product.title}</b> 
                    </ProductName>
                    <ProductId style={{color:theme.palette.primary.main}}>
                    
                      <b style={{color:theme.palette.primary.main}}>ID:</b> {product._id}
                    </ProductId >
                    <ProductSize style={{color:theme.palette.primary.main}}>
                      <b style={{color:theme.palette.primary.main}}>Quantity:</b> {product.quantity}
                    </ProductSize>
                    <ProductSize style={{color:theme.palette.primary.main}}>
                      <b style={{color:theme.palette.primary.main}}>Price:</b> {product.price}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                
                <PriceDetail>
                <ProductPrice className="totalAmount"><b style={{color:theme.palette.primary.main}}>Total Price :</b></ProductPrice>
                  <ProductPrice><b style={{color:theme.palette.primary.main}}>{product.price*product.quantity}</b></ProductPrice>
                  <Btn onClick={() => handleRemove(product)}>Remove</Btn>
                </PriceDetail>
                
              </Product>
              <Hr/>
              </div>
            ))}

          
          </Info>
          <Summary>
            <SummaryTitle style={{color:theme.palette.primary.main}}>ORDER SUMMARY</SummaryTitle>
            <SummaryItem >
              <SummaryItemText style={{color:theme.palette.primary.main}}>Subtotal</SummaryItemText>
              <SummaryItemPrice style={{color:theme.palette.primary.main}}>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText style={{color:theme.palette.primary.main}}>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice style={{color:theme.palette.primary.main}}>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem >
              <SummaryItemText style={{color:theme.palette.primary.main}}>Shipping Discount</SummaryItemText>
              <SummaryItemPrice style={{color:theme.palette.primary.main}}>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText style={{color:theme.palette.primary.main}}>Total</SummaryItemText>
              <SummaryItemPrice style={{color:theme.palette.primary.main}}>{cart.total}</SummaryItemPrice>
              </SummaryItem>
              <Button onClick={check} style={{color:theme.palette.background.main,backgroundColor:theme.palette.primary.main}}> CHECKOUT NOW</Button>
            
          </Summary>
        </Bottom>
      </Wrapper>
      
    </Container>
  );
};

export default Cart;