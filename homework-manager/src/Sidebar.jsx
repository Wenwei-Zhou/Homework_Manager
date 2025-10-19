import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TbHome,
  TbNotebook,
  TbCalendarMonth,
  TbChartHistogram,
  TbLogin2,
} from "react-icons/tb";
import { IconButton } from "@mui/material";
import Logo from "./assets/logo.ico";
import "./Sidebar.css";
import UserProgressContext from "./Context/UserProgressContext.jsx";

const Sidebar = () => {
  const userProgressCtx = useContext(UserProgressContext);
  const [activeItem, setActiveItem] = useState("");

  const menuItems = [
    { path: "/", icon: <TbHome />, label: "home" },
    { path: "/course", icon: <TbNotebook />, label: "course" },
    { path: "/timetable", icon: <TbCalendarMonth />, label: "timetable" },
    { path: "/score", icon: <TbChartHistogram />, label: "score" },
  ];

  function handleShowLogin() {
    userProgressCtx.showLogin();
  }

  const handleItemClick = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "50px", height: "50px", borderRadius: "10px" }}
        />
      </div>
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={`menu-item ${
                  activeItem === item.path ? "active" : ""
                }`}
                onClick={() => handleItemClick(item.path)}
              >
                <span className="menu-icon">{item.icon}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <nav>
          <IconButton
            className="setting-button"
            sx={{
              background: "none",
              border: "none",
              "&:hover": { backgroundColor: "none", border: "none" },
              "&:active": { backgroundColor: "none", border: "none" },
              "&:focus": { outline: "none" },
            }}
            onClick={handleShowLogin}
          >
            <TbLogin2 className="setting-icon" />
          </IconButton>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
