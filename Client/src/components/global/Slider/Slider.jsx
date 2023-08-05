import { styled } from "styled-components";
import { Slides } from "../../../data/data";
import { Carousel } from "./Carousel";
import {  useTheme } from "@mui/material/styles";

const Container=styled.div`
background-color: #121D31;
  display: flex;
  justify-content: center;
  padding: 55px;
  user-select: none;
 
`
function Slider() {
    const theme = useTheme();
  return (
    
    <Container theme={theme} style={{color:theme.palette.primary.main,backgroundColor:theme.palette.background.main}}>
      <Carousel data={Slides} />
    </Container>
  );
}

export default Slider;

