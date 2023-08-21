import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/home/home';
import Cart from './components/cart/cart';
import Profile from './components/profile/profile';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
