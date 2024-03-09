import footerlogo from "./Images/logogreen.png"

function Footer() {
    return(
        <footer>
            <div className="footermargin">
                <article className="footerlogo">
                    <img className="footerimage" src={footerlogo} alt="footerlogo"/>
                </article>
                <article id="footertext">
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
                </article>
                <article id="footertext">
                    <p>Contacts
                        <ul>
                            <li>Adress</li>
                            <li>Phone number</li>
                            <li>email</li>
                        </ul>
                    </p>
                </article>
                <article id="footertext">
                    <p>Social Media Links
                        <ul>
                            <li>Adress</li>
                            <li>Phone number</li>
                            <li>email</li>
                        </ul>
                    </p>
                </article>
            </div>
        </footer>
    );
}

export default Footer;