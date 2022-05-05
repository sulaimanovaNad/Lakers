import './Header.css'
import logo from '../../image/Logo.png'
import search from '../../image/Search.png'
import favorite from '../../image/Favorite.png'
import cart from '../../image/Cart.png'
import circle from '../../image/circle.png'
import pict from '../../image/Pict.png'

export function Header() {
    return (
        <header>
            <div className='header'>
                <nav className='navbar'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='nav'>
                        <a href="#">Man</a>
                        <a href="#">Woman</a>
                        <a href="#">Jersey</a>
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
            <div className="title">
                <div>
                    <p> Jersey</p>
                </div>
                <div className='circle'>
                    <img src={circle} alt="" />
                </div>
                <div>
                    <p>Nba</p>
                </div>
            </div>
            <div className='description'>
                <p>
                    whichever <span className="blue">nba</span> <span className="red">team</span> your support,
                    get your jersey here today.
                </p>
            </div>
            <div className='pict'>
                <img src={pict} alt="" />
            </div>
        </header>
    )
}

