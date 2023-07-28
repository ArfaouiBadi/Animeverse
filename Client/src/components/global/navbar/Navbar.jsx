import { useDispatch, useSelector } from "react-redux";
import { PersonOutline, ShoppingBagOutlined, MenuOutlined, SearchOutlined } from "@mui/icons-material";
import { useNavigate,Link } from "react-router-dom";

import './navbar.css'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import styled from "styled-components";
import { mobile } from "../../responsive";
import { useState } from "react";


const Container = styled.div`
  height: 65px;
  background-color: #121D31;
  ${mobile({ height: "50px" ,width:"100vw"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px white solid;
  ${mobile({ padding: "1px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
  Input{
    width: 12vw;
  }
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: white;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  border-radius:10px ;
  display: flex;
  align-items: center;
  margin-left: 25px;
  
  ${mobile({width:"40px",justifyContent:"center"})}
  padding: 5px;
`;

const Input = styled.input`
margin-left: 10px;
  border: none;
  margin-right: 5px;
  background-color: #121D31;
  ${mobile({display: "none"})}
`;

const Center = styled.div`
  flex: 10;
  text-align: center;
  
`;

const Logo = styled.h1`
  font-weight: 700;
  font-family: 'Lobster';
  cursor: pointer;
  text-decoration: none;
  padding-bottom:10px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Cartmenu = styled(Link)`
  font-size: 14px;
  height: 52px;
  padding-top: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 700;
  margin-right:10px ;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  transition: 0.3s ease all;
  
`;
const MenuItem = styled(Link)`
  font-size: 14px;
  height: 53px;
  padding-top: 17px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 700;
  margin-right: 10px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  transition: 0.3s ease all;
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 5px white solid;
    transform: scale(1.1);
  }
  ${mobile({ display: "none"})}
`;


const Navbar = () => {

  const[cartList,setCartList]=useState(false)
  const showCartList=()=>{cartList?setCartList(false):setCartList(true)}
  const products = useSelector(state=>state.cart.products)
  console.log(products)
  return (
    <Container>
      
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
        <Logo><Link to="/"style={{fontWeight: 700,fontFamily:'Lobster',textDecoration: "none"}}>Animeverse.</Link></Logo>
        </Center>
        <Right>
          <MenuItem to="/register">REGISTER</MenuItem>
          <MenuItem to="/login">SIGN IN</MenuItem>
          <Cartmenu to={"/cart"}>
            <Badge badgeContent={4} color="secondary" overlap="rectangular">
              <ShoppingCartOutlined />
            </Badge>
          </Cartmenu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;