import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies = (props) => {
  const movieType = props.match.params.movieType;
  const api_key = "6944b42404ae9b9ce5b0c403ec0cd6a7";
  const language = "es-ES";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieType}?api_key=${api_key}&language=${language}`
      )
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, [movieType]);
    return <div className="movies">
        Tipo de Películas: {movieType}
    </div>;
};

export default Movies;
