import React, { useEffect, useState } from 'react';
import axios from './axios';
import "./Row.css";
import requests from './requests';

const base_url = "https://image.tmdb.org/t/p/original"

function Row({title,fetchUrl,isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            console.table(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    console.log(movies);
    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => {
                    return (
                    <img 
                    key={movie.id}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}/>
                    )
                })}
            </div>
        </div>
    );
}

export default Row;