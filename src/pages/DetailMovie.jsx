import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// https://api.themoviedb.org/3/movie/968051?api_key=9e7527faab160348ac8893a2623869b5

export const DetailMovie = () => {
  const move = useParams()
  const [detailMovies, setDetailMovies] = useState("")  

  useEffect(() => {
   movePage()
  }, [move.id])
  console.log(detailMovies)

//   async function pindahHalaman () {
//     const movie = await axios(`${process.env.REACT_APP_SERVER}/movie/${move.id}?api_key=${process.env.REACT_APP_KEY}`);
//     setDetailMovies(movie.data) 
//   }  


  const movePage = async () => {
    const movie = await axios.get(`${process.env.REACT_APP_SERVER}/movie/${move.id}?api_key=${process.env.REACT_APP_KEY}`);
    setDetailMovies(movie.data)
  }

  return (
    <div>
      <div>{detailMovies.title}</div>
      <div>{detailMovies.overview}</div>
    </div>
  );
}
