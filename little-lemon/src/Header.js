import image from "./Images/restauranfood.jpg"

function Header(){
    return(
        <header>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.
            </p>
            <button>Reserve a table</button>
            <img src={image} alt="restaurant"></img>
        </header>
    );
}

export default Header;