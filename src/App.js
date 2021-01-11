import { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Nominees from "./components/Nominees";
import Banner from "./components/Banner";

const App = () => {
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [nominees, setNominees] = useState([]);
  const [movieIds, setMovieIds] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("nominees")) {
      let nomStorage = JSON.parse(localStorage.getItem("nominees"));
      setNominees(nomStorage);
    }
    if (localStorage.getItem("movieids")) {
      let idStorage = JSON.parse(localStorage.getItem("movieids"));
      setMovieIds(idStorage);
    }
    console.log(localStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("nominees", JSON.stringify(nominees));
  }, [nominees]);

  useEffect(() => {
    localStorage.setItem("movieids", JSON.stringify(movieIds));
  }, [movieIds]);

  return (
    <div className="container">
      <header>
        <h1>The Shoppies</h1>
      </header>
      <SearchBar
        search={search}
        setSearch={setSearch}
        setResults={setResults}
        setError={setError}
      />
      <section className="search-view">
        <Results
          results={results}
          error={error}
          setNominees={setNominees}
          nominees={nominees}
          movieIds={movieIds}
          setMovieIds={setMovieIds}
        />
        <Nominees
          nominees={nominees}
          setNominees={setNominees}
          movieIds={movieIds}
          setMovieIds={setMovieIds}
          search={search}
        />
      </section>
      <Banner nominees={nominees} />
    </div>
  );
};

export default App;
