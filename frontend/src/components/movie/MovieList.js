import React from 'react';
import MovieItem from "components/movie/MovieItem";

function MovieList({ movies }) {
  // console.log({ movies });
  return (
    <>
      <ul>
        {Array.isArray(movies) && movies.map(movie => {
          return (
          <MovieItem
            key={movie.id}
            movie={movie}
          />
          )
        })}
      </ul>
    </>
  )

}


export default MovieList;
