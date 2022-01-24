import React from 'react';
import search from '../images/search.svg'

const HomeWelcome = () => {
  return <div className='home-welcome'>
      <h1>Welcome to the/MovieApp</h1>
      <h5>Millions of Movies,Tv Shows</h5> <br /> <br /> <br />
      <div>
        <input type="text" placeholder='Search the movie app' id="search-text-input" /> <br />
        <img src={search} alt="search" className='absolute-search' />
      </div>
  </div>;
};

export default HomeWelcome;
