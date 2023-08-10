import { useState } from "react";
import "./newUser.css";
import { publicRequest } from "../../requestMethods";
import axios from "axios";

export default function NewUser() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [role, setRole] = useState();
  const [birth, setBirth] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const handleRegister = async () => {
    await publicRequest.post('user/register', {
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
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john"  onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com"  onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="John Smith"  onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="John Smith"  onChange={(e) => setLastName(e.target.value)}/>
        </div>
        
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78"  onChange={(e) => setPhone(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA"  onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Birth</label>
          <input type="date" onChange={(e) => setBirth(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <input type="text" placeholder="Student , Proffesion" onChange={(e) => setRole(e.target.value)}/>
        </div>
        
        <button className="newUserButton" onClick={handleRegister}>Create</button>
      </form>
    </div>
  );
}
