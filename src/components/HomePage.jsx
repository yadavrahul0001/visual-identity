import React, { useState } from "react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: "/images/homepage1.jpeg", title: "Slide 1" },
    { id: 2, image: "/images/home page2.jpeg", title: "Slide 2" },
    { id: 3, image: "/images/hp1.png", title: "Slide 3" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="homepage">
      <div className="homepage-slider">
        <div className="slider">
          <div className="slider-wrapper">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <img src={slide.image} alt={slide.title} />
              </div>
            ))}
          </div>

          <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="slider-btn slider-btn-next" onClick={nextSlide}>
            &#10095;
          </button>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>

      <div className="homepageImage">
        <img src="/images/sir.png" alt="Homepage Image" />
        <div className="text">
          <p>
            खुल जायेंगे सभी रास्ते तू रुकावटों से लड़ तो सही, <br/>सब होगा हासिल तू
            अपने जिद्द पर अड़ तो सही.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
