import Box from "@mui/material/Box";
import IconButton from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import { TbMessage } from "react-icons/tb";
import { useState } from "react";
import messages from "../Data/Message.js";
import "./Message.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "20px",
  transform: "translate(-50%, -50%)",
  width: "480px",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  p: 4,
  //   animation: "fade-slide-up 0.3s ease-out forwards",
};

export default function Message() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton
        sx={{
          background: "none",
          border: "none",
          "&:hover": { backgroundColor: "none", border: "none" },
          "&:active": { backgroundColor: "none", border: "none" },
          "&:focus": { outline: "none" },
        }}
        onClick={handleOpen}
      >
        <TbMessage className="message-icon" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        className="message-modal"
      >
        <Box sx={style}>
          <h2 style={{ textAlign: "center" }}>Message</h2>
          {messages.map((message) => (
            <ListItem key={message} component="div" disablePadding>
              <ListItemButton>
                <ListItemText primary={message} />
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
