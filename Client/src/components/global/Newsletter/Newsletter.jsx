import { Send } from "@material-ui/icons";
import styled from "styled-components";
import imagesnew from './images/Newsletter.jpg'
import {  useTheme } from "@mui/material/styles";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 80vh;
  background: url(${imagesnew}) no-repeat   ;
  background-size: cover;
  background-position: 50% 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s ease all;
  color:white;
`;
const Title = styled.h1`
  font-size: 70px;
  font-family: 'Roboto Condensed';
  ${mobile({fontSize:"50px" })}
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  font-family: 'Roboto Condensed';
  text-align: center;
  ${mobile({fontSize:"20px" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
 
  
`;

const Input = styled.input`
  border: none;
  flex: 10;
  padding-left: 20px;
  background-color: transparent;
  
`;

const Button = styled.button`
  flex: 1;
  border: none;
  color: black;
  cursor: pointer;
  background-color: transparent;
  color:white;
`;

const Newsletter = () => {
  const theme = useTheme();

  return (
    <Container  theme={theme} style={{color:"#fff"}}>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer style={{color:theme.palette.primary.main,backgroundColor:theme.palette.background.main}}>
        <Input placeholder="Your email" />
        <Button>
          <Send style={{color:theme.palette.primary.main,backgroundColor:theme.palette.background.main}} />
        </Button>
        
      </InputContainer>
    </Container>
  );
};

export default Newsletter;