import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Cart from './Cart';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
