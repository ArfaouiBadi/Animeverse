import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./user.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import axios from "axios";

export default function User() {
  const location=useLocation()
  const id =location.pathname.split("/")[3]
 
  
  const [user,setUser]=useState([])
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get("user/find/"+id);
        setUser(res.data);
      } catch {}
    };
    getUser();
  }, []);
  const [userName, setUsername] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [role, setRole] = useState(user.role);
  const [birth, setBirth] = useState(user.birth);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);
  const handleUserUpdate = async()=>{
    
        try {
          const updatedUserData = {
            userName,
            email,
            password,
            firstName,
            lastName,
            role,
            birth,
            address,
            phone,
          };
          const res = await axios.put("http://localhost:3002/user/"+id, updatedUserData);
          console.log(res)
        } catch (err){
          console.log(err)
        }
      
  }
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/admin/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.userName}</span>
              <span className="userShowUserTitle">{user.role}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.userName}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{user.birth?.split("T")[0]}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{user.phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{user.address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>User Name</label>
                <input
                  type="text"
                  placeholder="UserName"
                  className="userUpdateInput"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="userUpdateInput"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="userUpdateInput"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>{user.email}</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="userUpdateInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  className="userUpdateInput"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Adress"
                  className="userUpdateInput"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                
                
              </div>
              <button className="userUpdateButton" onClick={handleUserUpdate}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
