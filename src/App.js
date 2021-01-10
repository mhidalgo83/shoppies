import SearchBar from "./components/SearchBar";
import Results from "./components/Results";
import Nominees from "./components/Nominees";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>The Shoppies</h1>
      </header>
      <SearchBar />
      <section className="search-view">
        <Results />
        <Nominees />
      </section>
    </div>
  );
};

export default App;
