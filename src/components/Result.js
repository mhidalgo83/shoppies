import { useState, useEffect } from "react";
import Button from "./Button";

const Result = ({ result, handleClick, movieIds, search }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (movieIds.includes(result.imdbID)) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [movieIds, search]);

  return (
    <div key={result.imdbID} className="results__result">
      <li>
        <h3>{result.Title}</h3>
        <p>({result.Year})</p>
      </li>
      <>
        <Button
          className={disabled ? "" : "btn__add"}
          disabled={disabled}
          onClick={() => handleClick(result)}
        >
          Nominate
        </Button>
      </>
    </div>
  );
};

export default Result;
