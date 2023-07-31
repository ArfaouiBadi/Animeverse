import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
import { mobile } from "../../responsive";
import Contact from "../Contact/Contact";

  const Container = styled.div`
    display: flex;
    background-color: #121D31;
    height: 70vh;
    padding: 80px;
    
    ${mobile({ flexDirection: "column" })}
    
  `;
  const Copyright=styled.div`
    color: white;
    background-color: #121D31;
    text-align: center;
    width: 100%;
    margin-top: 20px;
   
    
  `
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
  `;
  
  const Logo = styled.h1`
  font-weight: 700;
  font-family: 'Lobster';
  transition: 0.2s ease all;
  
  &:hover{
        border-bottom: 5px solid white;
    }
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
    font-family: 'Roboto Condensed';
    
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    
  `;
  
  const SocialIcon = styled.div`
  
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
    
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-top: 15px;
    background-color: transparent;
    text-align: center;
    
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
    font-family: 'Roboto Condensed';
    transition: 0.2s ease all;
    background-color: transparent;
    &:hover{
        border-bottom: 5px solid white;
    }
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    background-color: transparent;
  `;
  
  const ListItem = styled.li`
  background-color: transparent;
    width: 50%;
    margin-bottom: 10px;
    font-family: 'Roboto Condensed';
    cursor: pointer;
    transition: 0.2s ease all;
  `;
  
  const Right = styled.div`
    margin-top: 15px;
    flex: 1;
    padding: 20px;
    text-align: center;
    
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-family: 'Roboto Condensed';
    justify-content: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    const date = new Date().getFullYear().toLocaleString();
    return (
      <>
      <Contact/>
      <Container>
        <Left>
          <Logo>Animeverse.</Logo>
          <Desc>
          Experience the captivating world through AnimeVerse ,your ultimate destination for immersive storytelling,stunning visuals and unforgettable characters
          </Desc>
          <SocialContainer>
            <SocialIcon >
              <Facebook />
            </SocialIcon>
            <SocialIcon >
              <Instagram />
            </SocialIcon>
            <SocialIcon >
              <Twitter />
            </SocialIcon>
            <SocialIcon >
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        
        
      </Container>
      <Copyright>
        Copyright @{date} All Right reserved | ❤ by SwitfCode
      </Copyright></>
      
     
    );
  };
  
  export default Footer;