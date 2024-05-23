import React from 'react';

const MovieInfo = ({ movie }) => {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>overview: {movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieInfo;
