import { useState, useEffect } from "react";
import FilmsList from "../components/FilmsList";
import SearchBox from "../components/SearchBox";
import Header from "../components/header";
import WatchlistList from "../components/WatchlistList";

const FilmsContainer = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");
  const [watchlist, setWatchlist] = useState("")

//   const addToWatchlist = (film) => {
//     setWatchlist[(...watchlist, film)];
//   }

  const handleType = (searchTerm) => {
    setSearchFilm(searchTerm);
  };

  const handleSearch = () => {
      fetch(`https://search.imdbot.workers.dev/?q=${searchFilm}`)
        .then((response) => response.json())
        .then((data) => setFilms(data.description));
  };


  return (
    <>
        <Header/>
        <div className="flex-container">
            <div className="film-list half-width">
                <SearchBox onSearch={handleSearch} onType={handleType}/>
                <FilmsList films={films}/>
            </div>
                {watchlist ? <WatchlistList watchlist={watchlist} className='half-width'/> : null}
        </div>
    </>
  );
};

export default FilmsContainer;
