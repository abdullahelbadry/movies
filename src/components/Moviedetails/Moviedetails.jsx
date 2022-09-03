import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Moviedetails = () => {
    let params = useParams();
    let myMovie = params.id;
    const apiKey = '7ea44a18385def9be60a829d59b9e12b';
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    const [movieData, setMovieData] = useState({})
    const [genreData, setGenreData] = useState({})
    


    async function getMovieDetails(){
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${myMovie}?api_key=${apiKey}&language=en-US`);
        setMovieData(data);
        setGenreData(movieData.genres);
        console.log(movieData);
    }
    
    getMovieDetails()
    return (
        <>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    {<img className='w-100' src={baseImageUrl+movieData.poster_path} alt="" />}
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-6'>
                    <h3>{movieData.title}</h3>
                    <h5 className='text-muted'>{movieData.tagline}</h5>
                    <div>
                    
                    </div>
                    <div>
                        {<p>Vote : {parseFloat(movieData.vote_average).toFixed(1)}</p>}
                        {<p>Vote Count : {parseFloat(movieData.vote_count).toFixed(1)}</p>}
                        {<p>Popularity : {movieData.popularity}</p>}
                        {<p>Release Date : {movieData.release_date}</p>}
                        {<p className='text-muted'>{movieData.overview}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Moviedetails;
