import { Link } from "react-router-dom";

const MovieCards =({movie}) => {

    const posterUrl=`https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailurl=`/movies/${movie.id}`

    return (
        <div className="col-lg-4 col-md-6 col-2 my-4">
         <div className="card text-center border border-primary shadow-0 text-white">
            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img
                src={posterUrl}
                className="img-fluid"
                alt={movie.original_title}
                style={{height:'10rem'}}
                />
                <a href="#!">
                <div className="mask" id="mask"></div>
                </a>
            </div>

            <div className="card-body">
                <h5 className="card-title">Title: {movie.original_title}</h5>
                <p className="card-text" style={{ maxHeight: '3em', overflow: 'hidden' }}>
                    {movie.overview}
                </p>
                <Link to={detailurl} className="btn btn-primary">Show details</Link>
            </div>
        </div>
    </div>

    );
}
export default MovieCards;