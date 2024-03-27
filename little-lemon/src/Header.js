import { Link } from "react-router-dom";
import image from "./Images/restauranfood.jpg"

function Header(){
    return(
        <header>
            <section className='header-wrapper'>
                <section id="headerright">
                    <div className='header-text'>
                        <h1 className="title" id="markazi">Little Lemon</h1>
                        <h2 className="subtitle" id="markazi">Chicago</h2>
                        <p className="headerp">
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </p>
                    </div>
                    <div className='hader-button'>
                        <button ><Link to='/reservations'className="link-reservations">Reserve a table</Link></button>
                    </div>
                </section>
                <section id="headerleft">
                    <img className="headerimage" src={image} alt="navimage"/>
                </section>
            </section>
        </header>
    );
}

export default Header;