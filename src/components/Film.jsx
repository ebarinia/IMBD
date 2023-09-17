const Film = ({ film, index }) => {

    const handleClick = function() {
        console.log(`added ${film["#AKA"]}to the watchlist`)
    }
  return (
    <li className="film-list">
      <img src={film["#IMG_POSTER"]} alt="film poster"></img>
      <div className="text-container">
        <h3>{film["#AKA"]}</h3>
        <h5>Starring: {film["#ACTORS"]}</h5>
        <a href={film["#IMDB_URL"]} target="_blank">
          <button>More info</button>
        </a>
        <div>
          <button onClick={handleClick} className="add-watchlist">Add to Watchlist</button>
        </div>
      </div>
    </li>
  );
};

export default Film;
