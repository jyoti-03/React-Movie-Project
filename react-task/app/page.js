"use client"
import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import styles from './page.module.css';
import Poster from './Components/Poster';
import Addmovie from './Components/Addmovie';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      const url_res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=d6667472d12f15cde166798b7a104ced&language=en-US&page=1`
      );
      const responseData = await url_res.json();
      const results = responseData.results;
      const topTenMovies = results.slice(10, 20);
      setData(topTenMovies);
    };

    fetchMovieData();
    
  }, []);

  const handelDelete = (movieId) => {
    setData((prevData) => prevData.filter((result) => result.id !== movieId));
  };

  return (
    <div className={styles.body}>
      <div className={styles.ndcol}>
        <Header />
        <div style={{ height: "40px" }}></div>
        <text className="WT">Watch</text>
        <div style={{ color: "white" }}>
          {data &&
            data.map((result) => (
              <Poster key={result.id} result={result} handelDelete={handelDelete} />
            ))}
        </div>
        <Addmovie />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
