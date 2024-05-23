import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination'; 

const SearchResults = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1); 

    useEffect(() => {
        const loadSearchResults = async () => {
            const data = await searchMovies(query, page);
            if (data) {
                setMovies(data.results);
                setTotalPages(data.total_pages); 
            }
        };
        loadSearchResults();
    }, [query, page]);

    const handlePageChange = (newPage) => {
        setPage(newPage); 
    };

    return (
        <div>
            <h2>Search Results for "{query}"</h2>
            <div className="movie-list">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            
            <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange} 
            />
        </div>
    );
};

export default SearchResults;
