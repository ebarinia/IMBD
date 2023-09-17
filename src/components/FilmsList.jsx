import Film from "./Film";

const FilmsList = ({ films }) => {
  const filmsItem = films.map((film, index) => {
    return <Film key={index} film={film} index={index}/>;
  });

  return (
      <ul>{filmsItem}</ul>
  );
};

export default FilmsList;
