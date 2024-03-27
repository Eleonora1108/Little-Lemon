import { useLocation } from 'react-router-dom';
import './CSS/BookingConfirmation.css'
import fireworks from './Images/fireworks.jpg'

const BookingConfirmation = () => {
    const { state } = useLocation();

    return (
        <div className='confirmation-container'>
            <div className="confirmation-text">
                <div className='fireworks-wrapper'>
                    <img src={fireworks} alt='fireworks'/>
                </div>
                <h2 id='markazi' className='confirmation-title'>SUCCESS!</h2>
                <h3 id= 'markazi'>THANK YOU FOR CHOOSING LITTLE LEMON!<br></br>HERE IS YOUR RESERVATION:</h3>
                <p><b>Date:</b> {state.date}</p>
                <p><b>Time:</b> {state.time}</p>
                <p><b>Number fo guests:</b> {state.guests}</p>
                <p><b>Occasion:</b> {state.occasion}</p>
            </div>
        </div>
    );
}

export default BookingConfirmation;
