const SearchBar = () => {
  return (
    <div className="search">
      <form className="search__form">
        <label htmlFor="search">Search For Your Nominee</label>
        <input type="text" name="search" placeholder="Enter title"/>
      </form>
    </div>
  );
};

export default SearchBar;
