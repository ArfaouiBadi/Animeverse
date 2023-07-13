import React from 'react'
import fb from "../img/fb.png";
import tw from "../img/tw.png";
import gp from "../img/gp.png";
import  { useState } from 'react';

export default function Form() {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(true);
  const handleClickRegister = ()=>{
    setRegisterVisible(true);
    setLoginVisible(false);
  }
  const handleClickLogin = ()=>{
    setRegisterVisible(false);
    setLoginVisible(true);
  }
  
  return (
    <div className="container">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
      <div className="button-box">
        <div id="btn"></div>
        <button type="button" className="toggle-btn" onClick={handleClickLogin}>Log In</button>
        <button type="button" className="toggle-btn" onClick={handleClickRegister}>Register</button>
      </div>
      <div className="social-icons">
        <img alt="fb icon" src={fb} />
        <img alt="tw icon" src={tw} />
        <img alt="google icon" src={gp} />
      </div>
      {isLoginVisible && (
        <form id="login" className="form">
        <input type="text" className="input-field" placeholder="Username" required/>
        <input type="password" className="input-field" placeholder="Password" required/>
        <input type="checkbox" className="check-box"/><span>Remember me </span>
        <button type="submit" className="submit-btn">Log in</button>
      </form>
      )}
      {isRegisterVisible && (
        <form id="register" className="form">
        <input type="text" className="input-field" placeholder="Username" required/>
        <input type="email" className="input-field" placeholder="Email" required/>
        <input type="password" className="input-field" placeholder="Password" required/>
        <input type="checkbox" className="check-box" required/><span>I agree to the terms & conditions </span>
        <button type="submit" className="submit-btn">Register</button>
      </form>
      )}
      
			</div>
		</div>
	</div>
  )
}
