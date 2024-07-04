import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = { id, title: `Movie ${id}`, description: `Description for Movie ${id}` };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>
        <button>Book Seat</button>
      </Link>
    </div>
  );
};

export default MovieDetails;
