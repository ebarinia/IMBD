import { useState, useEffect } from "react";
import FilmsList from "../components/FilmsList";
import SearchBox from "../components/SearchBox";

const FilmsContainer = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");
//   const [selectedFilm, setSelectedFilm] = useState("")

  const handleType = (searchTerm) => {
    setSearchFilm(searchTerm);
  };

  const handleSearch = () => {
      fetch(`https://search.imdbot.workers.dev/?q=${searchFilm}`)
        .then((response) => response.json())
        .then((data) => setFilms(data.description));
  };
  
//   const handleSelection = (selected) => {
//     setSelectedFilm(selected)
//     fetch(`https://search.imdbot.workers.dev/?tt=${selected}`)
//     .then(response => response.json())
//     .then(data => setFilms(data))
//   } ;

  return (
    <>
      <SearchBox onSearch={handleSearch} onType={handleType}/>
      <FilmsList films={films}/>
    </>
  );
};

export default FilmsContainer;
