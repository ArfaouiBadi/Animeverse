import React, { useState } from 'react';
import fb from "../../assets/fb.png";
import tw from "../../assets/tw.png";
import gp from "../../assets/gp.png";
import './Auth.css';

const Auth = () => {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(true);

  const handleClickRegister = () => {
    setRegisterVisible(true);
    setLoginVisible(false);
  };

  const handleClickLogin = () => {
    setRegisterVisible(false);
    setLoginVisible(true);
  };

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

  return (
    <Form
      label="Register"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      email={email}
      setEmail={setEmail}
    />
  );
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form
      label="Login"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      email={email}
      setEmail={setEmail}
    />
  );
};

const Form = ({ label, username, setUsername, password, setPassword, email, setEmail }) => {
  return (
    <>
      <input
        type="text"
        className="input-field"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        className="input-field"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="input-field"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input type="checkbox" className="check-box" required />
      <span>I agree to the terms & conditions</span>
      <button type="submit" className="submit-btn">
        {label}
      </button>
    </>
  );
};

export default Auth;
