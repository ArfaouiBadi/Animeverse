import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './navbar.css'
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import cata1 from '../../../assets/cata1.png'
import styled from "styled-components";
import { mobile } from "../../responsive";
import { useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Container = styled.div`
  height: 65px;
  background-color: #121D31;
  background: url(${cata1});
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
  background-color: transparent;
  ${mobile({display: "none"})}
`;

const Center = styled.div`
  flex: 3;
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
const Left_icons = styled(Link)`
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
const Navbar = () => {
  const cart=useSelector(state=>state.cart)
  const wishList=useSelector(state=>state.wishList)
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
          <Left_icons to={"/login"}>
          <AccountCircleOutlinedIcon/>
          
          </Left_icons>
          <Left_icons to={"/wishList"}>
          <Badge badgeContent={wishList.quantity} color="secondary" overlap="rectangular">
          <FavoriteBorderOutlinedIcon/>
          </Badge>
          </Left_icons>
          
          <Left_icons to={"/cart"}>
            <Badge badgeContent={cart.quantity} color="secondary" overlap="rectangular">
              <ShoppingCartOutlined />
            </Badge>
          </Left_icons>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;