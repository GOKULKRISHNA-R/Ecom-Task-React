import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";
import Profile from "./components/profile/profile";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    setIsloggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Signin />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Signin />} />
        <Route path="/cart" element={isLoggedIn ? <Cart /> : <Signin />} />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Signin />}
        />
        <Route path="/signin" element={isLoggedIn ? <Home /> : <Signin />} />
        <Route path="/signup" element={isLoggedIn ? <Home /> : <Signup />} />
        <Route
          path="*"
          element={
            <div style={{ margin: "200px" }}>
              <h3>No match for Provided Url</h3>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
