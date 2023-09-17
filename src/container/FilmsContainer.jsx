import { useState, useEffect } from "react";
import FilmsList from "../components/FilmsList";
import SearchBox from "../components/SearchBox";
import WatchlistList from "../components/WatchlistList";

const FilmsContainer = () => {
  const [films, setFilms] = useState([]);
  const [searchFilm, setSearchFilm] = useState("");
  const [watchlist, setWatchlist] = useState([])

  const addToWatchlist = (film) => {
    setWatchlist((currentWatchlist) => {
      if (!currentWatchlist.some(watchlistFilm => watchlistFilm["#TITLE"] === film["#TITLE"])) {
        return [...currentWatchlist, film];
      } else {
        return currentWatchlist;
      }
    });
  };

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
    <nav className="navbar">
        <h1>IMBd</h1>
    </nav>
        <div className="list-container">
            <div className="">
                <SearchBox onSearch={handleSearch} onType={handleType}/>
                <FilmsList films={films} onAddToWatchList={addToWatchlist}/>
            </div>
                {watchlist.length > 0 ? <WatchlistList watchlist={watchlist}/> : null}
        </div>
    </>
  );
};

export default FilmsContainer;
