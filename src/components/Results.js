import Button from "./Button";

const Results = ({ results, error, setNominees, nominees }) => {
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
          {results.map((r) => {
            return (
              <div className="results__result">
                <li key={r.imdbID}>
                  <h3>{r.Title}</h3>
                  <p>({r.Year})</p>
                </li>
                <>
                  <Button
                    onClick={() => {
                      if (nominees.length < 5) {
                        setNominees([...nominees, r]);
                      } else {
                          alert("You can't nominate more than five movies.")
                      }
                    }}
                  >
                    Nominate
                  </Button>
                </>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Results;
