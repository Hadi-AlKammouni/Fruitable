import React, { useState } from "react";
import './styles.css';
import logo from '../../assets/Picture1.png';
import logout from '../../assets/logout.png';
import { SidebarPages } from "./SidebarPages";

const Sidebar = () => {

    const [isSelected,setIsSelected] = useState(0)

    return (
      <div className="sidebar"> 
        {/* Sidebar header */}
        <div className="logo">
          <img src={logo} alt="" />
            <span>HELLO WORLD</span>
        </div>
        {/* Sidebar content */}
        <div className="menu">
          {SidebarPages.map((item, index) => {
            return(
              <div 
                className={isSelected === index?'menu-pages active':'menu-pages'} 
                key={index}
                onClick={() => setIsSelected(index)}
              >
                <img src={item.icon} alt=''/>
                <span>{item.heading}</span>
              </div>
            )
          })}
          <div className="menu-pages">
            <img src={logout} alt=''/>
            <span>Logout</span>
          </div>
        </div>
        
      </div>
    );
}
  
export default Sidebar;  