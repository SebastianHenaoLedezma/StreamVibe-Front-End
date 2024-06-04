import React, { useState } from 'react';
import Generos from '../ExploreCategories';
import './styles.sass';

const Slider = ({ genres }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < genres.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const progress = (currentIndex / (genres.length - 5)) * 100;

  return (
    <div className="row">
      <div className="slider">
        <div className="slider-controls">
          <div className="sliderButton">
            <button onClick={handlePrevious} disabled={currentIndex === 0}>
              <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1717477443/Flecha_izquierda_msejgj.png" alt="Flecha izquierda" width="28" height="28" />
            </button>
          </div>
          <div className="slider-progress">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="sliderButton">
            <button onClick={handleNext} disabled={currentIndex === genres.length - 5}>
              <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1717477443/Flecha_derecha_airdbe.png" alt="Flecha derecha" width="28" height="28" />
            </button>
          </div>
        </div>
        <div className="slider-cards">
          {genres.slice(currentIndex, currentIndex + 5).map((genero, index) => (
            <Generos genero={genero} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
