import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Confirmation = () => {
  const { id, bookingId } = useParams();
  const location = useLocation();
  const { name, email, mobile } = location.state;

  return (
    <div>
      <h1>Booking Confirmed!</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Movie ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
};

export default Confirmation;
