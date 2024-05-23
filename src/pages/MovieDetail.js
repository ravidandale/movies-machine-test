import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail, fetchMovieCast } from '../api';
import CastList from '../components/CastList';
import '../index.css'; 

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const loadMovieDetail = async () => {
      const data = await fetchMovieDetail(id);
      if (data) {
        setMovie(data);
      }
    };

    const loadMovieCast = async () => {
      const data = await fetchMovieCast(id);
      if (data) {
        setCast(data.cast);
      }
    };

    loadMovieDetail();
    loadMovieCast();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail-container">
      <div className="movie-info">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-detail-poster"
        />
        <div className="movie-detail-content">
          <h2>{movie.title}</h2>
          
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}/10</p>
          <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
          <p><strong>Overview:</strong>{movie.overview}</p>
        </div>
      </div>
      <CastList cast={cast} />
    </div>
  );
};

export default MovieDetail;
