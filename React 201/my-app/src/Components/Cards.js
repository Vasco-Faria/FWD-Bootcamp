import React from "react";
import "./Cards.css";
import { Link } from 'react-router-dom';

const Cards = ({ isforadults, movietitle, movieoverview, movieposter,movieid }) => {
  
  const detailurl=`/movies/${movieid}`
  
  return (
    <div class="card text-center border border-primary shadow-0 text-white my-3">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieposter}`}
          className="img-fluid"
        />
        <a href="#!">
          <div class="mask" id="mask"></div>
        </a>
      </div>

      <div class="card-body">
        <h5 class="card-title">Title: {movietitle}</h5>
        <Link to={detailurl} className="btn btn-primary">Show details</Link>
      
      </div>
    </div>
  );
};
export default Cards;
