import Button from "./Button";

const Nominees = ({ nominees, setNominees, movieIds, setMovieIds }) => {
  const handleClick = (movie) => {
    setNominees(nominees.filter((m) => m !== movie));
    setMovieIds(movieIds.filter((m) => m !== movie.imdbID));
  };

  return (
    <div className="results wrapper">
      <h1>Nominees</h1>
      {nominees.length === 0 && <h2>No nominees selected.</h2>}
      <ul className="results__list">
        {nominees.map((n) => {
          return (
            <div key={n.imdbID} className="results__result">
              <li>
                <h3>{n.Title}</h3>
                <p>({n.Year})</p>
              </li>
              <>
                <Button className="btn__del" onClick={() => handleClick(n)}>
                  Remove
                </Button>
              </>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Nominees;
