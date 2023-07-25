import React, { useMemo, useState } from 'react'
import Movie from './Movie'
import Pagination from '../components/Pagination';

const Movies = ({movies, filter}) => {    
    const [currentPage, setCurrentPage] = useState(1);
	  let pageSize=3;
    let filteredMovies=movies;
    const compare = ( a, b ) => {
        if ( a.release < b.release ){
          return -1;
        }
        if ( a.release > b.release ){
          return 1;
        }
        return 0;
      }

      switch(filter)
      {
        case '2':
            {
                filteredMovies=movies.filter(movie=>(movie.rating<=5.00));
                break;
            }
        case '3':
            {
                filteredMovies=movies.filter(movie=>(movie.rating>=5.00 && movie.rating<7.00));
                break;
            }
        case '4':
            {
                filteredMovies=movies.filter(movie=>(movie.rating>=7.00 && movie.rating<=10.00));
                break;
            }
      }
      filteredMovies.sort(compare);

  const currentMovieList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return filteredMovies.slice(firstPageIndex, lastPageIndex);
  }, [currentPage,filteredMovies]);

    useMemo(()=>{
    setCurrentPage(1);
    },[filter])
    
    return (<>
    <Pagination 
		currentPage={currentPage}
		totalCount={filteredMovies.length}
		pageSize={pageSize}
		className="pagination-bar"
		onPageChange={page => setCurrentPage(page)}
	/>
        {currentMovieList.map((movie) => (
        <Movie movie={movie} key={movie.id} />
    ))}
    </>
)
}

export default Movies