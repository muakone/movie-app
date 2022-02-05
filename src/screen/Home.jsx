import React from 'react';
import HomeWelcome from '../component/HomeWelcome';
import TrendingMovies from '../component/TrendingMovies';

const Homes = () => {
  return <div className='page'>
    <div className='bg-dark'>
      <HomeWelcome/>
    </div>
      <section>
       <TrendingMovies/>
      </section>
  </div>;
};

export default Homes;
