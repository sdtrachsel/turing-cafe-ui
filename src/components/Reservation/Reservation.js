import React from "react";
import './Reservation.css'

const Reservation = ({ resDetails }) => {

  return (
    <div className="res-card">
      <p>{resDetails.name}</p>
      <p>{resDetails.date}</p>
      <p>{resDetails.time}</p>
      <p>Number of guests: {resDetails.number}</p>
    </div>
  )
}

export default Reservation;