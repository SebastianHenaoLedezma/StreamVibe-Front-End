
import { useEffect, useState } from "react"
import TopGenres from "../../../components/PopularMovies/genres"
import DescriptionMovie from "./descriptionMovie"
import MovieHeader from "./movieHeader"
import { getMovieRandom, getGenres, getMoviesNewReleases, getMoviesMustWatch } from "../../../services/apiService"
import NewReleases from "../../../components/PopularMovies/newReleases"
import MustWatch from "../../../components/PopularMovies/mustWatch"


const Movies = () => {
  const [randomMovie, setRandomMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [newReleases, setNewReleases] = useState([]);
  const [mustWatch, setMustWatch] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const randomMovieResult = await getMovieRandom();
        setRandomMovie(randomMovieResult);

        const genresResult = await getGenres();
        setGenres(genresResult);

        const newReleasesResult = await getMoviesNewReleases();
        setNewReleases(newReleasesResult);

        const mustWatchResult = await getMoviesMustWatch();
        setMustWatch(mustWatchResult);

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log('Random', randomMovie)
  console.log('Genres', genres)
  console.log("New Releases", newReleases)
  console.log('Must Watch', mustWatch)


  return (

    <section className="p-4 grid grid-cols-1 gap-2">
      <MovieHeader img={randomMovie.trailer_image_url} title={randomMovie.title} description={randomMovie.description} />
      <DescriptionMovie title={randomMovie.title} desc={randomMovie.description} />
      <div className="flex justify-center mt-2 items-center  -translate-y-36">
        <button className="bg-red-800 font-bold hover:shadow-lg hover:shadow-red-500/40 rounded-lg text-xs h-10" ata-ripple-light="true">
          <svg width="158" height="56" viewBox="0 0 158 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" width="157" height="56" rx="8" fill="#790000" />
            <path fillRule="evenodd" clipRule="evenodd" d="M29.75 20.5949C29.75 18.9311 31.5338 17.8764 32.9917 18.6782L46.4557 26.0834C47.9668 26.9145 47.9668 29.0858 46.4557 29.9168L32.9917 37.322C31.5338 38.1239 29.75 37.0691 29.75 35.4053V20.5949Z" fill="white" />
            <path d="M57.76 35V22.04H62.998C63.124 22.04 63.28 22.046 63.466 22.058C63.652 22.064 63.829 22.082 63.997 22.112C64.717 22.226 65.317 22.472 65.797 22.85C66.283 23.228 66.646 23.705 66.886 24.281C67.126 24.857 67.246 25.493 67.246 26.189C67.246 26.891 67.126 27.53 66.886 28.106C66.646 28.682 66.283 29.159 65.797 29.537C65.317 29.915 64.717 30.161 63.997 30.275C63.829 30.299 63.649 30.317 63.457 30.329C63.271 30.341 63.118 30.347 62.998 30.347H59.641V35H57.76ZM59.641 28.565H62.926C63.046 28.565 63.178 28.559 63.322 28.547C63.472 28.535 63.613 28.514 63.745 28.484C64.129 28.394 64.438 28.229 64.672 27.989C64.906 27.743 65.074 27.461 65.176 27.143C65.278 26.825 65.329 26.507 65.329 26.189C65.329 25.871 65.278 25.556 65.176 25.244C65.074 24.926 64.906 24.647 64.672 24.407C64.438 24.161 64.129 23.993 63.745 23.903C63.613 23.867 63.472 23.843 63.322 23.831C63.178 23.819 63.046 23.813 62.926 23.813H59.641V28.565ZM69.2252 35V21.77H71.1062V35H69.2252ZM76.5538 35.27C75.8338 35.27 75.2308 35.138 74.7448 34.874C74.2588 34.604 73.8898 34.25 73.6378 33.812C73.3918 33.368 73.2688 32.882 73.2688 32.354C73.2688 31.862 73.3558 31.43 73.5298 31.058C73.7038 30.686 73.9618 30.371 74.3038 30.113C74.6458 29.849 75.0658 29.636 75.5638 29.474C75.9958 29.348 76.4848 29.237 77.0308 29.141C77.5768 29.045 78.1498 28.955 78.7498 28.871C79.3558 28.787 79.9558 28.703 80.5498 28.619L79.8658 28.997C79.8778 28.235 79.7158 27.671 79.3798 27.305C79.0498 26.933 78.4798 26.747 77.6698 26.747C77.1598 26.747 76.6918 26.867 76.2658 27.107C75.8398 27.341 75.5428 27.731 75.3748 28.277L73.6198 27.737C73.8598 26.903 74.3158 26.24 74.9878 25.748C75.6658 25.256 76.5658 25.01 77.6878 25.01C78.5578 25.01 79.3138 25.16 79.9558 25.46C80.6038 25.754 81.0778 26.222 81.3778 26.864C81.5338 27.182 81.6298 27.518 81.6658 27.872C81.7018 28.226 81.7198 28.607 81.7198 29.015V35H80.0548V32.777L80.3788 33.065C79.9768 33.809 79.4638 34.364 78.8398 34.73C78.2218 35.09 77.4598 35.27 76.5538 35.27ZM76.8868 33.731C77.4208 33.731 77.8798 33.638 78.2638 33.452C78.6478 33.26 78.9568 33.017 79.1908 32.723C79.4248 32.429 79.5778 32.123 79.6498 31.805C79.7518 31.517 79.8088 31.193 79.8208 30.833C79.8388 30.473 79.8478 30.185 79.8478 29.969L80.4598 30.194C79.8658 30.284 79.3258 30.365 78.8398 30.437C78.3538 30.509 77.9128 30.581 77.5168 30.653C77.1268 30.719 76.7788 30.8 76.4728 30.896C76.2148 30.986 75.9838 31.094 75.7798 31.22C75.5818 31.346 75.4228 31.499 75.3028 31.679C75.1888 31.859 75.1318 32.078 75.1318 32.336C75.1318 32.588 75.1948 32.822 75.3208 33.038C75.4468 33.248 75.6388 33.416 75.8968 33.542C76.1548 33.668 76.4848 33.731 76.8868 33.731ZM84.826 39.32L86.707 34.199L86.734 35.711L82.495 25.28H84.457L87.625 33.335H87.049L90.073 25.28H91.981L86.617 39.32H84.826ZM96.9944 35V22.04H98.9024L105.283 31.67V22.04H107.191V35H105.283L98.9024 25.361V35H96.9944ZM113.924 35.27C112.952 35.27 112.109 35.051 111.395 34.613C110.681 34.175 110.129 33.572 109.739 32.804C109.355 32.03 109.163 31.139 109.163 30.131C109.163 29.117 109.361 28.226 109.757 27.458C110.153 26.684 110.708 26.084 111.422 25.658C112.136 25.226 112.97 25.01 113.924 25.01C114.896 25.01 115.739 25.229 116.453 25.667C117.167 26.105 117.719 26.708 118.109 27.476C118.499 28.244 118.694 29.129 118.694 30.131C118.694 31.145 118.496 32.039 118.1 32.813C117.71 33.581 117.158 34.184 116.444 34.622C115.73 35.054 114.89 35.27 113.924 35.27ZM113.924 33.497C114.854 33.497 115.547 33.185 116.003 32.561C116.465 31.931 116.696 31.121 116.696 30.131C116.696 29.117 116.462 28.307 115.994 27.701C115.532 27.089 114.842 26.783 113.924 26.783C113.294 26.783 112.775 26.927 112.367 27.215C111.959 27.497 111.656 27.89 111.458 28.394C111.26 28.892 111.161 29.471 111.161 30.131C111.161 31.151 111.395 31.967 111.863 32.579C112.331 33.191 113.018 33.497 113.924 33.497ZM122.391 35L119.421 25.271L121.284 25.28L123.318 31.949L125.37 25.28H126.99L129.042 31.949L131.076 25.28H132.93L129.96 35H128.448L126.18 27.962L123.903 35H122.391Z" fill="white" />
          </svg>
        </button>
      </div>

      <section className="">
        <h2>Our Genres</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-11">
          <div className="bg-rose-200">01</div>
          <div className="bg-rose-200">02</div>
          <div className="bg-rose-200">03</div>
          <div className="bg-rose-200">04</div>
        </div>
      </section>
      <section className="">
        <h2>Popular Top 10 In Genres</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-11">
          {genres?.map((genre, index) => (
            <TopGenres key={index} genres={genre} />
          ))}
        </div>
      </section>
      <section className="">
        <h2>New Releases </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-11">
          {newReleases.map((release, index) => (
            <NewReleases key={index} release={release} />
          ))}
        </div>
      </section>
      <section className="">
        <h2>Must - Watch Movies </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-11">
          {mustWatch.map((movie, index) => (
            <MustWatch key={index} movie={movie} />
          ))}
        </div>
      </section>
    </section>


  )
}

export default Movies