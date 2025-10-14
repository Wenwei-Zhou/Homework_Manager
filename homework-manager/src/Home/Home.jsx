import { Grid, Card, CardActionArea, Button, Avatar, Box } from "@mui/material";
import { TbSettingsFilled, TbBellRinging } from "react-icons/tb";
import StarIcon from "@mui/icons-material/Star";
import Sidebar from "../Sidebar.jsx";
import textbooks from "../Data/Textbook.js";
import "./Home.css";
import { useState } from "react";

export default function Home() {
  const [showClass, setShowClass] = useState("English");

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
              <Grid container spacing={3}>
                {textbooks.map(
                  (textbook) =>
                    textbook.id === showClass &&
                    textbook.tutorials.map((tutorial) => (
                      <Grid size={6}>
                        <Card
                          sx={{
                            width: 350,
                            height: 180,
                            borderRadius: "25px",
                            backgroundColor: tutorial.color,
                          }}
                        >
                          <CardActionArea>
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
              <TbBellRinging />
              <TbSettingsFilled />
            </div>
            <div className="avatar-name">
              <Avatar>S</Avatar>
              <p>Student</p>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>

    // <Grid
    //   container
    //   spacing={2}
    //   sx={{
    //     width: "100%",
    //     height: "100vh", // 整个页面满屏高
    //     margin: 0,
    //     overflow: "hidden", // 防止超出滚动
    //   }}
    // >
    //   {/* 左边栏 */}
    //   <Grid
    //     item
    //     xs={12}
    //     md={2}
    //     sx={{
    //     //   height: "100%", // 与父级同高
    //     //   backgroundColor: "#f5f5f5",
    //     //   display: "flex",
    //     //   flexDirection: "column",
    //     //   alignItems: "center",
    //     //   p: 2,
    //     }}
    //   >
    //     <Sidebar />
    //   </Grid>

    //   {/* 中间主内容 */}
    //   <Grid
    //     item
    //     xs={12}
    //     md={6}
    //     container
    //     direction="column"
    //     spacing={3}
    //     sx={{
    //       p: 3,
    //       height: "100%", // 与父级同高
    //       overflowY: "auto", // 内容多时中间部分可滚动
    //     }}
    //     className="tutorial"
    //   >
    //     <Typography variant="h4" className="title">
    //       Study Manager
    //     </Typography>

    //     <Stack direction="row" spacing={2}>
    //       <Button variant="contained">English</Button>
    //       <Button variant="contained">Math</Button>
    //       <Button variant="contained">Physics</Button>
    //       <Button variant="contained">Programming</Button>
    //       <Button variant="contained">Chemical</Button>
    //     </Stack>

    //     <Grid container spacing={3}>
    //       <Grid item xs={6}>
    //         <Card sx={{ width: "100%", maxHeight: 250 }}>
    //           <CardActionArea>
    //             <CardMedia
    //               component="img"
    //               height="140"
    //               image="/static/images/cards/contemplative-reptile.jpg"
    //               alt="green iguana"
    //             />
    //             <CardContent>
    //               <Typography gutterBottom variant="h5">
    //                 Lizard
    //               </Typography>
    //               <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //                 Lizards are a widespread group of squamate reptiles, with
    //                 over 6,000 species, ranging across all continents except
    //                 Antarctica.
    //               </Typography>
    //             </CardContent>
    //           </CardActionArea>
    //         </Card>
    //       </Grid>

    //       <Grid item xs={6}>
    // <Card sx={{ width: "100%", maxHeight: 250 }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       alt="green iguana"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //         Lizards are a widespread group of squamate reptiles, with
    //         over 6,000 species, ranging across all continents except
    //         Antarctica.
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    //       </Grid>

    //       <Grid item xs={6}>
    //         <Button variant="contained" fullWidth>
    //           Physics
    //         </Button>
    //       </Grid>
    //       <Grid item xs={6}>
    //         <Button variant="contained" fullWidth>
    //           Programming
    //         </Button>
    //       </Grid>
    //     </Grid>
    //   </Grid>

    //   {/* 右边栏 */}
    //   <Grid
    //     item
    //     xs={12}
    //     md={4}
    //     sx={{
    //       height: "100%", // 同样占满高度
    //       display: "flex",
    //       alignItems: "flex-start",
    //       justifyContent: "center",
    //       p: 2,
    //       overflowY: "auto",
    //     }}
    //   >
    //     <Card sx={{ width: "100%", maxHeight: 250 }}>
    //       <CardActionArea>
    //         <CardMedia
    //           component="img"
    //           height="140"
    //           image="/static/images/cards/contemplative-reptile.jpg"
    //           alt="green iguana"
    //         />
    //         <CardContent>
    //           <Typography gutterBottom variant="h5">
    //             Lizard
    //           </Typography>
    //           <Typography variant="body2" sx={{ color: "text.secondary" }}>
    //             Lizards are a widespread group of squamate reptiles, with over
    //             6,000 species, ranging across all continents except Antarctica.
    //           </Typography>
    //         </CardContent>
    //       </CardActionArea>
    //     </Card>
    //   </Grid>
    // </Grid>
  );
}
