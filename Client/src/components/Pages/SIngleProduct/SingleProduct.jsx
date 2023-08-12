import React, { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive";
import './SingleProduct.css'
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../../requestMethods";
import { addToCart } from "../../Redux/cartReducer";
import { addToWishList } from "../../Redux/wishListReducer";
import {  useTheme } from "@mui/material/styles";

const Container = styled.div`
  background: ${(props) => props.theme.palette.background.main} ;
  background-size:cover;
  color: white;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
  color: white;
  
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 84vh;
  ${mobile({ justifyContent:"start"})}
`;

const Image = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 5px solid white;
  border-radius: 20px;
  background-color: #eee;
  cursor: pointer
  ;
  ${mobile({ maxHeight: "60vh" })}
`;
const ImageCol = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 5px solid white;
  border-radius: 10px;
  background-color: #eee;
  cursor: pointer
  ;
  ${mobile({ maxHeight: "60vh" })}
`;

const ImgContainerCol = styled.div`
  height: 84vh;
  width: 7vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 10px;
  
  ${mobile({ 
    flexDirection: "row",
    width: "10vw",
    margin:"Auto",
    marginBottom:"10px",
    height: "10vh",
    justifyContent:"center",
    gap:"10px",
    
    
    })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
  ${mobile({ padding: "10px"})}
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  max-width: 100%; /* Limit the width to 100% of the InfoContainer's width */
  ${mobile({ fontSize: "30px"})}
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 20px;
  max-width: 100vw; /* Limit the width to 100% of the InfoContainer's width */
  font-weight: 500;
  
`;

const Price = styled.div`
  font-weight: 500;
  font-size: 50px;
  color: white;
  
  max-width: 100%; /* Limit the width to 100% of the InfoContainer's width */
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterContainer = styled.div`
  width: 100%;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  color:white;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;

  
  
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  color:white;
  
`;



const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
  color:white;
  background-color: #121D31;
`;

const FilterSizeOption = styled.option`
  cursor: pointer;
  border: none;
  
`;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  ${mobile({ width: "100%" })}
  
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin:auto;
  justify-content: center;
  
`;

const Button = styled.button`
  width: 180px;
  border-radius: 10px;
  padding: 15px;
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #8080801a;
  }
`;


const SingleProduct = () => {
    const theme = useTheme();
    const location=useLocation()
    const id =location.pathname.split("/")[2]
    const [product,setProduct]=useState([])

    
    useEffect(()=>{
      const getProduct=async ()=>{
        try{
          const res=await publicRequest.get("/api/products/"+id)
          
          setProduct(res.data)
          
        }catch(err){
          console.log(err);
        }
        
      }
      getProduct();
    },[id])
    const [Amount, setAmount] = useState(1); // Set the initial amount to 0
    // Click event handlers
    const handleAdd = () => {
      setAmount((prevAmount) => prevAmount + 1); // Increment amount by 1
    };
    const handleDec = () => {
      if (Amount > 0) {
        setAmount((prevAmount) => prevAmount - 1); // Decrement amount by 1, but not below 0
      }
    };
    const dispatch=useDispatch()
    const handleClickCart=()=>{
    dispatch(addToCart({ ...product, quantity:Amount}))

  }
  const handleClickWishList=()=>{
    dispatch(addToWishList({ ...product, quantity:Amount}))

  }
  const [imageDisplayed,setImageDisplayed]=useState("")
  useEffect(()=>{
    setImageDisplayed(product.image)
  },[product])
  const HandleImageSwitch = (e)=>{
    const x=imageDisplayed
    setImageDisplayed(e.target.src)
    e.target.src=x
  }


return (
    <Container theme={theme}>
      <Wrapper>
        <ImgContainerCol>
        
        {
            product.otherView?.map((view) => (
            <ImageCol key={view} src={view} onClick={HandleImageSwitch}/>
          ))}
          
        </ImgContainerCol>
        <ImgContainer>
          <Image src={imageDisplayed}/>
        </ImgContainer>
        <InfoContainer >
        <Title  style={{color:theme.palette.primary.main}}>{product.title}</Title>
          <Desc  style={{color:theme.palette.primary.main}} >
          {product.description}
          </Desc>
          <Price  style={{color:theme.palette.primary.main}}>{product.price} $</Price>
          <FilterContainer>
            <Filter >
              <FilterTitle  style={{color:theme.palette.primary.main}}>Color : </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle  style={{color:theme.palette.primary.main}}>Size :</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
              
            </Filter>
          </FilterContainer>
          <AmountContainer>
          <Remove onClick={handleDec} style={{ fill: theme.palette.primary.main}}/>
              <div className="amount"  style={{color:theme.palette.primary.main,borderColor:theme.palette.primary.main}}>{Amount}</div>
              <Add onClick={handleAdd} style={{ fill: theme.palette.primary.main}}/>
            </AmountContainer>

          <AddContainer >
            <Button onClick={handleClickCart}  style={{color:theme.palette.primary.main,borderColor:theme.palette.primary.main}}>ADD TO CART</Button>
          </AddContainer>
          <AddContainer>
          <Button onClick={handleClickWishList}  style={{color:theme.palette.primary.main,borderColor:theme.palette.primary.main}}>SAVE TO WHISHLIST</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
