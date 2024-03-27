import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from "./utils/mockAPI.js";
import './CSS/BookingForm.css'
import tables from './Images/tables.jpg'

export const updateTimes = (state, action) => {
    switch (action.type) {
        case "update_times":
            return ({...state,
                times: fetchAPI(action.date)});
        default:
            return state;
    };
};

export const initializeTimes = () => {
    const today = new Date().toJSON().slice(0, 10);
    return ({times: fetchAPI(today)});
};

const Booking = () => {
    const navigate = useNavigate();
    const today = new Date().toJSON().slice(0, 10);

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const [date, setDate] = useState(today);
    const [time, setTime] = useState(availableTimes.times[0]);
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("birthday");
    const [errorMessage, setErrorMessage] = useState({date: "", time: "", guests: "", occasion: ""})

    const getIsFormValid = () => {
        let [year, month, day] = String(date).split('-');
        let [todayYear, todayMonth, todayDay] = String(today).split('-');
        let isInPast = (year < todayYear) || (year === todayYear && ((month < todayMonth) || (month === todayMonth && day < todayDay)));
        return (
            date && !(isInPast) && time && guests && (guests > 0 && guests < 11) && occasion
        );
    };
    const clearForm = () => {
        setDate(today);
        setTime(availableTimes.times[0]);
        setGuests("1");
        setOccasion("birthday");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const values = {date: date, time: time, guests: guests, occasion: occasion};
        console.log(values);
        let successfulSubmit = submitAPI(values);
        if (successfulSubmit) {
            clearForm();
            navigate("/confirmed", {state: values});
        }
    };

    return (
      <div className='form-container'>
      <div className='form-wrapper'>
          <form className='reservation-form' onSubmit={handleSubmit}>
              <div className='tables-wrapper'>
                <img src={tables} alt='tables'/>
              </div>
              <h1 id='markazi'>FIND YOUR TABLE</h1>
              <label htmlFor="res-date">Choose date</label>
              <input
                  type="date"
                  id="res-date"
                  required
                  onChange={(e) => {
                    setDate(e.target.value);
                    let [year, month, day] = String(e.target.value).split('-');
                    let [todayYear, todayMonth, todayDay] = String(today).split('-');
                    let isInPast = (year < todayYear) || (year === todayYear && ((month < todayMonth) || (month === todayMonth && day < todayDay)));
                    if (isInPast) {
                        setErrorMessage({...errorMessage, date: "Date cannot be in the past."});
                    }
                    else {
                        setErrorMessage({...errorMessage, date: ""});
                    }
                    dispatch({date: e.target.value, type: "update_times"});
                }}/>
              <div className="date-error">{errorMessage.date}</div>
              <label htmlFor="res-time">Choose time</label>
              <select
                  id="res-time"
                  required
                  onChange={(e) => {
                    setTime(e.target.value);
                }}>
                {availableTimes.times.map((time) => (
                    <option key={time}>{time}</option>
                ))}
              </select>
              <label htmlFor="guests">Number of guests</label>
              <input
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  id="guests"
                  required
                  value={guests}
                  onChange={(e) => {
                    setGuests(e.target.value);
                    if (e.target.value < 1 || e.target.value > 10) {
                        setErrorMessage({...errorMessage, guests: "The number of guests must be between 1 and 10."});
                    }
                    else {
                        setErrorMessage({...errorMessage, guests: ""});
                    }
                }}/>
              <div className="guests-error">{errorMessage.guests}</div>
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" value={occasion} required onChange={(e) => setOccasion(e.target.value)}>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
              </select>
              <div className="occasion-error">{errorMessage.occasion}</div>
              <div className='form-button-wrapper'>
                <button className='form-button' type="submit" aria-label="On Click" disabled={!getIsFormValid()}>Make Your Reservation</button>
              </div>
            </form>
      </div>
  </div>
);
}

export default Booking;
