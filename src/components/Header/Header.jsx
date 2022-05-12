import './Header.css'
import {Link} from 'react-router-dom'
import logo from '../../image/Logo.png'
import favorite from '../../image/Favorite.png'
import cart from '../../image/Cart.png'
 
export default function Header () {
    return (
        <div className='header'>
        <nav className='navbar'>
          <div className='logo'>
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className='nav'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/signUp">SignUp</Link>
            <a href="#">Teams</a>
            <a href="#">App</a>
          </div>
          <div className='icon'>
            <img src={favorite} alt="" />
            <img src={cart} alt="" />
          </div>
        </nav>
        <div className="collaborators">
          <p>Jersey</p>
          <p>Nike & nba collaboration</p>
        </div>
      </div>
    )
}