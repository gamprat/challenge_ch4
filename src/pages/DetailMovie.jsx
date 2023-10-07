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

  const genreMovie = detailMovies && detailMovies.genres.map((value) => value.name).join(', ')


  const movePage = async () => {
    const movie = await axios.get(`${process.env.REACT_APP_SERVER}/movie/${move.id}?api_key=${process.env.REACT_APP_KEY}`);
    setDetailMovies(movie.data)
  }

  return (
    <div className='w-full h-[563px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[563px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`${process.env.REACT_APP_IMAGE}/${detailMovies?.backdrop_path}`} alt={detailMovies?.title}></img>
            <div className='absolute w-full top-[30%] p-4 md:p-8'>
                <h1 className='text-[80px] font-semibold'>{detailMovies?.title}</h1>
                <p className='text-[30px] font-semibold'>{genreMovie}</p>
                <p className='w-full max-w-[50%] mb-5'>{detailMovies?.overview}</p>
                <p className='w-full max-w-[50%] mb-5'>{detailMovies?.vote_average} / 10</p>
                <div>
                    <button className='bg-red-600 py-2 px-5 rounded-2xl flex flex-row items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                    WATCH TRAILER</button>
                </div>
            </div>
        </div>
    </div>
  );
}
