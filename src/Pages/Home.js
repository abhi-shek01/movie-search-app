import React, { useState, useEffect } from 'react';
import  MovieDetails  from '../components/MovieDetails';

  
const Home = () => {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState([]);
	const [searchText, setSearchText] = useState('Moon');
	const API_KEY=process.env.REACT_APP_API_KEY;
	useEffect(() => {
		const fetchMovie = async () => {
			fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${API_KEY}`)
			.then(response => response.json())
			.then(response => {
			setMovie(Object.values(response.results))
			setLoading(false);
			}
			)
			.catch(err => console.error(err));
		};
		fetchMovie();
	}, [searchText]);

	if (loading) {
		return (
			<section className="section loading">
				<h1>Loading...</h1>
			</section>
		);
	}
	return (
		<div>
			<div className="search-container">
				<form className="search-form">
					<label>SEARCH 🔍</label>
					<input
						type="text"
						className="search-field"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						placeholder="Search for your favourite movie here..."
					/>
				</form>
				
			</div>
			{searchText ? (
				<MovieDetails movie={movie} />
			) : (
				<div className="content-container">
					<h4>Please type any movie you wish to search...</h4>
				</div>
			)}
		</div>
	);
};

export default Home;