import axios from "axios";

const apiKey = process.env.REACT_APP_KEY
const mainUrl = process.env.REACT_APP_SERVER

export const getDataMovie = async () => {
    const movie = await axios.get(`${mainUrl}/movie/popular?api_key=${apiKey}`);
    return movie.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(`${mainUrl}/search/movie?query=${q}&api_key=${apiKey}`);
  return search.data
};