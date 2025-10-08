import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { TbTargetArrow, TbSettingsFilled } from "react-icons/tb";
import Avatar from '@mui/material/Avatar';
import Logo from './assets/logo.ico';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  // const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'home', icon: <HomeOutlinedIcon/>, label: 'home' },
    { id: 'homework', icon: <MenuBookOutlinedIcon/>, label: 'homework' },
    { id: 'timetable', icon: <CalendarMonthOutlinedIcon/>, label: 'timetable' },
    { id: 'target', icon: <TbTargetArrow/>, label: 'target' },
    { id: 'setting', icon: <TbSettingsFilled/>, label: 'setting' },
  ];

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
      <div className='sidebar'>
      <div className="sidebar-header">
        <img src={Logo} alt='logo' style={{width:"50px", height:"50px", borderRadius:"10px"}} />
      </div>
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`menu-item ${activeItem === item.id ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="menu-icon">{item.icon}</span>
              {/* {!isCollapsed && <span className="menu-label">{item.label}</span>} */}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
          <Avatar>S</Avatar>
      </div>
    </div>
  );
};

export default Sidebar;