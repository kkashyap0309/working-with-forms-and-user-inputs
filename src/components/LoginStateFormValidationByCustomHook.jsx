import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import useInput from "../hooks/useInput.js";

export default function Login() {
  const {
    value: email,
    handleInputBoxBlur: handleEmailBlur,
    handleOnchangeEvent: handleEmailChange,
    hasError: hasEmailErr,
  } = useInput("", isEmail);

  const {
    value: password,
    handleInputBoxBlur: handlePasswordBlur,
    handleOnchangeEvent: handlePasswordChange,
    hasError: hasPasswordErr,
  } = useInput("", (value) => {
    return isNotEmpty(value) && hasMinLength(value, 5);
  });


  function handleSubmitEvent(event) {
    event.preventDefault();
    if (hasEmailErr || hasPasswordErr) {
      // donot submit form
      return;
    }

    console.log("submitted!!");
    console.log(email, password);

    // //reseting the form value after submission
    // email = "";
    // password = "";
  }

  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <Input
            id="email"
            label="Email"
            err={hasEmailErr && "enter valid email address."}
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
            onBlur={handleEmailBlur}
          />
        </div>

        <div className="control no-margin">
          <Input
            id="password"
            label="Password"
            err={hasPasswordErr && "password length should be greater than 5."}
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            onBlur={handlePasswordBlur}
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
