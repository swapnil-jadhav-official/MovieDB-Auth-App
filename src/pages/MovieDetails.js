import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';
import Review from '../components/Review';
import { API_KEY } from '../Requests';
import { backdrop_URL, poster_URL } from '../Requests';
import { FaStar } from 'react-icons/fa';

const MovieDetails = () => {
    const [info, setInfo] = useState([]);
    const [cast, setCast] = useState([]);
    const { id } = useParams(); 
    const [reviews, setReviews] = useState([]);
    const [movies, setMovies] = useState([]);

    const movieReviewsURL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const movieDetailURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const movieCastURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    const similarMoviesURL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;

    useEffect(() => {
        axios
            .get(movieDetailURL)
            .then(res => {
                setInfo(res.data)
                window.scrollTo(0, 0)
            })
    }, [movieDetailURL])

    useEffect(() => {
        axios
            .get(movieCastURL)
            .then(res => setCast(res.data))
    }, [movieCastURL])

    useEffect(() => {
        axios
            .get(movieReviewsURL)
            .then(res => {
                setReviews(res.data)
            })
    }, [movieReviewsURL])

    useEffect(() => {
        axios
            .get(similarMoviesURL)
            .then(res => {
                setMovies(res.data)
            })
    }, [similarMoviesURL])

    // Slider functionality - giving each row a unique id
    const slideLeft = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 600;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 600;
    }
    
    return (
        <section className='text-white'>
            <div className='absolute w-full h-[450px] bg-gradient-to-t from-black'></div>
            <img 
                src={backdrop_URL + info?.backdrop_path} 
                className="w-full h-[450px] object-cover"
                alt={info?.title} 
            />
            <div className='px-6 flex flex-col sm:flex-row justify-center'>
                <div className='w-[200px] sm:w-[300px] mb-8 sm:mb-0 md:w-[400px] mx-auto sm:mx-0 sm:mr-10 md:mr-14'>
                    <img
                        src={poster_URL + info?.poster_path}
                        className="rounded shadow-lg hover:scale-105 duration-200"
                        alt={info?.title}
                    />
                </div>
                <div className='mb-6 sm:mb-0 sm:pr-10 md:pr-20'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold mb-6'>
                        {info?.title ? info?.title : info?.original_name} ({info?.release_date?.slice(0, 4)})
                    </h1>

                    {/* Rating and runtime */}
                    <div className='flex items-center text-2xl lg:text-2xl my-6'>
                        <p className='mr-2'>{Math.round(info?.vote_average)}</p> 
                        <p><FaStar className='text-yellow-400' /></p>
                        <div>
                            <p>&nbsp;| {Math.floor(info?.runtime/60)} Hrs {info?.runtime % 60} Minutes</p>   
                        </div>
                    </div>

                    {/* Languages */}
                    <ul className='text-stone-300 flex my-6'>
                        {info?.spoken_languages?.map((lang, index) => (
                            <li key={lang?.name} className='mr-2'>{lang?.english_name}{index === info?.spoken_languages?.length - 1 ? "" : ","}</li>
                        ))}
                    </ul>

                    {/* Genre */}
                    <ul>
                        {info?.genres?.map(genre => (
                            <li 
                                key={genre?.id}
                                className='inline-block text-neutral-200 bg-stone-700 px-3 py-1 rounded mr-2 mb-2 xl:mb-0'
                            >
                                {genre?.name}
                            </li>
                        ))}
                    </ul>

                    {/* Tagline and overview of the movie */}
                    <h2 className='text-2xl my-6'>{info?.tagline}</h2>
                    <p className='text-base max-w-[800px] mb-8'>{info?.overview}</p>

                    {/* Cast of the movie */}
                    <h3 className='text-3xl my-8 mb-4 font-bold'>Cast</h3>
                    <ul className='text-sm grid grid-cols-5 lg:grid-cols-7 justify-between items-center'>
                        {cast?.cast?.slice(0, 7)?.map((castName) => (
                            <li key={castName?.name} className='mr-2 flex flex-col items-center text-center'>
                                <h4>{castName?.name}</h4>
                                <img 
                                    className='w-[100px] object-center mt-2' 
                                    src={poster_URL + castName?.profile_path} 
                                    alt={castName?.name} 
                                />
                            </li>
                        ))}
                    </ul>

                    <div className='my-4'>
                        <h3 className='text-3xl mt-8 mb-4 font-bold'>Director</h3>
                        {cast?.crew?.filter((crewName) => crewName?.job === "Director")?.map((crewName) => (
                            <div key={crewName?.name} className='mt-6'>
                                <h4>{crewName?.name}</h4>
                                <img 
                                    className='w-[80px] object-center mt-2' 
                                    src={poster_URL + crewName?.profile_path} 
                                    alt={crewName?.name} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
                
            <h3 className='text-3xl max-w-[1500px] mx-auto my-6 px-6 font-bold'>Similar Movies</h3>
            <div className='px-6 pb-8 max-w-[1500px] mx-auto relative group flex items-center'>
                <FontAwesomeIcon
                    onClick={slideLeft}
                    icon={faChevronLeft}
                    className="text-white text-3xl lg:text-4xl absolute left-0 hidden group-hover:block z-10 opacity-70 hover:opacity-100 cursor-pointer" 
                />
                <ul id={"slider"} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {movies?.results?.map(movie => (
                        <Movie key={movie?.id} movie={movie} />
                    ))}
                </ul>
                <FontAwesomeIcon
                    onClick={slideRight}
                    icon={faChevronRight}
                    className="text-white text-3xl lg:text-4xl absolute right-0 hidden group-hover:block z-10 opacity-70 hover:opacity-100 cursor-pointer" 
                />
            </div>

            <ul className='px-6 py-4 max-w-[1500px] mx-auto'>
                <h3 className='text-3xl my-6 font-bold'>Reviews</h3>
                {reviews?.results?.map(review => (
                    <Review key={review?.id} review={review} />
                ))}
            </ul>
        </section>
    )
}

export default MovieDetails;