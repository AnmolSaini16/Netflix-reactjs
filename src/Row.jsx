import axios from './axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import { Tooltip } from '@material-ui/core'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'



const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
   
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(() =>{
        async function fetchData(){
          const request = await axios.get(fetchUrl)
          setMovies(request.data.results)
          return request;
        }
        fetchData();
    }, [fetchUrl])
   
    // console.log(movies)

    const opts = {
      height: "450",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

    const handleClick = (movie) => {
      if (trailerUrl) {
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.name || "")
          .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
      }
    };
  

  return (
    <div className='row'>
        <h2>{title}</h2>
        
        <div className="row__posters">
            { movies.map((movie) => (

              <Tooltip title={movie?.original_name || movie?.name || movie?.title}  key={movie.id}>
                  <img
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                    />   
              </Tooltip> 
              
            )) }
           
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row