import BannerHome from '../../components/BannerHome';
import ExploreCategories from '../../components/ExploreCategories';
import FrecuentlyQuestions from '../../components/FrecuentlyQuestions';
import StreamingDevices from '../../components/StreamingDevices';
import './styles.sass'
import { FaPlay } from 'react-icons/fa';

import { getGenres, getFaqs } from '../../services/apiService';
import { useEffect, useState } from 'react';


const Home = () => {
  const [genres, setGenres] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const genresResult = await getGenres();
        setGenres(genresResult);

        const faqsResult = await getFaqs();
        setFaqs(faqsResult);
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

  console.log('Generos', genres);
  console.log("Faqs", faqs);

  return (
    <main className='Home'>
      <section className='containerHome'>
        <div className='containerHome_banner'>
          <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1715893138/Sub_Container_qlcvxf.png" alt="" />
        </div>
        <div className='containerHome_description'>
          <h1 className='containerHome_description-title'>The Best Streaming Experience</h1>
          <p className="containerHome_description-paragraph">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
          <button className="containerHome_description-button">
            <FaPlay className="button-icon" />
              Start Watching Now
          </button>
        </div>
      </section>
        <StreamingDevices />
        <FrecuentlyQuestions />
      <div>
        <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1716093298/Container_cdluor.png" alt="" />
      </div>
    </main>
  )
}

export default Home