import { useRef } from "react";

export default function Login() {
  //another way to fetch the values of form
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmitEvent(event) {
    event.preventDefault();
    console.log("submitted!!");
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmitEvent}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
