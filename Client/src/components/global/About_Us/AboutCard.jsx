import React from 'react';
import styled from 'styled-components';
import "./about.css"
import { mobile } from '../../responsive';
const Container=styled.div`
  flex: 1;
  border: 1px solid white;
  width: 80vw;
  display: flex;
  justify-content: center;
  background-color: #eee;
  border-radius: 10px;
  padding: 10px 30px;
  transition: all 0.3 ease;
  margin: auto;
  margin-bottom:20px;
  ${mobile({flexDirection:"column",})}

`
const ImgContainer=styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: center;

`
const Image=styled.img``
const InfoContainer=styled.div`
margin-left: 50px;
flex:3;`
const Title=styled.div`
font-size: 25px;
font-weight: 700;

color:black;
${mobile({textAlign:"center"})}
`


const Desc=styled.div`
color:black;
font-size: 12px;
${mobile({textAlign:"center"})}
`


const AboutCard = ({title,cover,desc}) => {
  
  return (
    <Container>
      <ImgContainer><Image src={cover}/></ImgContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        </InfoContainer>
    </Container>
  );
}


export default AboutCard;
