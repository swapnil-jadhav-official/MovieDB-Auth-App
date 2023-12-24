import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../Requests';

const SearchMovie = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchMovie, setSearchMovie] = useState([]);

    const searchMovieURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

    useEffect(() => {
        axios.get(searchMovieURL).then(res => {
            setSearchMovie(res.data?.results)
            console.log(res.data?.results)
        })
    }, [searchMovieURL])

    function handleSearch(e) {
        setSearchQuery(() => e.target.value);
    }
    
    return (
        <div className='py-[500px]'>
            <input type="text" placeholder='Enter movie name' />
            <button onClick={handleSearch}>Search Movie</button>
            <ul>
                {searchMovie?.map(movie => (
                    <h3>{movie?.title}</h3>
                ))}
            </ul>
        </div>
    )
}

export default SearchMovie;