import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Cart from "./components/cart/cart";
import Profile from "./components/profile/profile";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import ProtectedRoutes from "./protectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes isLoggedIn={true} />}>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/profile" element={<Profile />} />
        </Route>
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <div style={{"margin":"200px"}}>
              <h3>No match for Provided Url</h3>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
