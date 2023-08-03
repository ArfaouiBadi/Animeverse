import React from 'react';
import { homeAbout } from "../../dummydata";
import Title from "../common/title/title";
import AWrapper from './AWrapper';
import "./about.css"
const AboutCard = () => {
  return (
    <><section className='aboutHome'>
      <div className="container flexSB">
       
       
        <div className="right row">
          <Title subtitle='' title='AboutOurStore' />
          
          <div className='items'>
            {homeAbout.map((val) => (
              <div className='item flexSB' key={val.id}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section><AWrapper /></>
  );
}

export default AboutCard;
