import React, { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm === "") {
      onSearch("");
    }
    onSearch(event.target.value);
  };

  return (
    <form
      className="search-container"
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        className="search-input"
        type="text"
        placeholder="Search for a film"
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

export default SearchBox;
