import React from 'react';

const Movies = props => {
   return <div className="movies">
        Tipo de Películas: {props.match.params.movieType}
    </div>
}

export default Movies;