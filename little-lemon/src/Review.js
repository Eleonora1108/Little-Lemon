import './CSS/Review.css'

function Review(props){
    return(
        <div className='review-box'>
            <h1>{props.rating}</h1>
            <img src={props.image} className="review-image" alt="review"/>
            <p><b>{props.name}</b></p>
            <p>{props.text}</p>
        </div>
    );
}

export default Review;