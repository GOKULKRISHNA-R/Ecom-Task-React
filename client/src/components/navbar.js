import React from "react";
import cartImg from "./../assets/cart.png";
import homeImg from "./../assets/home.png";
import profileImg from "./../assets/profile.png";
import logout from "./../assets/logout.png";
import { Link, useNavigate } from "react-router-dom";
import "./../css/navbar.css";

const Navbar = (props) => {
  const navigate = useNavigate();
  if (props.on === "cart") {
    return (
      <div>
        <div className="navbar">
          <p className="h2">Cart</p>
        </div>
        <div className="nav-actions">
          <Link className="link" to="/Profile">
            <img className="linkImg" src={profileImg} alt="profile" />
          </Link>
          <Link className="link" to="/Home">
            <img className="linkImg" src={homeImg} alt="cart" />
          </Link>
        </div>
      </div>
    );
  } else if (props.on === "profile") {
    return (
      <div>
        <div className="navbar">
          <p className="h2">Profile</p>
        </div>
        <div className="nav-actions">
          <Link className="link" to="/Cart">
            <img className="linkImg" src={cartImg} alt="cart" />
          </Link>
          <Link className="link" to="/Home">
            <img className="linkImg" src={homeImg} alt="home" />
          </Link>
          <button
            className="link"
            onClick={() => {
              localStorage.setItem("isLoggedIn", false);
              localStorage.setItem("userId", null);
              localStorage.setItem("userEmail", null);
              localStorage.setItem("userName", null);
              navigate("/signin");
              window.location.reload();
            }}
          >
            <img className="linkImg" src={logout} alt="logout" />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="navbar">
          <p className="h2">Home</p>
        </div>
        <div className="nav-actions">
          <Link className="link" to="/cart">
            <img className="linkImg" src={cartImg} alt="cart" />
          </Link>
          <Link className="link" to="/profile">
            <img className="linkImg" src={profileImg} alt="profile" />
          </Link>
        </div>
      </div>
    );
  }
};

export default Navbar;
