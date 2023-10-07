import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const MainPage = () => {
  const [movies, setMovies] = useState([])
  
  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER}/movie/popular`).then((response)=>{
        setMovies(response.data.results)
    });
  }, [])
  console.log(movie)

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`${process.env.REACT_APP_IMAGE}/${movie?.backdrop_path}`} alt={movie?.title}></img>
            <div className='absolute w-full top-[30%] p-4 md:p-8'>
                <h1 className='text-[80px] font-semibold'>{movie?.title}</h1>
                <p className='w-full max-w-[50%] mb-5'>{movie?.overview}</p>
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
  )
}
