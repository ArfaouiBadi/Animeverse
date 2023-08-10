import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import fb from '../../../assets/fb.png';
import tw from '../../../assets/tw.png';
import gp from '../../../assets/gp.png';
import bg from '../../../assets/bg.png';
import { login } from '../../Redux/apiCalls';
import {  useTheme } from "@mui/material/styles";

import './Auth.css';
import { loginFailure, loginSuccess } from '../../Redux/userReducer';

const Auth = () => {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  

  
  const handleClickRegister = (e) => {
    setIsActive(true);
    setRegisterVisible(true);
    setLoginVisible(false);
  };

  const handleClickLogin = () => {
    setIsActive(false);
    setRegisterVisible(false);
    setLoginVisible(true);
  };
  const theme = useTheme();


  return (
    <div className="container_auth"  theme={theme} style={{backgroundColor:theme.palette.background.main}}>
      <div className="contact-box" style={{backgroundColor:theme.palette.background.main}}>
        <div className="left_login"></div>
        <div className="right">
          <div className="button-box">
            <div className={isActive ? 'btn-register' : 'btn'}></div>
            <button type="button" className="toggle-btn"style={{color:theme.palette.primary.main}} id="btn-login" onClick={handleClickLogin}>
              Log In
            </button>
            <button type="button" className="toggle-btn" style={{color:theme.palette.primary.main}}onClick={handleClickRegister}>
              Register
            </button>
          </div>
          <div className="social-icons ">
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

  //REGISTER
  const handleRegister = async () => {
    await axios.post('http://localhost:3002/user/register', {
      firstName,
      lastName,
      phone,
      address,
      email,
      password,
      username,
      birth,
      role,
    });
    
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
      onClick={handleRegister}
    />
  );
};

//Login
const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erreur, setErreur] = useState("");
  const [_, setCookies] = useCookies(['acces-token']);
  const dispatch = useDispatch();
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3002/user/login', {password, email});
      console.log(response.data)
      
      if (response.data.message) {
        dispatch(loginFailure());
        
        
      } else {
        dispatch(loginSuccess(response.data));
        setCookies('access-token', response.data.token);
        window.localStorage.setItem('userID', response.data._id);
      }
    } catch (error) {
      dispatch(loginFailure());
      console.error('Error during login:', error);
      
    }
  };

 
  return (
    <Form
      label="Login"
      showEmail
      showPassword
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      email={email}
      setEmail={setEmail}
      onClick={handleLogin}

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
  onClick,

  
}) => {
  const handleClick = () => {
    onClick(); // Call the onSubmit function passed as a prop
  };
  
  const [isVisible, setVisible] = useState(false);

  const handleClickView = () => {
    setVisible((prevState) => !prevState);
  };
  const theme = useTheme();


  return (
    <div onSubmit={handleClick}>
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
        <div className="input">
          <input
            type={isVisible ? 'text' : 'password'}
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FontAwesomeIcon icon={isVisible ? faEye : faEyeSlash} className="showHidePw" onClick={handleClickView} />
        </div>
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
        <input style={{color:theme.palette.primary.main}}
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
          type="text"
          className="input-field"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        
      )}
      <input type="checkbox" className="check-box" required />
      <span>I agree to the terms & conditions</span>
      <button type="submit" className="submit-btn" onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default Auth;
