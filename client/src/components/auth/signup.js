import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../../css/auth.css";
import Axios from "axios";

const Signup = () => {
  const [name, setName] = useState("a");
  const [phone, setPhone] = useState("b");
  const [mail, setMail] = useState("c");
  const [password, setPass] = useState("d");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const k = await Axios.post("http://localhost:5500/signup", {
      name,
      phone,
      mail,
      password,
    })
      .then((e) => e)
      .catch((e) => {
        alert(e);
        return e ;
      });
      
      if( k.response !== undefined && k.response.status === 500) return 0 ;

      if(k.status === 200 ) navigate("/signin");
  };

  return (
    <div className="body">
      <div className="bg">
        <form onSubmit={onSubmit} className="authform">
          <div className="headingsContainer">
            <h3>Sign Up</h3>
            <p>Welcome !!!</p>
          </div>

          <div className="mainContainer">
            <input
              className="inpt"
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              onChange={(e) => setMail(e.target.value)}
            />
            <input
              className="inpt"
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="inpt"
              type="tel"
              placeholder="Enter Phone Number"
              name="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
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
            Register
          </button>
          <p className="register">
            Are you a member ? <Link to="/signin"> Log In Here !</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
