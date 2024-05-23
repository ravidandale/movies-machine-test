import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const TopRated = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await fetchMovies('top_rated', page);
            if (data) {
                setMovies(data.results);
                setTotalPages(data.total_pages);
            }
        };
        loadMovies();
    }, [page]);

    return (
        <div>
            <h2>Top Rated Movies</h2>
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={(newPage) => setPage(newPage)}
            />
        </div>
    );
};

export default TopRated;
