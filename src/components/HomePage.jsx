import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "/images/homeimg1.jpg",
    title: "Shape Your Future in",
    highlight: "Civil Services",
    subtitle: "India's most trusted coaching institute with 15+ years of proven excellence in UPSC & State PCS preparation.",
  },
  {
    image: "/images/homeimg2.jpg",
    title: "Learn from",
    highlight: "Expert Faculty",
    subtitle: "Our experienced educators have guided 500+ selections across UPSC, UPPSC, SSC, and Judiciary examinations.",
  },
  {
    image: "/images/homeimg3.jpg",
    title: "Your Success",
    highlight: "Starts Here",
    subtitle: "Comprehensive study material, test series, and personalized mentoring to help you crack any exam.",
  },
  {
    image: "/images/homeimg4.jpg",
    title: "Join India's Top",
    highlight: "Achievers",
    subtitle: "Be part of a community that consistently produces top rankers in India's toughest competitive exams.",
  },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Selections" },
  { value: "10,000+", label: "Students Trained" },
  { value: "50+", label: "Expert Faculty" },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="hero-section" id="home">
      {/* Background Slider */}
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "hero-slide-active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} className="hero-slide-img" />
          </div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Admissions Open 2025-26
          </div>

          {/* Title */}
          <h1 className="hero-title" key={`title-${currentSlide}`}>
            {slides[currentSlide].title}{" "}
            <span className="hero-title-highlight">{slides[currentSlide].highlight}</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle" key={`sub-${currentSlide}`}>
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <button
              className="hero-cta-primary"
              onClick={() => scrollToSection("courses")}
              id="hero-explore-courses"
            >
              Explore Courses
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button
              className="hero-cta-secondary"
              onClick={() => scrollToSection("courses")}
              id="hero-free-counselling"
            >
              Free Counselling
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <div className="hero-trust-avatars">
              <div className="hero-avatar" style={{ background: "#3b82f6" }}>R</div>
              <div className="hero-avatar" style={{ background: "#10b981" }}>S</div>
              <div className="hero-avatar" style={{ background: "#f59e0b" }}>A</div>
              <div className="hero-avatar" style={{ background: "#8b5cf6" }}>P</div>
            </div>
            <p className="hero-trust-text">
              <strong>2,500+</strong> students currently enrolled
            </p>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="hero-slide-nav">
          <div className="hero-slide-counter">
            <span className="hero-counter-current">{String(currentSlide + 1).padStart(2, "0")}</span>
            <span className="hero-counter-sep">/</span>
            <span className="hero-counter-total">{String(slides.length).padStart(2, "0")}</span>
          </div>
          <div className="hero-slide-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === currentSlide ? "hero-dot-active" : ""}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                id={`hero-dot-${i}`}
              />
            ))}
          </div>
          <div className="hero-slide-arrows">
            <button className="hero-arrow" onClick={prevSlide} aria-label="Previous" id="hero-prev">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="hero-arrow" onClick={nextSlide} aria-label="Next" id="hero-next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="hero-progress">
        <div
          className="hero-progress-bar"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* Stats Bar */}
      <div className="hero-stats-bar">
        {stats.map((stat, i) => (
          <div className="hero-stat" key={i}>
            <span className="hero-stat-value">{stat.value}</span>
            <span className="hero-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
