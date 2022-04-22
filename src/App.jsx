import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from './components/Movies';
import Hero from './components/Hero';
import Header from './components/Header';

const URL = 'https://api.themoviedb.org/3';
const API_KEY = '20147a1534ba357ca36b05b79d848ac3';

const endpoints = {
  originals: '/discover/tv',
  popular: '/movie/popular',
  now_playing: '/movie/now_playing',
  trending: '/trending/all/week',
  top_rated: '/movie/top_rated',
  upcoming: '/movie/upcoming',
};

function App() {
  const [originals, setOriginals] = useState([]);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    // Load Originals
    axios.get(`${URL}${endpoints.originals}`, {
      params: {
        api_key: API_KEY,
      },
    })
      .then((res) => setOriginals(res.data.results));

    // Load Popular
    axios.get(`${URL}${endpoints.popular}`, {
      params: {
        api_key: API_KEY,
      },
    })
      .then((res) => setPopular(res.data.results));

    // Load Now Playing
    axios.get(`${URL}${endpoints.now_playing}`, {
      params: {
        api_key: API_KEY,
      },
    })
      .then((res) => setNowPlaying(res.data.results));

    // Load Trending
    axios.get(`${URL}${endpoints.trending}`, {
      params: {
        api_key: API_KEY,
      },
    })
      .then((res) => setTrending(res.data.results));

    // Load Top Rated
    axios.get(`${URL}${endpoints.top_rated}`, {
      params: {
        api_key: API_KEY,
      },
    })
      .then((res) => setTopRated(res.data.results));

    // Load Upcoming
    axios.get(`${URL}${endpoints.upcoming}`, {
      params: {
        api_key: API_KEY,
      },
    })
      .then((res) => setUpcoming(res.data.results));
  }, []);

  return (
    <div>
      <Header />
      <Hero movie={trending[Math.floor(Math.random() * originals.length)]} />
      <Movies title="Netflix originals" movies={originals} />
      <Movies title="Trending" movies={trending} />
      <Movies title="Now Playing" movies={nowPlaying} />
      <Movies title="Popular" movies={popular} />
      <Movies title="Top Rated" movies={topRated} />
      <Movies title="Upcoming" movies={upcoming} />
    </div>
  );
}

export default App;
