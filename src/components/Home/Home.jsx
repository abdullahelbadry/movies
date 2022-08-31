import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Home() {

  const apiKey = '7ea44a18385def9be60a829d59b9e12b';
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500/'

  let [trendingItems, setTrendingItems] = useState([]);
  let [trendingTvShows, setTrendingTvShows] = useState([]);
  let [trendingPerson, setTrendingPerson] = useState([]);


  async function getTrendingItems(mediaType, callback){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${apiKey}`);
    callback(data.results);
  }
  
  useEffect(() => {
    getTrendingItems('movie', setTrendingItems);
    getTrendingItems('tv', setTrendingTvShows);
    getTrendingItems('person', setTrendingPerson);
  }, [])
  
  return (
    <>
        {/* Movies Category */}
        <div className='row'>
          <div className='col-md-4 d-flex align-items-center'>
            <div>
              <div className='w-50'><hr/></div>
            <div>
              <h2>Trending</h2>
              <h2>movies</h2>
              <h2>to watch now</h2>
              <span className='text-muted'>Most trending movies by days</span>
            </div>
            <div className='w-100'><hr/></div>
            </div>
          </div>
          {trendingItems.map((item, index)=>
          <div key={index} className='col-md-2 my-3'>
            <div>
              <img className='w-100' src={baseImageUrl+item.poster_path} alt="" />
              <h4>{item.title}</h4>
            </div>
          </div>)}
        </div>
        {/* TV Shows Category */}
        <div className='row'>
          <div className='col-md-4 d-flex align-items-center'>
            <div>
              <div className='w-50'><hr/></div>
            <div>
              <h2>Trending</h2>
              <h2>TV Shows</h2>
              <h2>to watch now</h2>
              <span className='text-muted'>Most trending TV Shows by days</span>
            </div>
            <div className='w-100'><hr/></div>
            </div>
          </div>
          {trendingTvShows.map((item, index)=>
          <div key={index} className='col-md-2 my-3'>
            <div>
              <img className='w-100' src={baseImageUrl+item.poster_path} alt="" />
              <h4>{item.name}</h4>
            </div>
          </div>)}
        </div>
        {/* Person Category */}
        <div className='row'>
          <div className='col-md-4 d-flex align-items-center'>
            <div>
              <div className='w-50'><hr/></div>
            <div>
              <h2>Trending</h2>
              <h2>People</h2>
              <h2>to watch now</h2>
              <span className='text-muted'>Most trending People by days</span>
            </div>
            <div className='w-100'><hr/></div>
            </div>
          </div>
          {trendingPerson.map((person, index)=>
          <div key={index} className='col-md-2 my-3'>
            <div>
              <img className='w-100' src={baseImageUrl+person.profile_path} alt="" />
              <h4>{person.name}</h4>
            </div>
          </div>)}
        </div>
    </>
  );
}
