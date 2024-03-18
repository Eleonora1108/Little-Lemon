import Logo from "./Images/Logo.png"
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav(){

  const [click, setClick] = useState(false)

  const handleClick = ()=> setClick(!click)
  const closeMobileMenu = () => setClick(false)

    return(
        <nav>
            <div className='nav-container'>
                <div className="navimage">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className="navlist">
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to='/menu' className="nav-links" onClick={closeMobileMenu}>
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to='/reservations' className="nav-links" onClick={closeMobileMenu}>
                                Reservations
                            </Link>
                        </li>
                        <li>
                            <Link to='/order-online' className="nav-links" onClick={closeMobileMenu}>
                                Order online
                            </Link>
                        </li>
                        <li>
                            <Link to='/log-in' className="nav-links" onClick={closeMobileMenu}>
                                Log in
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;