
import styled from "styled-components";
import './catagories.css'
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";
import Filter from "../Filter/Filter";
import Products from "../../Pages/products/Products";
import cata1 from '../../../assets/cata1.png'
import cata2 from '../../../assets/cata2.png'
import {  useTheme } from "@mui/material/styles";
import {
  Box,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  SportsEsportsOutlined,
} from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import WatchIcon from '@mui/icons-material/Watch';

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
  
  ${mobile({ fontSize:"8px" })}
`;
const Catagorie_Home = styled(Link)`
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <Container theme={theme}>
    <div>
     <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            height:30,
            backgroundColor: theme.palette.background.main,
            scale:"calc(0.9)",
            
            color: theme.palette.primary.main,

          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              textTransform: "capitalize",
              mx: 1,
              fontFamily:'Josefin Sans',             

            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />

          <KeyboardArrowRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              backgroundColor: theme.palette.background.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <FiberNewIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText ><Catagorie to="/products/NewArrivales" style={{color:theme.palette.primary.main}}>
        NEW ARRIVALES
    </Catagorie></ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ShoppingBasketIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText> <Catagorie to="/products/Figures" style={{color:theme.palette.primary.main}}>
        FIGURES
      </Catagorie></ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LocalMallIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText> <Catagorie to="/products/Clothing" style={{color:theme.palette.primary.main}}>
        CLOTHING
    </Catagorie></ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText><Catagorie to="/products/Homeware" style={{color:theme.palette.primary.main}}>
        HOMEWARE
    </Catagorie></ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <WatchIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText><Catagorie to="/products/Accessories" style={{color:theme.palette.primary.main}}>
            ACCESSORIES
    </Catagorie></ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlined fontSize="small" />
            </ListItemIcon>

            <ListItemText> <Catagorie to="/products/All_Products" style={{color:theme.palette.primary.main}}>
        ALL
    </Catagorie></ListItemText>
          </MenuItem>
        </Menu>
        </div>
        <Catagorie_Home to="/" style={{color:theme.palette.primary.main}}>
        HOME
    </Catagorie_Home>
    <Catagorie_Home  style={{color:theme.palette.primary.main}} >
        ABOUT US
    </Catagorie_Home>
    
    <Catagorie_Home  style={{color:theme.palette.primary.main}}>
       CONTACT
    </Catagorie_Home>
    
  </Container>;
};

export default Catagories;