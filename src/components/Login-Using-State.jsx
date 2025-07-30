import { useState } from "react";
import Input from "./Input";
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation.js";

export default function Login() {
  //one way of handling the userInput
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isEdited, setIsEdited] = useState({
    email: false,
    password: false,
  });

  function handleOnchangeEvent(identifier, value) {
    setFormData((prev) => {
      return {
        ...prev,
        [identifier]: value,
      };
    });

    setIsEdited((prev) => {
      return {
        ...prev,
        [identifier]: false,
      };
    });
  }

  function handleSubmitEvent(event) {
    event.preventDefault();
    console.log("submitted!!");
    console.log(formData);

    //reseting the form value after submission
    setFormData({
      email: "",
      password: "",
    });
  }

  function handleInputBoxBlur(identifier) {
    setIsEdited((prev) => {
      return {
        ...prev,
        [identifier]: true,
      };
    });
  }

  const isValidEmail = !isEdited.email || isEmail(formData.email)
  const validPwdLength = !isEdited.password || (isNotEmpty(formData.password) && hasMinLength(formData.password, 5));

  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <Input
            id="email"
            label="Email"
            err={!isValidEmail && "enter valid email address."}
            type="email"
            name="email"
            onChange={(event) =>
              handleOnchangeEvent("email", event.target.value)
            }
            value={formData.email}
            onBlur={() => handleInputBoxBlur("email")}
          />
        </div>

        <div className="control no-margin">
          <Input
            id="password"
            label="Password"
            err={!validPwdLength && "password length should be greater than 5."}
            type="password"
            name="password"
            onChange={(event) =>
              handleOnchangeEvent("password", event.target.value)
            }
            value={formData.password}
            onBlur={() => handleInputBoxBlur("password")}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
