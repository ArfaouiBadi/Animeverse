import React from 'react';
import styled from 'styled-components';
import "./about.css"
import { mobile } from '../../responsive';
import './about.css'
const Container=styled.div`
  border: 1px solid white;
  flex: 1;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  transition: all 0.3 ease;
  margin: auto;
 
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
${mobile({marginLeft:"0px"})}
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

`


const AboutCard = ({title,cover,desc}) => {
  
  return (
    <Container>
      <div className="container_about">
        
        <a className="card1" href="#">
        <img className="img_about"src={cover}/>
        <h3 className="title">{title}</h3>
        <p className="small">{desc}</p>
        <div className="go-corner" href="#">
      <div className="go-arrow">
        
      </div>
    </div>
  </a>
</div>
    </Container>
  );
}


export default AboutCard;
