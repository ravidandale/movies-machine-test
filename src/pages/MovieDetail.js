import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail, fetchMovieCast } from '../api';
import CastList from '../components/CastList';
import MovieInfo from '../components/MovieInfo';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const loadMovieDetail = async () => {
            const movieData = await fetchMovieDetail(id);
            if (movieData) {
                setMovie(movieData);
            }
            const castData = await fetchMovieCast(id);
            if (castData) {
                setCast(castData.cast);
            }
        };
        loadMovieDetail();
    }, [id]);

    if (!movie) return <div>Loading..</div>;

    return (
        <div>
            <MovieInfo movie={movie} />
            <CastList cast={cast} />
        </div>
    );
};

export default MovieDetail;
