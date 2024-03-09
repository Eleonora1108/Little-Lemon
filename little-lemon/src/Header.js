import image from "./Images/restauranfood.jpg"

function Header(){
    return(
        <header>
            <section id="headerright">
                <h1 className="title" id="markazi">Little Lemon</h1>
                <h2 className="subtitle" id="markazi">Chicago</h2>
                <p className="headerp">
                    We are a family owned Mediterranean restaurant,
                    focused on traditional recipes served with a modern twist.
                </p>
                <button>Reserve a table</button>
            </section>
            <section id="headerleft">
                <img className="headerimage" src={image} alt="navimage"/>
            </section>
        </header>
    );
}

export default Header;