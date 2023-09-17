const WatchlistList = ({ watchlist }) => {
    const watchlistItems = watchlist.map((film, index) => 
        <li key={index}>
            <img src={film["#IMG_POSTER"]} alt="film poster"></img>
            <h4>{film["#TITLE"]}</h4>
        </li>);

    return(
        <div className="watchlist">
            <h1>Watchlist</h1>
        <ul id="watchlist-items">
            {watchlistItems}
        </ul>
        </div>
    )
}

export default WatchlistList