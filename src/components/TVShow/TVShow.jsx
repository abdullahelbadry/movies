import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function TVShow(props) {

  const apiKey = '7ea44a18385def9be60a829d59b9e12b';
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/';

  let [trendingTvShows, setTrendingTvShows] = useState([]);



  async function getTrendingItems(mediaType, callback){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${apiKey}`);
    callback(data.results);
  }
  
  useEffect(() => {
    getTrendingItems('tv', setTrendingTvShows);
  }, [])
  
  return (
    <>
        {/* TVShow Category */}
        <div className='row'>
          <div className='col-md-4 d-flex align-items-center'>
            <div>
              <div className='w-50'><hr/></div>
            <div>
              <h2>Trending</h2>
              <h2>TV Shows</h2>
              <h2>to watch now</h2>
              <span className='text-muted'>Most trending tv shows by days</span>
            </div>
            <div className='w-100'><hr/></div>
            </div>
          </div>
          {trendingTvShows.map((item, index)=>
          <div key={index} className='col-md-2 my-3'>
            <Link to={'/TvDetails/'+item.id}>
            <div className='position-relative'>
              <div className='position-absolute top-0 end-0'><p className='bg-secondary p-1'>{parseFloat(item.vote_average).toFixed(1)}</p></div>
              <img className='w-100 mb-2' src={baseImageUrl+item.poster_path} alt="" />
              <h4>{item.name}</h4>
            </div>
            </Link>
          </div>)}
        </div>
    </>
  );
}
