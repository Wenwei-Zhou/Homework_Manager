import { Grid, Card, CardActionArea, Avatar, Box } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { TbLogin2 } from "react-icons/tb";
import StarIcon from "@mui/icons-material/Star";
import { IconButton } from "@mui/material";
import Sidebar from "../Sidebar.jsx";
import Calendar from "./Calendar.jsx";
import Message from "../Message/Message.jsx";
import UserProgressContext from "../Context/UserProgressContext.jsx";
import textbooks from "../Data/Textbook.js";
import messages from "../Data/Message.js";
import "./Home.css";
import { useContext, useState } from "react";

export default function Home() {
  const userProgressCtx = useContext(UserProgressContext);

  const [showClass, setShowClass] = useState("English");

  function handleShowLogin() {
    userProgressCtx.showLogin();
  }

  return (
    <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
      <Grid size={2}>
        <Sidebar />
      </Grid>

      <Grid size={10}>
        <div className="container">
          <div className="middle">
            <h1 className="title">Study Management</h1>
            <div className="class-option">
              {textbooks.map((textbook) => (
                <button
                  className={
                    textbook.id === showClass ? "class-active" : "class-button"
                  }
                  key={textbook.id}
                  onClick={() => setShowClass(textbook.id)}
                >
                  {textbook.id}
                </button>
              ))}
            </div>

            <div className="card">
              <h3>Online Tutorial</h3>
              <Grid container spacing={3}>
                {textbooks.map(
                  (textbook) =>
                    textbook.id === showClass &&
                    textbook.tutorials.map((tutorial) => (
                      <Grid size={6} key={tutorial.title}>
                        <Card
                          sx={{
                            width: 350,
                            height: 200,
                            borderRadius: "25px",
                            backgroundColor: tutorial.color,
                          }}
                        >
                          <CardActionArea href={tutorial.link}>
                            <Grid
                              container
                              spacing={2}
                              sx={{ padding: "10px", alignItems: "center" }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between", // 左中右分布
                                  width: "100%",
                                }}
                              >
                                {/* 左边部分：头像 + 文字 */}
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                  }}
                                >
                                  <Avatar>
                                    <img
                                      src={textbook.image}
                                      alt="S"
                                      style={{ width: "50px", height: "50px" }}
                                    />
                                  </Avatar>
                                  <p style={{ margin: 0 }}>{textbook.id}</p>
                                </Box>

                                {/* 右边部分：Star */}
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <StarIcon style={{ color: "DarkOrange" }} />
                                  <p>{tutorial.rate}</p>
                                </Box>
                              </Box>

                              <Grid size={12}>
                                <h3>{tutorial.title}</h3>
                              </Grid>
                              <Grid size={12}>
                                {tutorial.students} Students
                              </Grid>
                            </Grid>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))
                )}
              </Grid>
            </div>
          </div>

          <div className="right">
            <div className="right-icon">
              <Message />
              <IconButton
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
            </div>
            <div className="avatar-name">
              <Avatar>S</Avatar>
              <p>Student</p>
            </div>
            <div className="message">
              <h3>Message:</h3>
              {messages.map((message) => (
                <ListItem key={message} component="div" disablePadding>
                  <ListItemButton>
                    <ListItemText primary={message} />
                  </ListItemButton>
                </ListItem>
              ))}
            </div>
            <div>
              <Calendar />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
