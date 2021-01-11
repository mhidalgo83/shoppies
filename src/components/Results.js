import { useState } from "react";
import Result from "./Result";

const Results = ({ results, error, setNominees, nominees, movieIds, setMovieIds }) => {
  
  const handleClick = (movie) => {
    if (nominees.length < 5) {
      setNominees([...nominees, movie]);
      setMovieIds([...movieIds, movie.imdbID]);
    } else {
      alert("You can't nominate more than five movies.");
    }
  };

  return (
    <div className="results wrapper">
      <h1>Results</h1>
      {results.length === 0 && !error && (
        <h2>Use the search bar above to view movies.</h2>
      )}
      {error ? (
        <h2>{error}</h2>
      ) : (
        <ul className="results__list">
          {results.map((r) => (
            <Result key={r.imdbID} result={r} handleClick={handleClick} movieIds={movieIds} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Results;
