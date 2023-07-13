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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [birth, setBirth] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
  
    const handleRegister = () => {
      console.log("Username:", username);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Role:", role);
      console.log("Birth:", birth);
      console.log("Address:", address);
      console.log("Phone:", phone);
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
  
    const handleLogin = () => {
      console.log("Username:", username);
      console.log("Email:", email);
    };
  
    return (
      <Form
        label="Login"
        showUsername
        showEmail
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
    onSubmit, // Added onSubmit prop
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
            type="text"
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
        <button type="submit" className="submit-btn">
          {label}
        </button>
      </form>
    );
  };
  

export default Auth;
