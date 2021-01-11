import { useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const SearchBar = ({ search, setSearch, setResults, setError }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&type=movie`
      )
      .then((res) => {
        if (res.data.Error) {
          if (!search) {
            setError("Please enter a movie title in the search bar above.");
          } else {
            setError(`${res.data.Error} Please enter another search term.`);
          }
        } else {
          setError("");
          setResults(res.data.Search);
        }
      })
      .catch((err) => console.log(err));
  }, [search]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     axios
  //       .get(
  //         `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}&type=movie`
  //       )
  //       .then((res) => {
  //         if (res.data.Error) {
  //           setError(`${res.data.Error} Please enter another search term.`);
  //         } else {
  //           setError("");
  //           setResults(res.data.Search);
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <div className="search">
      <form className="search__form">
        <div className="search__form--input">
          <label htmlFor="search">Search Movies</label>
          <input
            type="text"
            name="search"
            placeholder="Enter title"
            onChange={handleSearch}
          />
        </div>
        {/* <Button className="search__button" onClick={handleSubmit}>
          Search
        </Button> */}
      </form>
    </div>
  );
};

export default SearchBar;
