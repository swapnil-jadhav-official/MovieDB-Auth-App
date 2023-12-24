import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Movie from './Movie';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Row = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(props.fetchURL)
            .then(res => (
                setMovies(res.data.results)
            ))
    }, [props.fetchURL])

    // Slider functionality - giving each row a unique id
    const slideLeft = () => {
        let slider = document.getElementById('slider' + props.rowId);
        slider.scrollLeft = slider.scrollLeft - 600;
    }

    const slideRight = () => {
        let slider = document.getElementById('slider' + props.rowId);
        slider.scrollLeft = slider.scrollLeft + 600;
    }

    return (
        <section className='px-6 py-5 relative'>
            <h2 className='text-white text-xl font-bold'>{props.title}</h2>
    
            <div className='py-4 relative flex items-center group'>
                <FontAwesomeIcon 
                    icon={faChevronLeft}
                    className="text-white text-3xl lg:text-4xl absolute left-0 hidden group-hover:block z-10 opacity-70 hover:opacity-100 cursor-pointer" 
                    onClick={slideLeft}
                />
                <ul id={"slider" + props.rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
                    {movies.map((movie, id) => (
                        <Movie key={movie.id} movie={movie} />
                    ))}
                </ul>
                <FontAwesomeIcon
                    onClick={slideRight}
                    icon={faChevronRight}
                    className="text-white text-3xl lg:text-4xl absolute right-0 hidden group-hover:block z-10 opacity-70 hover:opacity-100 cursor-pointer" 
                />
            </div>
        </section>
    )
}

export default Row;