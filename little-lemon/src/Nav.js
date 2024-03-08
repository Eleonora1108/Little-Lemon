import Logo from "./Images/Logo.png"

function Nav(){
    return(
        <nav>
            <img src={Logo} alt="logo"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order online</li>
                <li>Log in</li>
            </ul>
        </nav>
    );
}

export default Nav;