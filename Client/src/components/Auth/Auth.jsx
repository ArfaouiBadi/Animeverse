import React, { useState } from 'react';
import fb from "../../assets/fb.png";
import tw from "../../assets/tw.png";
import gp from "../../assets/gp.png";
import Axios from 'axios'
import {useCookies} from 'react-cookie'
import './Auth.css';

const Auth = () => {
    




  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleClickRegister = () => {
    setIsActive(true)
    setRegisterVisible(true);
    setLoginVisible(false);
  };

  const handleClickLogin = () => {
    setIsActive(false)
    setRegisterVisible(false);
    setLoginVisible(true);
  };

  return (
    <div className="container">
      <div className="contact-box">
        <div className="left"></div>
        <div className="right">
          <div className="button-box">
            <div className={isActive ? 'btn-register slide-in' : 'btn slideOut'}></div>
            <button type="button" className="toggle-btn" onClick={handleClickLogin}>Log In</button>
            <button type="button" className="toggle-btn" onClick={handleClickRegister}>Register</button>
          </div>
          <div className="social-icons">
            <img alt="fb icon" src={fb} />
            <img alt="tw icon" src={tw} />
            <img alt="google icon" src={gp} />
          </div>
          {isRegisterVisible && <Register />}
          {isLoginVisible && <Login />}
        </div>
      </div>
    </div>
  );
};

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [birth, setBirth] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const handleRegister = async(e) => {
      e.preventDefault();
      await Axios.post("http://localhost:3002/register",{username ,email,password,firstName,lastName,role,birth,address,phone})
      
    };
  
    return (
      <Form
        label="Register"
        showUsername
        showEmail
        showPassword
        showFirstName
        showLastName
        showRole
        showBirth
        showAddress
        showPhone
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        role={role}
        setRole={setRole}
        birth={birth}
        setBirth={setBirth}
        address={address}
        setAddress={setAddress}
        phone={phone}
        setPhone={setPhone}
        onSubmit={handleRegister}
      />
    );
  };
  
  const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [_,setCookies]=useCookies(['acces-token'])
    const handleLogin = async() => {
      
      const response =await Axios.post("http://localhost:3002/login",{username,email,password})
      setCookies("acces-token",response.data.token)
      window.localStorage.setItem("userID",response.data.userid)
      console.log(response.data)
    };
  
    return (
      <Form
        label="Login"
        showUsername
        showEmail
        showPassword
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        email={email}
        setEmail={setEmail}
        onSubmit={handleLogin}
      />
    );
  };
  

const Form = ({
    label,
    showUsername,
    showEmail,
    showPassword,
    showFirstName,
    showLastName,
    showRole,
    showBirth,
    showAddress,
    showPhone,
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    role,
    setRole,
    birth,
    setBirth,
    address,
    setAddress,
    phone,
    setPhone,
    onSubmit, 
  }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(); // Call the onSubmit function passed as a prop
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {showUsername && (
          <input
            type="text"
            className="input-field"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        {showEmail && (
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        )}
        {showPassword && (
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        )}
        {showFirstName && (
          <input
            type="text"
            className="input-field"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        )}
        {showLastName && (
          <input
            type="text"
            className="input-field"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        )}
        {showRole && (
          <input
            type="text"
            className="input-field"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        )}
        {showBirth && (
          <input
            type="date"
            className="input-field"
            placeholder="Birth"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        )}
        {showAddress && (
          <input
            type="text"
            className="input-field"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        )}
        {showPhone && (
          <input
            type="phone"
            className="input-field"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        )}
        <input type="checkbox" className="check-box" required />
        <span>I agree to the terms & conditions</span>
        <button type="submit" className="submit-btn">
          {label}
        </button>
      </form>
    );
  };
  

export default Auth;
