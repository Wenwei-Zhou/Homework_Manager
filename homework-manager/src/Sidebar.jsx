import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbHome, TbNotebook, TbCalendarMonth, TbTargetArrow, TbSettingsFilled } from "react-icons/tb";
import Avatar from '@mui/material/Avatar';
import Logo from './assets/logo.ico';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');
  // const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: '/', icon: <TbHome/>, label: 'home' },
    { path: '/homework', icon: <TbNotebook/>, label: 'homework' },
    { path: '/timetable', icon: <TbCalendarMonth/>, label: 'timetable' },
    { path: '/target', icon: <TbTargetArrow/>, label: 'target' },
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
              key={item.path}
            >
              <NavLink
                to={item.path}
                className={`menu-item ${activeItem === item.path ? 'active' : ''}`}
                onClick={() => handleItemClick(item.path)}
              >
                <span className="menu-icon">{item.icon}</span>
              </NavLink>
              
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
          <span className="menu-icon"><TbSettingsFilled/></span>
          <Avatar>S</Avatar>
      </div>
    </div>
  );
};

export default Sidebar;