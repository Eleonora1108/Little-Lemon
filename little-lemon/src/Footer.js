import footerlogo from "./Images/logogreen.png"

function Footer() {
    return(
        <footer>
            <img src={footerlogo} alt="footerlogo"/>
            <p>Doormat navigation
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Online orders</li>
                    <li>Log in</li>
                </ul>
            </p>
            <p>Contacts
                <ul>
                    <li>Adress</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </p>
            <p>Social Media Links
                <ul>
                    <li>Adress</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>
            </p>
        </footer>
    );
}

export default Footer;