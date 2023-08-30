import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../../css/auth.css";
import Axios from "axios";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await Axios.post("http://localhost:5500/signin", {
      email,
      password,
    });
    if( res.status === 200 ) {
      alert("yes");
      localStorage.setItem("isLoggedIn",true);
      localStorage.setItem("userId",res.data.userId);
      localStorage.setItem("userEmail",res.data.emailId);
      localStorage.setItem("userName",res.data.userName);
      navigate("/home");
      window.location.reload();
    };

  };

  return (
    <div className="body">
      <div className="bg">
        <form onSubmit={onSubmit} className="authform">
          <div className="headingsContainer">
            <h3>Sign in</h3>
            <p>Sign in with your email and password</p>
          </div>

          <div className="mainContainer">
            <input
              className="inpt"
              type="text"
              placeholder="Enter Email"
              name="username"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inpt"
              type="password"
              placeholder="Enter Password"
              name="pswrd"
              required
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Login
          </button>
          <p className="register">
            Not a member? <Link to="/signup">Register here!</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
