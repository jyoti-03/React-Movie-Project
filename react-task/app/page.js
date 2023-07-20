"use client"
import React, { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import styles from './page.module.css';
import Poster from './Components/Poster';
import Addmovie from './Components/Addmovie';

const Home = () => {
  const [data, setData] = useState([]);
  const [vote_count, setVoteCount] = useState({});

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
    1
  }, []);

  const handelDelete = (movieId) => {
    setData((preData) => preData.filter((result) => result.id !== movieId));
  };

  const handleVoteUp = (id) => {
    const updatedLikes = { ...vote_count };

    if (updatedLikes[id] !== undefined) {
      updatedLikes[id] += 1;
    } else {
      updatedLikes[id] = 1;
    }

    setVoteCount(updatedLikes);
  };
  const handleVoteDown = (id) => {
    const updatedLikes = { ...vote_count };

    if (updatedLikes[id] !== undefined) {
      updatedLikes[id] -= 1;
    } else {
      updatedLikes[id] = -1;
    }

    setVoteCount(updatedLikes);
  };
  const sortedArray = data.sort((a, b) => {
    let likesA = 0;
    let likesB = 0;

    if (vote_count[a.id] !== undefined) {
      likesA = vote_count[a.id];
    }

    if (vote_count[b.id] !== undefined) {
      likesB = vote_count[b.id];
    }

    return likesB - likesA;
  });

  return (
    <div className={styles.body}>
      <div className={styles.ndcol}>
        <Header />
        <div style={{ height: "40px" }}></div>
        <text className="WT">Watch</text>
        <div style={{ color: "white" }}>
          {sortedArray &&
            sortedArray.map((result) => (
              <Poster 
                key={result.id}
                result={result} 
                handelDelete={() => handelDelete(result.id)} 
                onLike={() => handleVoteUp(result.id)}
                onDislike={() => handleVoteDown(result.id)}
                vote_count={vote_count[result.id]}/>
            ))}
        </div>
        <Addmovie />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
