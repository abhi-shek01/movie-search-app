import React from 'react';
import './MovieCard.css';

const Movie = ({ movie }) => {
	const IMAGE_URL = "https://image.tmdb.org/t/p/w154";

	return (
		<div className="card">
		<img
		  className="card--image"
		  src={IMAGE_URL+movie.poster}
		  alt={movie.title + " poster"}
		/>
  
		<div className="card--content">
		  <h3 className="card--title">{movie.title}</h3>
		  <p>
			<small className="card--date">
			  Release Date: {movie.release}
			</small>
		  </p>
		  <p>
			<small className="card--rating">
			  Rating: <b>{movie.rating}</b>
			</small>
		  </p>
		  <p className="card--desc">{movie.overview}</p>
		</div>
	  </div>
	);
};

export default Movie;