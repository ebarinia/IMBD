const SearchBox = ({onType, onSearch}) => {
  const handleInputType = (event) => {
    onType(event.target.value);
  };

const SearchSubmit = (event) => {
    event.preventDefault();
    onSearch()
}

  return (
    <form
      className="search-container"
      onSubmit={SearchSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search for a film"
        onChange={handleInputType}
      ></input>
      <button>Search</button>
    </form>
  );
};

export default SearchBox;
