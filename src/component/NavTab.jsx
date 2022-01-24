import React, { useState, useEffect } from 'react';
import Home from '../images/home.svg'
import Film from '../images/film.svg'
import Tv from '../images/tv.svg'
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Homes from '../screen/Home';
import Movies from '../screen/Movies';
import Series from '../screen/Series';

const NavTab = () => {
    const [tabFlex, setHeader] = useState("tabFlex")

const listenScrollEvent = (event) => {
  if (window.scrollY < 73) {
    return setHeader("tabFlex")
  } else if (window.scrollY > 70) {
    return setHeader("tabFlex2")
  } 
}

useEffect(() => {
  window.addEventListener('scroll', listenScrollEvent);

  return () =>
    window.removeEventListener('scroll', listenScrollEvent);
}, []);
  return <Router> 
      <section className={tabFlex}>
          <div className='tab-header'>
              <h1> the/MovieApp </h1>
          </div>
          <nav className='tab-route'>
                <NavLink to="/" className='tab-home' activeClassName="active">
                    <div className='tabs'>
                        <img src={Home} alt="home" className='icon-tab' />
                        <h3>Home</h3>
                    </div>
                </NavLink>
                <NavLink to="/movies" className='tab-movies' activeClassName="active">
                    <div className='tabs'>
                        <img src={Film} alt="movies" className='icon-tab' />
                        <h3>Movies</h3>
                    </div>
                </NavLink>
                <NavLink to="/series" className='tab-series' activeClassName="active">
                    <div className='tabs'>
                        <img src={Tv} alt="series" className='icon-tab' />   
                        <h3>Series</h3>
                    </div>
                </NavLink>  
         </nav> 
          <div className='tab-btn'>
            <div className='btn-container'>
                <button className='btn-tab'>Login</button>
                <button className='btn-tab'>Register</button>
            </div>
          </div>
      </section>
    <Routes>
        <Route exact path="/" element={<Homes/>} />
        <Route exact path="/movies" element={<Movies/>} />
        <Route exact path="/series" element={<Series/>} />
    </Routes>
  </Router>;
};

export default NavTab;



