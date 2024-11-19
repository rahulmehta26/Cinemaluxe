import axios from "axios";
import {apiBaseURL, apiKey, imgBaseURL, imgBaseURL185, imgBaseURL342, imgBaseURL500} from '../constant/index';


const trendindMoviesEndPoint = `${apiBaseURL}/trending/movie/day?language=en-US&api_key=${apiKey}`
const upcomingMoviesEndPoint = `${apiBaseURL}/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`
const topRatedMoviesEndPoint = `${apiBaseURL}/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`


const movieDetailEndpoint = (id) => `${apiBaseURL}/movie/${id}?language=en-US&api_key=${apiKey}`
const movieCreditEndpoint = (id) => `${apiBaseURL}/movie/${id}/credits?language=en-US&page=1&api_key=${apiKey}`
const similarMovieEndpoint= (id) => `${apiBaseURL}/movie/${id}/similar?language=en-US&page=1&api_key=${apiKey}`

const personDetails = id => `${apiBaseURL}/person/${id}?append_to_response=24585&language=en-US&api_key=${apiKey}`
const personMovie = id => `${apiBaseURL}/person/${id}/movie_credits?language=en-US&api_key=${apiKey}`

const movieSearch = `${apiBaseURL}/search/movie?include_adult=false&language=en-US&page=1&api_key=${apiKey}`

const favouriteMovie = id => `${apiBaseURL}/account/${id}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${apiKey}`


export const unavaiblePerson = 'https://img.freepik.com/free-photo/3d-illustration-young-business-man-with-funny-expression-his-face_1142-55156.jpg?t=st=1731928539~exp=1731932139~hmac=d6c02db6cbb06c14f7ee293fa69cf5cc1e5025f9e6080e3df37fbb3ef3e82aa4&w=740'
export const unavaiblePoster = 'https://img.freepik.com/free-photo/view-3d-cinema-film-reel_23-2151069470.jpg?ga=GA1.1.1465415651.1664510035&semt=ais_hybrid'

export const imgPath500 = path => path ? `${imgBaseURL500}${path}` : null;
export const imgPath185 = path => path ? `${imgBaseURL185}${path}` : null;
export const imgPath342 = path => path ? `${imgBaseURL342}${path}` : null;



const apiCall = async (endpoint, params) => {

    const options = {
        method: 'GET',
        url:endpoint,
        params: params? params: {}
    }

    try {
        
        const res = await axios.request(options);

        return res.data;
    } catch (error) {
        
        console.log('error', error);
        return{}
    }
};

export const fetchTrendingMovies = () => {

    return apiCall(trendindMoviesEndPoint);
};

export const fetchUpcomingMovies = () => {

    return apiCall(upcomingMoviesEndPoint);
};

export const fetchTopRatedMovies = () => {

    return apiCall(topRatedMoviesEndPoint);
};

export const fetchMovieDetails = (id) => {

    return apiCall(movieDetailEndpoint(id));
};

export const fetchMovieCredit = (id) => {

    return apiCall(movieCreditEndpoint(id));
};

export const fetchSimilarMovies = (id) => {

    return apiCall(similarMovieEndpoint(id));
};

export const fetchPersonDetails = (id) => {

    return apiCall(personDetails(id));
};

export const fetchPersonMovies = (id) => {

    return apiCall(personMovie(id));
};

export const fetchMovieSearch = params => {

    return apiCall(movieSearch, params);
};

export const fetchFavouritesMovie = (id) => {

    return apiCall(favouriteMovie(id));
};