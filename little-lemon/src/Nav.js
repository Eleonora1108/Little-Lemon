import Logo from "./Images/Logo.png"

function Nav(){
    return(
        <nav>
            <div className="navimage"><img src={Logo} alt="logo"/></div>
            <div className="navlist">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order online</li>
                    <li>Log in</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;