const API_KEY = process.env.REACT_APP_NETFLIX_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&include_adult=false`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123&include_adult=false`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&include_adult=false`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&include_adult=false`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&include_adult=false`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&include_adult=false`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&include_adult=false&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&include_adult=false`,
};

export default requests;
