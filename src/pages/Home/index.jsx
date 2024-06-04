import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/Logo.png';
import { getGenres, getFaqs } from '../../services/apiService';
import Generos from "../../components/ExploreCategories";
import ExploreCategories from '../../components/ExploreCategories';
import FrecuentlyQuestions from '../../components/FrecuentlyQuestions';
import StreamingDevices from '../../components/StreamingDevices';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.sass'
import { FaPlay } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';

import jsonDevices from "../../data/devices.json";
import jsonGeneros from "../../data/generos.json";
import jsonQuestions from "../../data/questions.json";
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const section1Ref = useRef(null);
  const { globalUser, setGlobalUser } = useContext(UserContext);
  const navigate = useNavigate();

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

  const handleButtonClick = () => {
    if (globalUser) {
      navigate('/movies');
    } else {
      navigate('/login');
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;


  return (
    <main className="Home px-5">
      <section className="containerHome">
        <div className="containerHome_banner">
          <img
            src="https://res.cloudinary.com/dhhyc88td/image/upload/v1715893138/Sub_Container_qlcvxf.png"
            alt=""
          />
        </div>
        <div className="containerHome_description">
          <h1 className="containerHome_description-title">
            The Best Streaming Experience
          </h1>
          <p className="containerHome_description-paragraph">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="containerHome_description-button" onClick={handleButtonClick}>
            <FaPlay className="button-icon" />
            Start Watching Now
          </button>
        </div>
      </section>

      <section id="categories" className="containerGenres">
        <div className="containerGenres__titleAndSlider">
          <h1 className="genresTitle">Explore our wide variety of categories</h1>
          <p className="genresDescription">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="grid grid-cols-2 mt-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-11">
          {genres.map((genero, index) => (
            <Generos genero={genero} key={index} />
          ))}
        </div>
      </section>

      <section id="devices" className="containerDevices">
        <div className="containerDevices__title">
          <h1 className="devicesTitle">We Provide you streaming experience across various devices.</h1>
          <p className="devicesDescription">
            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
          </p>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-11">
          {jsonDevices.map((device, index) => (
            <StreamingDevices device={device} key={index} />
          ))}
        </div>
      </section>

      <section id="faq" className="containerQuestions">
        <div className="containerQuestions__title">
          <div className="containerQuestion__title__text">
            <h1 className="questionsTitle">Frequently Asked Questions</h1>
            <p className="questionsDescription" styles="color: #999999">
              Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
            </p>
          </div>

        </div>
        <div className="containerQuestions__exploreQuestions grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          {faqs.map((pregunta, index) => (
            <FrecuentlyQuestions pregunta={pregunta} key={index} numbers={index + 1} />
          ))}
        </div>
      </section>


      <div className="bannerHome">
        <img
          src="https://res.cloudinary.com/dhhyc88td/image/upload/v1716093298/Container_cdluor.png"
          alt=""
        />
        <button className="callToAction">
          Start a Free Trial
        </button>
      </div>
    </main>
  );
};

export default Home;
