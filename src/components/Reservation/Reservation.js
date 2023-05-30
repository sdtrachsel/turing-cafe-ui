import React from "react";
import './Reservation.css'

const Reservation = ({ resDetails, cancelReservation }) => {

  return (
    <div className="res-card" >
      <p>{resDetails.name}</p>
      <p>{resDetails.date}</p>
      <p>{resDetails.time}</p>
      <p>Number of guests: {resDetails.number}</p>
      <button className="cancel-button" onClick={()=>cancelReservation(resDetails.id)}>Cancel</button>
    </div>
  )
}

export default Reservation;