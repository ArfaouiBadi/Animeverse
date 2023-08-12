import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountMenu from '../../global/AccountMenu/AccountMenu';
import './navbar.css'
import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import cata1 from '../../../assets/cata1.png'
import styled from "styled-components";
import { mobile } from "../../responsive";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import {Button, IconButton ,useTheme} from '@mui/material';
import { ColorModeContext } from "../../../theme";
import   { useContext, useEffect } from "react";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StoreContext from "../../../hooks/storeContext";

const Container = styled.div`
  height: 65px;
  width: 100vw;
  background-color: #121D31;
  background-repeat: no-repeat;
  background-size:cover;
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
  color:white;
  margin-left: 25px;
  font-weight: 700;
  margin-right:10px ;
  ${mobile({ fontSize: "12px", scale:'calc(0.6)',marginLeft: "0px",})}
  transition: 0.3s ease all;
  
`;

const Navbar = () => {
  const cart=useSelector(state=>state.cart)
  const wishList=useSelector(state=>state.wishList)
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme(); 
  const user=useSelector((state) => state.user.currentUser);
  const {adminDashboard,setadminDashboard}=useContext(StoreContext)
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  const handleToggleClick = () => {
    setadminDashboard(!adminDashboard)
  };
  return (
    <Container>
      
      <Wrapper>
        <Left>
          
          <div>
      {theme.palette.mode === "light" ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlined  sx={{fill:"#fff"}}/>
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined  sx={{fill:"#fff"}}/>
        </IconButton>
      )}
    </div>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
        <Logo><Link to="/"style={{fontWeight: 700,fontFamily:'Lobster',textDecoration: "none",color:'white'}}>Animeverse.</Link></Logo>
        </Center>
        <Right>
         
        {user && (
         <AccountMenu/>
        )}
        {!user && (
         <Left_icons to={"/login"}>
         <AccountCircleOutlinedIcon/>
         </Left_icons>
        )}
        
        {admin && (
         <Link to={"/admin"} style={{marginLeft:"10px",}}>
         <Button onClick={handleToggleClick} ><AdminPanelSettingsIcon  style={{fill:"white"}}/></Button>
         </Link>
        )}
         
          <Left_icons to={"/wishList"} >
          <Badge badgeContent={wishList.quantity} color="error" overlap="rectangular">
          <FavoriteBorderOutlinedIcon style={{fill:'white'}}/>
          </Badge>
          </Left_icons>
          
          <Left_icons to={"/cart"}>
            <Badge badgeContent={cart.quantity} color="error" overlap="rectangular">
              <ShoppingCartOutlined style={{fill:'white'}}/>
            </Badge>
          </Left_icons>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;