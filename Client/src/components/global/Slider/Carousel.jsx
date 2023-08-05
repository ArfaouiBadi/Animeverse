import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Button=styled(Link)`
  color: #000;
  height: 50px;
  padding: 5px 20px;
  scale: calc(0.9);
  background-color: transparent;
  
  text-decoration:none;
  display: flex;
  align-items: center;
  border: 0.5px solid black;
  font-weight: 400;
  cursor: pointer;
  position:absolute;
  bottom: 30px;
  right: 18%;
  &:hover{
    background-color: #c9c9c9;
  }
  
`
const Text=styled.div`
  color: black;
  flex: 1;
  position: absolute;
  right:5%;
  top:0;
  padding: 40px;
  
  width: 30%;
  height: 100%;
  font-weight: 700;
  text-transform: uppercase;
`
export const Carousel = ({ data }) => {

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      
      {data.map((item, idx) => {
        return (
          <div className={slide === idx ? "slide" : "slide slide-hidden"}>
          
          <img
            src={item.image}
            alt={item.title}
            key={idx}
            className="Slider_img"
          />
          
          <Text>{item.title}</Text>
          <Button>SHOP NOW</Button>
          </div>
        );
      })}
      
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
