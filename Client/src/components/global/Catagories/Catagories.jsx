
import styled from "styled-components";
import './catagories.css'
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import Products from "../../Pages/products/Products";
import cata1 from '../../../assets/cata1.png'
import cata2 from '../../../assets/cata2.png'
import {  useTheme } from "@mui/material/styles";

const Container = styled.div`
  height: 30px;
 background-color: ${(props) => props.theme.palette.background.main};

  background-position: 50% 100%;
  background-size: cover;
  color: white;
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
  color: white;
  transition: all 0.1s ease;
  cursor: pointer;
  width: 150px;
  text-align: center;
  font-family: 'Josefin Sans';
  font-size: 13px;
  font-weight: 400;
  &:hover{
    border-bottom: 3px solid white;
    scale: calc(1.1);
    
  }
  ${mobile({ fontSize:"8px" })}
`;

const Catagories = () => {
  const theme = useTheme();

  return <Container theme={theme}>
    <Catagorie to="/products/NewArrivales" style={{color:theme.palette.primary.main}}>
        NEW ARRIVALES
    </Catagorie>
    <Catagorie to="/products/Figures" style={{color:theme.palette.primary.main}}>
        FIGURES
    </Catagorie>
    <Catagorie to="/products/All_Products" style={{color:theme.palette.primary.main}}>
        ALL
    </Catagorie>
    <Catagorie to="/products/Clothing" style={{color:theme.palette.primary.main}}>
        CLOTHING
    </Catagorie>
    
    <Catagorie to="/products/Homeware" style={{color:theme.palette.primary.main}}>
        HOMEWARE
    </Catagorie>
    
  </Container>;
};

export default Catagories;