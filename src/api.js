import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchMovies = async (type, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${type}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                page: page,
            },
        });
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

const fetchMovieDetail = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        });
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

const fetchMovieCast = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
            },
        });
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

const searchMovies = async (query, page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/search/movie`, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                query: query,
                page: page,
            },
        });
        return response.data;
    } catch (error) {
        handleAxiosError(error);
    }
};

const handleAxiosError = (error) => {
    if (error.response) {
        console.error('Error response:', error.response.data);
    } else if (error.request) {
        console.error('Error request:', error.request);
    } else {
        console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
};

export {
    fetchMovies,
    fetchMovieDetail,
    fetchMovieCast,
    searchMovies
};
