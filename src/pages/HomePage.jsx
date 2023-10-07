import React, { useEffect, useState } from 'react'
import {getDataMovie, searchMovie} from '../utils/api'
import { MainPage } from '../assets/components/MainPage'
import { DetailMovie } from './DetailMovie'

export const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getDataMovie().then((result) => {
        setMovies(result)
    })
  }, [])

  const MovieList = () => {
    return (
      <div className="flex flex-wrap justify-center">
        {movies.map((movie, i) => (
          <div
            key={i}
            className="relative w-[200px] h-[300px] m-4 rounded-lg overflow-hidden cursor-pointer"
          >
            <img
              src={`${process.env.REACT_APP_IMAGE}/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-end pb-3 text-white">
              <h3 className="text-center">{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }

  const search  = async (q) => {
    if (q.length > 0) {
        const query = await searchMovie(q)
        setMovies(query.results)
    }
  }

  return (
    <div className="bg-[#1e1e2a]">
      <div className="flex justify-between px-4 py-4 items-center">
        <div>
          <h1 className="text-[40px] font-bold text-[red]">Movielist</h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          <input
            className="text-white rounded-2xl border-[red] border-[2px] bg-transparent w-[350px] p-2 placeholder-[white]"
            placeholder="What do you want to watch?"
            onChange={({target}) => search(target.value)}
          ></input>
          <button
            type="submit"
            className="absolute text-white items-center ml-[300px]"><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"><path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="flex space-x-2 items-center">
          <a className="border-[red] border-[2px] bg-transparent  px-[10px] py-[5px] rounded-xl text-[red] cursor-pointer" href="#">Login</a>
          <a className="border-[red] border-[2px] bg-[red]  px-[10px] py-[5px] rounded-xl text-[white] cursor-pointer" href="#">Register</a>
        </div>
      </div>
      <MainPage></MainPage>
      <div className="flex flex-row justify-between px-[90px] items-center mt-7">
        <h3 className="text-lg text-[white]">Popular Movies</h3>
        <a className="text-[red] text-sm" href="#">
          See All Movies
        </a>
      </div>
      <MovieList></MovieList>
    </div>
  );
}
