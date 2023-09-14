const Film = ({ film, index }) => {
  return (
    <li>
      <img src={film["#IMG_POSTER"]} alt="film poster"></img>
      <div className="text-container">
        <a href={film["#IMDB_URL"]} target="_blank">
        <h3>{film["#AKA"]}</h3>
        </a>
        <h5>Starring: {film["#ACTORS"]}</h5>
        <button>Add to Watchlist</button>
      </div>
      <a href={film["#IMDB_URL"]}></a>
    </li>
  );
};

export default Film;
