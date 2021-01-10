import Button from "./Button";

const Nominees = ({ nominees, setNominees }) => {
  const handleClick = (movie) => {
    setNominees(nominees.filter((m) => m !== movie));
  };
  return (
    <div className="results wrapper">
      <h1>Nominees</h1>
      {nominees.length === 0 && <h2>No nominees selected.</h2>}
      <ul>
        {nominees.map((n) => {
          return (
            <div className="results__result">
              <li key={n.imdbID}>
                <h3>{n.Title}</h3>
                <p>({n.Year})</p>
              </li>
              <>
                <Button onClick={() => handleClick(n)}>Remove</Button>
              </>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Nominees;
