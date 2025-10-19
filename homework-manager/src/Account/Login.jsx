import Logo from "../assets/logo.ico";
import Modal from "../Modal/Modal.jsx";
import UserProgressContext from "../Context/UserProgressContext.jsx";
import { isEmail, isNotEmpty } from "../util/validation.js";
import "./Login.css";
import { useContext, useState, useEffect } from "react";
import { IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Login() {
  const userProgressCtx = useContext(UserProgressContext);

  useEffect(() => {
    console.log("check the Progress state:", userProgressCtx.progress);
  }, [userProgressCtx.progress]);

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password && !isNotEmpty(enteredValues.password);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(identitfier, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identitfier]: event.target.value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identitfier]: false,
    }));
  }

  function handleInputBlur(identitfier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identitfier]: true,
    }));
  }

  function handleCloseLogin() {
    userProgressCtx.hideLogin();
  }

  function handleShowSignup() {
    userProgressCtx.showSignup();
  }

  return (
    <Modal
      className=""
      open={userProgressCtx.progress === "login"}
      onClose={userProgressCtx.progress === "login" ? handleCloseLogin : null}
    >
      <form onSubmit={handleSubmit}>
        <div className="login-close">
          <IconButton
            sx={{
              background: "none",
              border: "none",
              "&:hover": { backgroundColor: "none", border: "none" },
              "&:active": { backgroundColor: "none", border: "none" },
              "&:focus": { outline: "none" },
            }}
            onClick={handleCloseLogin}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div className="login-header">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "80px", height: "80px", borderRadius: "10px" }}
          />
          <h1>Welcome Back!</h1>
        </div>

        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input
              id="loginEmail"
              type="email"
              name="email"
              onBlur={() => handleInputBlur("email")}
              onChange={(event) => handleInputChange("email", event)}
              value={enteredValues.email}
            />
            <div className="control-error">
              {emailIsInvalid && <p>please enter a valid email address</p>}
            </div>
          </div>

          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input
              id="loginPassword"
              type="password"
              name="password"
              onBlur={() => handleInputBlur("password")}
              onChange={(event) => handleInputChange("password", event)}
              value={enteredValues.password}
            />
            <div className="control-error">
              {passwordIsInvalid && <p>Please enter password</p>}
            </div>
          </div>
        </div>
        <p className="form-actions">
          <button className="login-button button-flat">Reset</button>
          <button className="login-button" type="submit">
            Login
          </button>
        </p>
        <p>
          Don't have an account?{" "}
          <Button onClick={handleShowSignup}>Sign up</Button>
        </p>
      </form>
    </Modal>
  );
}
