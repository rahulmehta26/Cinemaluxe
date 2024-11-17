import axios from "axios";
import {apiBaseURL, apiKey} from '../constant/index';


const trendindMoviesEndPoint = `${apiBaseURL}/trending/movie/day?language=en-US&api_key=${apiKey}`
const upcomingMoviesEndPoint = `${apiBaseURL}/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`
const topRatedMoviesEndPoint = `${apiBaseURL}/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`