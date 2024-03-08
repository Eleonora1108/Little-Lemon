function Card(props) {
    return(
        <div>
            <img src={props.image} alt="cardimage"/>
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
            <p>Order a delivery</p>
        </div>
    );
}

export default Card;