import React, { useEffect, useState } from "react"
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import Errorpage from "./Errorpage";


const MovieDetail =() =>{

    const {id} =useParams();
    const [MovieDetails, setMovieDetails] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        console.log('make an api request',id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=518a40387c14a78e53bc8a8059d49137`)
        .then((response)=>response.json())
        .then((data)=>{
            setTimeout(()=>{
                setMovieDetails(data)
                setIsLoading(false)
            },1000)
            
        })
    },[id])

    const imgurl=`https://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`
    const backdropUrl=`https://image.tmdb.org/t/p/w500${MovieDetails.backdrop_path}`
    function renderMovieDetails(){
        if(isLoading){
            return <Hero title="Loading..."></Hero>
        }
        if(MovieDetails){
           
            return (
            <>
                <Hero title="Movie detail view" text={MovieDetails.original_title} backdrop={backdropUrl} />
                <div className="container">
                <div className="row">
                    <div className="lead col-md-6 col-12" style={{ textAlign: "center", lineHeight: '3rem' }}>
                    <h2 style={{ marginTop: '5rem', marginBottom: '1rem' }}>{MovieDetails.original_title}</h2>
                    {MovieDetails.overview && <p>{MovieDetails.overview}</p>}
                    {MovieDetails.vote_average && <p>Rating: {MovieDetails.vote_average}</p>}
                    {MovieDetails.release_date && <p>Release date: {MovieDetails.release_date}</p>}
                    {MovieDetails.status && <p>Status: {MovieDetails.status}</p>}
                    </div>
                    <div className="col-md-6 col-12" style={{ position: 'relative' }}>
                    <img src={imgurl} alt={MovieDetails.original_title} className="imgdetails shadow rounded" />
                    </div>
                </div>
                </div>
            </>
            

            )
        }else {
            return(
                <Errorpage/>
            )
        }
        
    }


    return renderMovieDetails()
        

}
export default MovieDetail; 