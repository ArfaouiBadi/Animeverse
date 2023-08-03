import React from 'react'
import AboutCard from "./AboutCard"
import { styled } from 'styled-components'
import aboutUsData from './dummydata.js'
import { mobile } from '../../responsive'

const Container=styled.div`
display:flex;
flex-direction: row;
background-color: #121D31;
flex-wrap: wrap;
padding: 20px;
gap:10px;
height: 100%;
border: 10px solid white;
border-radius: 20px;
transition: all 0.3 ease;
${mobile({flexDirection:"column",})}
`
const About = () => {
  return (
    <Container>
      {aboutUsData.map((item) => (
        <AboutCard key={item.id} cover={item.cover} title={item.title} desc={item.desc} />
      ))}
    </Container>
  );
}
export default About 