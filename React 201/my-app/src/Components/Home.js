import React, { useEffect, useState } from "react";
import "./home.css";
import Cards from "./Cards.js";

// api key = 518a40387c14a78e53bc8a8059d49137

const Home = () => {
    const [movie1Data, setMovie1Data] = useState({});
    const [movie2Data, setMovie2Data] = useState({});
    
    const fetchMovieData = async (movieId) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=518a40387c14a78e53bc8a8059d49137`
        );
        const data = await response.json();
    
        if (data.title && data.overview && data.poster_path) {
          return {
            isforadults: data.adult,
            movietitle: data.title,
            movieoverview: data.overview,
            movieposter: data.poster_path,
            movieid: data.id,
          };
        } else {
          return null; 
        }
      } catch (error) {
        console.error(error);
        return null; 
      }
    };
    
    useEffect(() => {
      const fetchData = async () => {
        let movie1Info = null;
        let movie2Info = null;
    
       
        while (!movie1Info || !movie2Info) {
          if (!movie1Info) {
            const movieId1 = Math.round(Math.random() * 3000);
            movie1Info = await fetchMovieData(movieId1);
          }
    
          if (!movie2Info) {
            const movieId2 = Math.round(Math.random() * 3000);
            movie2Info = await fetchMovieData(movieId2);
          }
        }
    
        // Set the movie data when both movies have all the required information
        setMovie1Data(movie1Info);
        setMovie2Data(movie2Info);
      };
    
      fetchData();
  }, []);
  

  return (
    <div className="home" style={{ height: "90vh" }}>
      <div className="background-image"></div>
      <div className="content">
        <div className="row">
          <div className="col-md-7 col-12" id="hometitle">
            <h1>Movie Browser</h1>
          </div>
          <div className="col-md-5 col-12" id="hometodayprefs">
            <div className="homeprefs">
              <h2>Today's Must Watch...</h2>
            </div>
            <div className="row row-cols-1">
              <div className="col-12 homecards">
                <Cards
                  isforadults={movie1Data.isforadults}
                  movietitle={movie1Data.movietitle}
                  movieoverview={movie1Data.movieoverview}
                  movieposter={movie1Data.movieposter}
                  movieid={movie1Data.movieid}
                />
              </div>
              <div className="col-12 homecards">
                <Cards
                  isforadults={movie2Data.isforadults}
                  movietitle={movie2Data.movietitle}
                  movieoverview={movie2Data.movieoverview}
                  movieposter={movie2Data.movieposter}
                  movieid={movie1Data.movieid}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
