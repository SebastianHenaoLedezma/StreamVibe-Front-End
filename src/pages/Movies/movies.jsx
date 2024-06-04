
import { useContext, useEffect, useState } from "react"
import TopGenres from "../../components/PopularMovies/genres"
import DescriptionMovie from "./descriptionMovie"
import MovieHeader from "./movieHeader"
import { getMovieRandom, getGenres, getTopGenres, getMoviesNewReleases, getMoviesMustWatch, getMovieById } from "../../services/apiService"
import NewReleases from "../../components/PopularMovies/newReleases"
import MustWatch from "../../components/PopularMovies/mustWatch"
import Generos from "../../components/ExploreCategories"
import IconPlay from '../../assets/movie/play.png';
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext"
import Loading from "../../components/loading/loading"
import Error from "../../components/error/error"


const Movies = () => {
  const {globalUser} = useContext(UserContext);

  const [randomMovie, setRandomMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [topGenres, setTopGenres] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const randomMovieResult = await getMovieRandom();
        setRandomMovie(randomMovieResult);

        const genresResult = await getGenres();
        setGenres(genresResult);

        const topGenresResult = await getTopGenres();
        setTopGenres(topGenresResult);

        const newReleasesResult = await getMoviesNewReleases();
        setNewReleases(newReleasesResult);

        const mustWatchResult = await getMoviesMustWatch();
        console.log(mustWatchResult)
        setMustWatch(mustWatchResult);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);
  
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  const handleClick = async () => {
    setLoading(true);
    try {
      const movieResult = await getMovieById(randomMovie.id);
      navigate(`/movie/`, { state: { movieData: movieResult.id } });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };



  return (

    <section className="px-5 p-4 grid grid-cols-1 gap-2">
      <MovieHeader img={randomMovie.trailer_image_url} title={randomMovie.title} description={randomMovie.description} />
      <DescriptionMovie title={randomMovie.title} desc={randomMovie.description} />
      <div className="flex justify-center mt-2 items-center  -translate-y-36">
        <button className="bg-red-800 font-bold hover:shadow-lg hover:shadow-red-500/40 rounded-lg text-xs h-10" ata-ripple-light="true">
        <button
          className="movie__button"
          onClick={handleClick}
        >
          <img src={IconPlay} alt="" className="movie__button-icon" />
          Play now
        </button>
        </button>
      </div>
      <section className="p-4 border-solid border-2 bg-[#1A1A1A] border-neutral-800 rounded-lg">
        <section id="genres" className="">
          <h2 className="font-bold my-4">Our Genres</h2>
          <div className="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-11">
            {genres.map((genero, index) => (
              <Generos genero={genero} key={index} />
            ))}
          </div>
        </section>
        <section id="popular" className="">
          <h2 className="font-bold my-4">Popular Top 10 In Genres</h2>
          <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-11">
            {topGenres?.map((genre, index) => (
              <TopGenres key={index} genres={genre} />
            ))}
          </div>
        </section>
        <section id="releases" className="">
          <h2 className="font-bold my-4">New Releases </h2>
          <div className="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-11">
            {newReleases.map((release, index) => (
              <NewReleases key={index} release={release} />
            ))}
          </div>
        </section>
        <section id="must" className="">
          <h2 className="font-bold my-4">Must - Watch Movies </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-11">
            {mustWatch.map((movie, index) => (
              <MustWatch key={index} movie={movie}/>
            ))}
          </div>
        </section>
      </section>
    </section>


  )
}

export default Movies