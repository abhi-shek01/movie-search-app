import React, { useEffect, useMemo, useState } from 'react'
import Movies from './Movies';


const MovieDetails = ({movie}) => {
    const [details,setDetails] = useState([]);
    const [filtered,setFiltered] = useState('1');
    let data=[];

    useEffect(()=>{
        movie.map(m => {
            const movieInfo = {
                id: m.id,
                title: m.title,
                poster: m.poster_path,
                release: m.release_date,
                overview: m.overview,
                rating: m.vote_average
            };
            if(movieInfo.poster)
            data.push(movieInfo)
        })
        setDetails(data)
        data=[]
    },[movie])

    const filter=()=>{
        let value=document.getElementById('filter').value;
        setFiltered(value);
    }

    return (details.length>0) ? (
    <div>
        <label>Filter: </label>
    <select id='filter' onChange={filter} >
        <option  value='1'>ALL</option>
        <option  value='2'>Rating: 0-5</option>
        <option  value='3'>Rating: 5-7</option>
        <option  value='4'>Rating: 7-10</option>
    </select>

    <Movies
     movies={details} 
     filter={filtered}
     />

    </div>
  ) : <div className="content-container">
  <h4>No movies found...</h4>
</div>
}

export default MovieDetails;