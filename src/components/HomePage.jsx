import React, { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/images/slider1.png",
    title: "Prepare For Your Future",
    subtitle: "Begin your journey to civil services excellence",
  },
  {
    image: "/images/slider2.png",
    title: "Expert Faculty Guidance",
    subtitle: "Learn from India's most experienced educators",
  },
  {
    image: "/images/slider3.png",
    title: "Success Starts Here",
    subtitle: "Join thousands of successful candidates",
  },
  {
    image: "/images/slider4.png",
    title: "Join India's Top Achievers",
    subtitle: "Your path to becoming a civil servant",
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <div className="homePage" id="home">
        <div className="homePageContent">
          <div className="slider">
            <div className="slider-wrapper">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentSlide ? "active" : ""}`}
                >
                  <img src={slide.image} alt={slide.title} />
                  <div className="slide-overlay"></div>
                  <div className="slide-caption">
                    <h2 className="slide-title">{slide.title}</h2>
                    <p className="slide-subtitle">{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className="slider-btn slider-btn-prev"
              onClick={prevSlide}
              aria-label="Previous slide"
              id="slider-prev"
            >
              ‹
            </button>
            <button
              className="slider-btn slider-btn-next"
              onClick={nextSlide}
              aria-label="Next slide"
              id="slider-next"
            >
              ›
            </button>

            {/* Dot Indicators */}
            <div className="slider-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  id={`slider-dot-${index}`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="slider-progress">
              <div
                className="slider-progress-bar"
                style={{
                  width: `${((currentSlide + 1) / slides.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
