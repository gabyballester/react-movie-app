import React from "react";
import './Movie.scss';
const Movie = ({ movie }) => {
  // esto es lo mismo que props.movie
  const width = "300";
  return (
    <div className="movie">
      <h4>{movie.title}</h4>
      <img
        src={"http://image.tmdb.org/t/p/w" + width + movie.poster_path}
        alt="poster_film"
      />
      <p>{movie.vote_average}</p>
    </div>
  );
};
export default Movie;