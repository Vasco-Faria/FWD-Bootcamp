import Hero from "./Hero";

import MovieCards from "./MovieCards";

const Movies = ({ keyword, searchResults }) => {
  const text = `Searching for: ${keyword} `;


  const resultsHtml=searchResults.map((obj,i) =>{
    return <MovieCards movie={obj} key={i} />
  })

  return (
    <div style={{backgroundColor:'#000033'}}>
      <Hero title="Movies" text={text} />
      {resultsHtml && keyword ? (
				<div className="container">
					<div className="row">
            {resultsHtml}
          </div>
				</div>
			) : (
				<></>
			)}

			{resultsHtml.length === 0 && keyword ? (
				<div className="container">
					<div className="row" >
						<div className="col-10 offset-1">
							<p className="leed text-center text-white mt-5 fs-1">
								No results found for: <strong>{keyword}</strong>.
							</p>
							<p className="leed text-center text-white fs-1">Please try again.</p>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
    </div>
  );
};
export default Movies;
