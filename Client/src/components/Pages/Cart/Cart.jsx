import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import './cart.css'
import { useDispatch, useSelector } from "react-redux";
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { addToCart,resetCart,removeFromCart } from "../../Redux/cartReducer";
import { Link, useNavigate } from "react-router-dom";
const Container = styled.div`
  transition: 0.3 all ease;
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
  border: 1px #eee solid;
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

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #121D31;
  color: white;
  font-weight: 600;
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
  return (
    <Container>
      
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => navigate(-1)}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText to="/cart">Shopping Bag({cart.quantity})</TopText>
            <TopText to="/wishList">Your Wishlist ({wishList.quantity})</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={handleReset}>REST SHOPPING CART</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product)=>(
                <>
                <Product key={product._id}>
                <ProductDetail >
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId >
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductSize>
                      <b>Quantity:</b> {product.quantity}
                    </ProductSize>
                    <ProductSize>
                      <b>Price:</b> {product.price}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                
                <PriceDetail>
                <ProductPrice className="totalAmount"><b>Total Price :</b></ProductPrice>
                  <ProductPrice><b>{product.price*product.quantity}</b></ProductPrice>
                  <Btn onClick={() => handleRemove(product)}>Remove</Btn>
                </PriceDetail>
              </Product>
              <Hr />
              </>
            ))}

            
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      
    </Container>
  );
};

export default Cart;