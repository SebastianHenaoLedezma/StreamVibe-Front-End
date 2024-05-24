import React, { useState } from "react";
import "./styles.sass";

const FrecuentlyQuestions = ({ pregunta, numbers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="containerQuestions">
      <div className="containerQuestions__thumbnails">
        <div className="faq-header">
          <div className="order">{numbers}</div>
          <div className="faq-question" onClick={toggleAnswer}>
            <h3 className="title">{pregunta.question}</h3>
            <img
              src={
                isOpen
                  ? "https://res.cloudinary.com/dhhyc88td/image/upload/v1716510965/Minus_ku2hqo.png"
                  : "https://res.cloudinary.com/dhhyc88td/image/upload/v1716436093/IconPlus_uyuvuz.png"
              }
              alt={isOpen ? "Minus" : "Plus"}
              className="plus-icon"
            />
          </div>
        </div>
        <div className={`faq-answer ${isOpen ? "open" : ""}`}>
          <p className="paragraph">{pregunta.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FrecuentlyQuestions;
