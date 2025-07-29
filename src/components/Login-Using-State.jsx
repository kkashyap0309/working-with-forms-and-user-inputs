import { useState } from "react";

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

  const isValidEmail = !isEdited.email || formData.email.includes("@");

  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) =>
              handleOnchangeEvent("email", event.target.value)
            }
            value={formData.email}
            onBlur={() => handleInputBoxBlur('email')}
          />
          <div className="control-error">
            {!isValidEmail && <p>enter valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleOnchangeEvent("password", event.target.value)
            }
            value={formData.password}
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
