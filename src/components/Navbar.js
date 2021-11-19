import React, {useState} from 'react';
import pizzaLogo from '../img/pizzaLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);
    const openItem = () => setClick(!click);
    const closeItem = () => setClick(false);
    return (
        <div className="navbar">
            <div className="leftSide">
                <Link to="/">
                <img src={pizzaLogo} alt="" onClick={closeItem}/>
                </Link>
            </div>
            <div className="mobileIcon" onClick={openItem}>
                <i class={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <div className={click ?'rightSide menuOpen' : 'rightSide '}>
                <li className="navItem">
                    <Link to="/" onClick={closeItem}>Home</Link>
                </li>
                <li className="navItem">
                    <Link to="/menu" onClick={closeItem}>Menu</Link>
                </li>
                <li className="navItem">
                    <Link to="/about" onClick={closeItem}>About</Link>
                </li>
                <li className="navItem">
                    <Link to="/contact" onClick={closeItem}>Contact</Link>
                </li>
            </div>

        </div>
    )
}

export default Navbar
