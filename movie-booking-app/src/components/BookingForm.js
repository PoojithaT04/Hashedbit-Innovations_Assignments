import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 100000);
    navigate(`/confirmation/${id}/${bookingId}`, { state: { name, email, mobile } });
  };

  return (
    <div>
      <h1>Book Seat for Movie {id}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Mobile:
          <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
