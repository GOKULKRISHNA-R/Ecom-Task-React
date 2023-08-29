import React from "react";
import { Link } from "react-router-dom";
import "./../../css/auth.css";

const Signup = () => {
  return (
    <div className="body">
       <div className="bg">
       <form>
      <div class="headingsContainer">
        <h3>Sign Up</h3>
        <p>Welcome !!!</p>
      </div>

      <div class="mainContainer">
        <input
          className="inpt"
          type="email"
          placeholder="Enter Email"
          name="email"
          required
        />
        <input
          className="inpt"
          type="text"
          placeholder="Enter Username"
          name="username"
          required
        />
        <input
          className="inpt"
          type="tel"
          placeholder="Enter Phone Number"
          name="phone"
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
        Register
      </button>
      <p class="register">
        Are you a member ? <Link to="/signin"> Log In Here !</Link>
      </p>
    </form>
       </div>
    </div>
  );
};

export default Signup;
