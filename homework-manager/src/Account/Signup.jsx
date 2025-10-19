import { useActionState, useContext } from "react";
import Modal from "../Modal/Modal.jsx";
import UserProgressContext from "../Context/UserProgressContext.jsx";
import {
  isEmail,
  isNotEmpty,
  isEqualToOtherValue,
  hasMinLength,
} from "../util/validation.js";
import "./Signup.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Button } from "@mui/material";

function signupAction(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirm-password");
  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  // const role = formData.egt("role");
  const terms = formData.get("terms");
  // const acquisitionChannel = formData.getAll("acquisition");

  let errors = [];

  if (!isEmail(email)) {
    errors.push("Invalid email address");
  }

  if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
    errors.push("You must provide a password with at least six characters.");
  }

  if (!isEqualToOtherValue(password, confirmPassword)) {
    errors.push("Password do not match");
  }

  if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
    errors.push("Please provide both your first and last name.");
  }

  if (!terms) {
    errors.push("You must agree to the terms and conditions.");
  }

  if (errors.length > 0) {
    return {
      errors: errors,
      enteredValues: {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
        // role,
        // acquisitionChannel,
        terms,
      },
    };
  }
  return { errors: null };
}

export default function Signup() {
  const userProgressCtx = useContext(UserProgressContext);
  const [formState, formAction] = useActionState(signupAction, {
    errors: null,
  });

  function handleCloseSignup() {
    userProgressCtx.hideSignup();
  }
  return (
    <Modal open={userProgressCtx.progress === "signup"}>
      <form action={formAction}>
        <div className="login-close">
          <IconButton
            sx={{
              background: "none",
              border: "none",
              "&:hover": { backgroundColor: "none", border: "none" },
              "&:active": { backgroundColor: "none", border: "none" },
              "&:focus": { outline: "none" },
            }}
            onClick={handleCloseSignup}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <h1>Welcome!</h1>
        <p>Create your account, let's get start!</p>

        <div className="control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            defaultValue={formState.enteredValues?.email || ''}
          ></input>
        </div>

        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              defaultValue={formState.enteredValues?.password || ''}
            ></input>
          </div>

          <div className="control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              name="confirm-password"
              defaultValue={formState.enteredValues?.confirmPassword || ''}
            />
          </div>
        </div>

        <hr />

        <div className="control-row">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              defaultValue={formState.enteredValues?.firstName || ''}
            />
          </div>

          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              defaultValue={formState.enteredValues?.lastName || ''}
            />
          </div>
        </div>

        <div className="control">
          <label htmlFor="terms-and-conditions">
            <input
              type="checkbox"
              id="terms-and-conditions"
              name="terms"
              defaultChecked={formState.enteredValues?.terms}
            />
            I agree to the terms and conditions
          </label>
        </div>

        {formState.errors && (
          <ul className="error">
            {formState.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button className="button">Sign up</button>
        </p>
        
      </form>
    </Modal>
  );
}