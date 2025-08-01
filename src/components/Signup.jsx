import { useState } from "react";

export default function Signup() {
  const [passwordMatching, setPasswordMatching] = useState(true);
  //getting values via form data
  function handleFormData(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    // 1st aproach to pull each data using formdata.get('<htmlElement_Name>')
    const email = fd.get("email");
    console.log(email);

    // Another approch is to create a keyvalue pair of each input element and its value
    const data = Object.fromEntries(fd.entries());
    // console.log(data);

    //but in the above approach we wont be able to get the values under fieldset so for those we can manually
    // pull those and set to data
    const acquisition = fd.getAll("acquisition");
    data.acquisition = acquisition;

    // mixing custom validation while using the built-in validation
    if (data.password !== data["confirm-password"]) {
      setPasswordMatching(false);
      return;
    }

    console.log("logging after adding acquisition ");
    console.log(data);

    //reseting form after sumbission
    event.target.reset();
  }

  return (
    <form onSubmit={handleFormData}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            //buit-in validator provided by browser
            required
            minLength={5}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
          <div className="control-error">
            {!passwordMatching && <p>confirm password is not same</p>}
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            required
          />
          I agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
