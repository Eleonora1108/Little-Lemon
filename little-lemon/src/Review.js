function Review(props){
    return(
        <div>
            <h1>{props.rating}</h1>
            <img src={props.image} alt="review"/>
            <p>{props.name}</p>
            <p>{props.text}</p>
        </div>
    );
}

export default Review;