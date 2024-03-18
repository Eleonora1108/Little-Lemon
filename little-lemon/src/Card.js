function Card(props) {
    return(
        <div className="card">
            <div>
                <img className="cardimage" src={props.image} alt="cardimage"/>
            </div>
            <div className="text">
                <div className="titleprice">
                    <h2 id="markazi">{props.title}</h2>
                    <p className="price">{props.price}</p>
                </div>
                <div>
                    <p className="description">{props.description}</p>
                </div>
                <div className="delivery">
                    <p>Order a delivery </p>
                </div>
            </div>
        </div>
    );
}

export default Card;