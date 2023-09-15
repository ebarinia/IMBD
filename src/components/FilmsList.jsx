import Film from "./Film";

const FilmsList = ({ films, onFilmSelect }) => {
  const filmsItem = films.map((film, index) => {
    return <Film key={index} film={film} index={index} onFilmSelect={onFilmSelect} />;
  });

  return (
      <ul>{filmsItem}</ul>
  );
};

export default FilmsList;
