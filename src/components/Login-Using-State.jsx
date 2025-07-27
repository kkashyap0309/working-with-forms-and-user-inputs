import { useState } from "react";

export default function Login() {
  //one way of handling the userInput
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleOnchangeEvent(identifier, value) {
    setFormData((prev) => {
      return {
        ...prev,
        [identifier]: value,
      };
    });
  }

  function handleSubmitEvent(event) {
    event.preventDefault();
    console.log("submitted!!");
    console.log(formData);
  }

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
          />
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
