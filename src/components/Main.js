// Banner (hero section)

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_REQUESTS from '../Requests';
import { backdrop_URL } from '../Requests';

const Main = () => {
  const [movies, setMovies] = useState([]);

//Find a random movie for the banner
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios
        .get(API_REQUESTS.requestSciFi)
        .then(response => (
            setMovies(response.data.results)
        ))
  }, [])

//Truncate the movie overview (description) to a certain no. of characters
  const truncateString = (str, num) => {
    if (str?.length > num) {
        return str.slice(0, num) + "...";
    }
    else {
        return str;
    }
  }

  return (
    <div className='w-full h-[550px]'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={backdrop_URL + randomMovie?.backdrop_path} alt={randomMovie?.title} />
            <div className='text-white px-6 absolute top-[20%] py-4'>
                <h1 className='text-3xl md:text-5xl font-bold'>{randomMovie?.title ? randomMovie?.title : randomMovie?.original_title}</h1>
                <div className='py-4'>
                    <button className='border rounded-sm bg-gray-300 text-black px-5 py-2 border-gray-300'>Play</button>
                    <button className='border rounded-sm text-white px-5 py-2 border-gray-300 ml-4'>Watch Later</button>
                </div>
                <p className='text-stone-400 mb-2'>Released: {randomMovie?.release_date}</p>
                <p className='text-sm md:max-w-[70%] lg:max-w-[50%] xl:max-w-[50%]'>
                    {truncateString(randomMovie?.overview, 160)}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main;