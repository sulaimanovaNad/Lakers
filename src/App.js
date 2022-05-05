import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { About } from './pages/About/About';
import Home from './pages/Home/Home';
import logo from './image/Logo.png'
import search from './image/Search.png'
import favorite from './image/Favorite.png'
import cart from './image/Cart.png'
import { SignUp } from './pages/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <nav className='navbar'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/signUp">SignUp</Link>
            <a href="#">Teams</a>
            <a href="#">App</a>
          </div>
          <div className='icon'>
            <img src={search} alt="" />
            <img src={favorite} alt="" />
            <img src={cart} alt="" />
          </div>
        </nav>
        <div className="collaborators">
          <p>Jersey</p>
          <p>Nike & nba collaboration</p>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signUp" element={<SignUp/>} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
