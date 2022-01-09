import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

//eg:-  instance.get('/something'); => 'https://api.themoviedb.org/3/something'
