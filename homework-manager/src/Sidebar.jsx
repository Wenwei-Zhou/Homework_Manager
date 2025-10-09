import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbHome, TbNotebook, TbCalendarMonth, TbChartHistogram, TbSettingsFilled } from "react-icons/tb";
// import Avatar from '@mui/material/Avatar';
import Logo from './assets/logo.ico';
import './Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');
  // const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { path: '/', icon: <TbHome/>, label: 'home' },
    { path: '/course', icon: <TbNotebook/>, label: 'course' },
    { path: '/timetable', icon: <TbCalendarMonth/>, label: 'timetable' },
    { path: '/score', icon: <TbChartHistogram/>, label: 'score' },
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
        <button className="setting-button">
          <span className="setting-icon"><TbSettingsFilled/></span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;