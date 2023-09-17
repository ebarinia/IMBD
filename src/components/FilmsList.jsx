import Film from "./Film";

const FilmsList = ({ films, onAddToWatchList }) => {
  const filmsItem = films.map((film, index) => {
    return <Film key={index} film={film} index={index} onAddToWatchList={onAddToWatchList}/>;
  });

  return (
      <ul>{filmsItem}</ul>
  );
};

export default FilmsList;
