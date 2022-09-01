import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const TvDetails = () => {
    let params = useParams();
    let myTv = params.id;
    const apiKey = '7ea44a18385def9be60a829d59b9e12b';
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    const [TvData, setTvData] = useState({})
    const [genreData, setGenreData] = useState({})
    
    async function getTvDetails(){
        let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${myTv}?api_key=${apiKey}&language=en-US`);
        setTvData(data);
        setGenreData(TvData.genres);
        console.log(TvData);
    }
    
    getTvDetails()
    return (
        <>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    {<img className='w-100' src={baseImageUrl+TvData.poster_path} alt="" />}
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-4'>
                    <h3>{TvData.name}</h3>
                    <h5 className='text-muted'>{TvData.tagline}</h5>
                    <div>
        
                    </div>
                    <div>
                        {<p>Vote : {parseFloat(TvData.vote_average).toFixed(1)}</p>}
                        {<p>Vote Count : {parseFloat(TvData.vote_count).toFixed(1)}</p>}
                        {<p>Popularity : {Math.round(TvData.popularity)}</p>}
                        {<p>Release Date : {TvData.first_air_date}</p>}
                        {<p className='text-muted'>{TvData.overview}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TvDetails;
