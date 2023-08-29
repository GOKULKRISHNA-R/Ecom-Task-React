import React from "react";
import { Link } from "react-router-dom";
import "./../../css/auth.css";

const Signin = () => {
  return (
    <div className="body">
       <div className="bg">
       <form>
      <div class="headingsContainer">
        <h3>Sign in</h3>
        <p>Sign in with your email and password</p>
      </div>

      <div class="mainContainer">
        <input
          className="inpt"
          type="text"
          placeholder="Enter Email"
          name="username"
          required
        />
        <input
          className="inpt"
          type="password"
          placeholder="Enter Password"
          name="pswrd"
          required
        />
      </div>
      <button className="btn" type="submit">
        Login
      </button>
      <p class="register">
        Not a member? <Link to="/signup">Register here!</Link>
      </p>
    </form>
       </div>
    </div>
  );
};

export default Signin;
