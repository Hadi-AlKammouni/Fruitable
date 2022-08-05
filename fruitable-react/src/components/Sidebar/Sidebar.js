import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logout from '../../assets/logout.png';
import { SidebarPages } from "./SidebarPages";
import { NavLink } from "react-router-dom";
import { useGrocery } from "../../context/grocery";
import {toast} from 'react-toastify';
import './styles.css';

const Sidebar = () => {
    
    const navigate = useNavigate();

    const [isSelected,setIsSelected] = useState(0)
    const {groceryName, groceryPicture} = useGrocery()

    return (
      <div className="sidebar"> 
        {/* Sidebar header */}
        <div className="logo">
          <img src={groceryPicture} alt="" />
            <span>{groceryName}</span>
        </div>
        {/* Sidebar content */}
        <div className="menu">
          {SidebarPages.map((item, index) => {
            return(
              <NavLink key={index} to={item.link} className={isSelected === index?'menu-pages active':'menu-pages'} onClick={() => setIsSelected(index)}>
                <img src={item.icon} alt=''/>
                 <span >{item.heading}</span>
              </NavLink>
            )
          })}
          <div 
            onClick={()=>{
              setIsSelected(0)
              toast.success(`You looged out successfully.`,{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})
              localStorage.clear()
              navigate('/')
            }}
            className="menu-pages">
            <img src={logout} alt=''/>
            <span className="logout">Logout</span>
          </div>
        </div>
        
      </div>
    );
}
  
export default Sidebar;  