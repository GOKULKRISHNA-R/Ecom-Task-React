import React from "react";
import { Link } from "react-router-dom";
import cart from "./../assets/cart.png";
import home from "./../assets/home.png";
import profile from "./../assets/profile.png";

export default function NavBar(props) {
  let title = "";
  let route1 = "";
  let route2 = "";
  let route1img = "";
  let route2img = "";

  if (props.id === 1) {
    title = "Home";
    route1 = "cart";
    route1img = cart;
    route2 = "profile";
    route2img = profile;
  } else if (props.id === 2) {
    title = "Cart";
    route1 = "profile";
    route1img = profile;
    route2 = "home";
    route2img = home;
  } else {
    title = "Profile";
    route1 = "cart";
    route1img = cart;
    route2 = "home";
    route2img = home;
  }

  return (
    <div>
      <div className="navbar">
        <p class="h2">Home</p>
      </div>
      <div className="nav-actions">
        <Link to={route1} className="nav-action-link">
          <img className="nav-action-link-img" src={route1img} alt={route1} />
        </Link>
        <Link to={route2} className="nav-action-link">
          <img className="nav-action-link-img" src={route2img} alt={route2} />
        </Link>
      </div>
    </div>
  );
}
