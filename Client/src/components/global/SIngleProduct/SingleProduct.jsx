import React, { useEffect, useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { produit } from "../../../data/data";
import './SingleProduct.css'
const Container = styled.div`
  background-color: #121D31;
  color: white;
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
  
`;

const Image = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  ${mobile({ maxHeight: "60vh" })}
`;

const ImgContainerCol = styled.div`
  height: 84vh;
  width: 7vw;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 10px;
  border:1px white solid ;
  ${mobile({ 
    flexDirection: "row",
    width: "92vw",
    height: "10vh",
    justifyContent:"center",
    gap:"0px",
    
    
    })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  max-width: 100%; /* Limit the width to 100% of the InfoContainer's width */
`;

const Desc = styled.p`
  margin: 20px 0px;
  max-width: 100vw; /* Limit the width to 100% of the InfoContainer's width */
  font-weight: 300;
`;

const Price = styled.span`
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
  width: 80%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  color:white;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  
  
  
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
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
  padding: 15px;
  border: 1px solid white;
  background-color: transparent;
  cursor: pointer;
  font-weight: 200;
  &:hover {
    background-color: #8080801a;
  }
`;
const SingleProduct = () => {
    const [otherView, setOtherView] = useState([]);
    useEffect(() => {
      setOtherView(
        produit[
          produit.findIndex(
            (product) =>
              product.image ===
              "https://i.ibb.co/0jckHyP/Naruto-Team-Liquid-x-Naruto-Kakashi-Vest-Male.jpg"
          )
        ].otherView
      );
    }, [otherView]);
  
    const [Amount, setAmount] = useState(0); // Set the initial amount to 0
  
    // Click event handlers
    const handleAdd = () => {
      setAmount((prevAmount) => prevAmount + 1); // Increment amount by 1
    };
  
    const handleDec = () => {
      if (Amount > 0) {
        setAmount((prevAmount) => prevAmount - 1); // Decrement amount by 1, but not below 0
      }
    };
  
return (
    <Container>
      <Wrapper>
        <ImgContainerCol>
        {
            otherView.map((item) => (
            <Image key={item} src={item} />
          ))}
        </ImgContainerCol>
        <ImgContainer>
          <Image src="https://i.ibb.co/0jckHyP/Naruto-Team-Liquid-x-Naruto-Kakashi-Vest-Male.jpg" />
        </ImgContainer>
        <InfoContainer>
        <Title>Naruto-Team-Liquid-x-Naruto-Kakashi-Vest-Male</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color : </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size :</FilterTitle>
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
          <Remove onClick={handleDec}/>
              <div className="amount">{Amount}</div>
              <Add onClick={handleAdd}/>
            </AmountContainer>

          <AddContainer>
            <Button >ADD TO CART</Button>
          </AddContainer>
          <AddContainer>
          <Button >SAVE TO WHISHLIST</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;