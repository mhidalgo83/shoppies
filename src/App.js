import { useState } from "react";

import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Nominees from "./components/Nominees";

const App = () => {
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [nominees, setNominees] = useState([]);

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
        <Results results={results} error={error} setNominees={setNominees} />
        <Nominees nominees={nominees} />
      </section>
    </div>
  );
};

export default App;
