import React from 'react'
import AboutCard from "./AboutCard"
import { styled } from 'styled-components'
import aboutUsData from './dummydata.js'
import { mobile } from '../../responsive'
import {  useTheme } from "@mui/material/styles";

const Container=styled.div`
display:flex;
flex-direction: row;
background-color: #121D31;
flex-wrap: wrap;
padding: 40px;
gap:10px;
height: 100%;

transition: all 0.3 ease;
${mobile({flexDirection:"column",})}
`
const About = () => {
  const theme = useTheme();

  return (
    <Container theme={theme} style={{color:theme.palette.primary.main,backgroundColor:theme.palette.background.main}}>
      {aboutUsData.map((item) => (
        <AboutCard key={item.id} cover={item.cover} title={item.title} desc={item.desc} />
      ))}
    </Container>
  );
}
export default About 