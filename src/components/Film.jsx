const Film = ({ film, index }) => {
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
        <button className="add-watchlist">Add to Watchlist</button>
        </div>
      </div>
      <a href={film["#IMDB_URL"]}></a>
    </li>
  );
};

export default Film;
