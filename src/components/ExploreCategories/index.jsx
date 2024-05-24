import "./styles.sass";
import 'bootstrap/dist/css/bootstrap.min.css';

const Generos = ({ genero }) => {
  console.log(genero.movies[0].title);

  return (
    <>
      <div className="container__genres">
        <div className="thumbnails-wrapper">
          <div className="thumbnails">
            <img src={genero.movies[0].trailer_thumbnail} alt="imagen genero" />
            <img src={genero.movies[1].trailer_thumbnail} alt="imagen genero" />
            <img src={genero.movies[2].trailer_thumbnail} alt="imagen genero" />
            <img src={genero.movies[3].trailer_thumbnail} alt="imagen genero" />
          </div>
          <div className="overlay"></div>
        </div>
        <div className="cardDescription">
          <p>{genero.name}</p>
          <a href="https://res.cloudinary.com/dhhyc88td/image/upload/v1716424831/IconRow_jptbh2.png" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1716424831/IconRow_jptbh2.png" alt="navigation icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Generos;
