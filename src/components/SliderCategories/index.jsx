import './styles.sass';

const SliderNavigation = ({ onPrevClick, onNextClick }) => {
  return (
    <div className="navigation-buttons">
      <button className="prev-button" onClick={onPrevClick}>
        <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1716424831/IconRow_jptbh2.png" alt="Prev" />
      </button>
      <div className="nav-lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line active"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <button className="next-button" onClick={onNextClick}>
        <img src="https://res.cloudinary.com/dhhyc88td/image/upload/v1716424831/IconRow_jptbh2.png" alt="Next" />
      </button>
    </div>
  );
};

export default SliderNavigation;
