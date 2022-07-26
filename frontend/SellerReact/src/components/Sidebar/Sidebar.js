import React from "react";
import './styles.css';
import logo from '../../assets/Picture1.png'

const Sidebar = () => {
    return (
      <div className="sidebar"> 
        {/* Sidebar! */}
        <div className="logo">
          <img src={logo} alt="" />
            <span>
              HELLO WORLD
            </span>
        </div>
      </div>
    );
}
  
export default Sidebar;  