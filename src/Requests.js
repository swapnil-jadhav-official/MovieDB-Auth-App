export const API_KEY = "4dff114364cc0c22d04c95af2496e25c";

export const backdrop_URL = "https://image.tmdb.org/t/p/original";
export const backdrop_URL_Small = "https://image.tmdb.org/t/p/w500";

export const poster_URL = "https://image.tmdb.org/t/p/original";

const API_REQUESTS = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
    requestSciFi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
    requestWar: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    requestCrime: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
    requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
    requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    requestAdventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
    requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
}

export const getMovieDetails = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`

export default API_REQUESTS;