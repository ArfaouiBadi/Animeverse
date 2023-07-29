
import styled from "styled-components";
import './catagories.css'
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import Products from "../../Pages/products/Products";
const Container = styled.div`
  height: 30px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
 
  
`;
const Catagorie = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  height: 100%;
  padding-top: 10px;
  color: black;
  transition: all 0.1s ease;
  cursor: pointer;
  width: 150px;
  text-align: center;
  font-family: 'Josefin Sans';
  font-size: 13px;
  font-weight: 400;
  &:hover{
    border-bottom: 3px solid #121D31;
    scale: calc(1.1);
    
  }
  ${mobile({ fontSize:"8px" })}
`;

const Catagories = () => {
  return <Container>
    <Catagorie to="/products/NewArrivales">
        NEW ARRIVALES
    </Catagorie>
    <Catagorie to="/products/Figures">
        FIGURES
    </Catagorie>
    <Catagorie to="/products/All_Products">
        ALL
    </Catagorie>
    <Catagorie to="/products/Clothing">
        CLOTHING
    </Catagorie>
    
    <Catagorie to="/products/Homeware">
        HOMEWARE
    </Catagorie>
    
  </Container>;
};

export default Catagories;