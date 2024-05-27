import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CarouselControls = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="carousel-controls">
      <button className="carousel-control left" onClick={onPrevClick}>
        <FaArrowLeft />
      </button>
      <button className="carousel-control right" onClick={onNextClick}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CarouselControls;