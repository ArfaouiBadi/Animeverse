import React, { useContext } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import StoreContext from "../../../../../hooks/storeContext";
import { Button } from "@mui/material";

export default function Topbar() {
  const {adminDashboard,setadminDashboard}=useContext(StoreContext)
const handleToggleClick = () => {
    setadminDashboard(!adminDashboard)
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Button onClick={handleToggleClick}><Link to="/"><Language /></Link></Button>
            
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
