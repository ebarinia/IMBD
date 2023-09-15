import { useState, useEffect } from "react";
import FilmsList from "../components/FilmsList";
import SearchBox from "../components/SearchBox";

const FilmsContainer = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");
  const [selectedFilm, setSelectedFilm] = useState("")

  const handleSearch = (searchTerm) => {
    setSearchFilm(searchTerm);
    if (searchTerm === "") {
      setFilms([]);
    }
    fetch(`https://search.imdbot.workers.dev/?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setFilms(data.description));
  };

  const handleSelection = (selected) => {
    setSelectedFilm(selected)
    fetch(`https://search.imdbot.workers.dev/?tt=${selected}`)
    .then(response => response.json())
    .then(data => setFilms(data))
  } ;

  return (
    <>
      <SearchBox onSearch={handleSearch}/>
      <FilmsList films={films} onFilmSelected={handleSelection}/>
    </>
  );
};

export default FilmsContainer;
