import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <span className="about-badge">About Us</span>
          <h1 className="about-hero-title">Ravindra's IAS Academy</h1>
          <p className="about-hero-subtitle">
            Empowering civil services aspirants since 2010 with result-oriented
            coaching and unwavering commitment to excellence.
          </p>
          <Link to="/" className="about-back-btn" id="about-back-home">
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-founder">
        <div className="about-founder-container">
          <div className="about-founder-image">
            <img
              src="/images/sir.png"
              alt="Ravindra Sir - Founder"
              onError={(e) => {
                e.target.src = "/images/logo.jpeg";
              }}
            />
            <div className="founder-image-accent"></div>
          </div>
          <div className="about-founder-info">
            <span className="about-section-badge">Our Founder</span>
            <h2 className="about-section-title">Ravindra Sir</h2>
            <p className="about-founder-role">
              Founder & Director — Ravindra's IAS Academy
            </p>
            <p className="about-founder-desc">
              With over 15 years of dedicated experience in civil services
              coaching, Ravindra Sir has mentored thousands of aspirants and
              produced numerous top-ranking officers in UPSC, UPPSC, SSC, and
              other competitive examinations.
            </p>
            <p className="about-founder-desc">
              His unique pedagogy combines conceptual clarity, analytical
              thinking, and a student-centric approach that has made Ravindra's
              IAS Academy one of the most trusted names in competitive exam
              preparation.
            </p>
            <div className="founder-stats">
              <div className="founder-stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="founder-stat">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Students Mentored</span>
              </div>
              <div className="founder-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Selections</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institute Info */}
      <section className="about-institute">
        <div className="about-institute-container">
          <div className="about-section-header">
            <span className="about-section-badge">Our Institute</span>
            <h2 className="about-section-title">
              Why Choose Ravindra's IAS Academy?
            </h2>
            <p className="about-section-desc">
              We believe in a holistic approach to civil services preparation that
              goes beyond textbook learning.
            </p>
          </div>

          <div className="about-features-grid">
            <div className="about-feature-card">
              <div className="feature-icon">📚</div>
              <h3>Comprehensive Curriculum</h3>
              <p>
                Our meticulously designed curriculum covers the entire UPSC
                syllabus with in-depth analysis and contemporary relevance.
              </p>
            </div>
            <div className="about-feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Expert Faculty</h3>
              <p>
                Our team of experienced educators and subject-matter experts
                bring real-world insights into every classroom session.
              </p>
            </div>
            <div className="about-feature-card">
              <div className="feature-icon">📝</div>
              <h3>Test Series & Evaluation</h3>
              <p>
                Regular mock tests, answer writing practice, and personalized
                feedback ensure continuous improvement and exam readiness.
              </p>
            </div>
            <div className="about-feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Focused Mentorship</h3>
              <p>
                One-on-one mentorship sessions help students build strategy,
                manage time, and stay motivated throughout their preparation.
              </p>
            </div>
            <div className="about-feature-card">
              <div className="feature-icon">🏛️</div>
              <h3>Modern Infrastructure</h3>
              <p>
                State-of-the-art classrooms, a well-stocked library, and
                digital learning tools provide an optimal study environment.
              </p>
            </div>
            <div className="about-feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Proven Track Record</h3>
              <p>
                Hundreds of successful selections in UPSC, UPPSC, SSC, and
                various state-level examinations speak for our excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="about-mission-container">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, affordable, and result-oriented coaching
              that empowers every aspirant to achieve their dream of serving the
              nation through civil services.
            </p>
          </div>
          <div className="mission-card">
            <div className="mission-icon">🔭</div>
            <h3>Our Vision</h3>
            <p>
              To be the most trusted and innovative coaching institute in India,
              producing ethical, competent, and compassionate civil servants who
              drive positive change in society.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <div className="about-cta-container">
          <h2>Ready to Begin Your Journey?</h2>
          <p>
            Join thousands of successful candidates who started their civil
            services journey with Ravindra's IAS Academy.
          </p>
          <div className="about-cta-info">
            <div className="cta-info-item">
              <span>📍</span>
              <span>
                102, 2nd Floor, Ansal Building, Dr. Mukherjee Nagar, Delhi-110009
              </span>
            </div>
            <div className="cta-info-item">
              <span>📞</span>
              <span>+91 9953101176</span>
            </div>
            <div className="cta-info-item">
              <span>✉️</span>
              <span>ravindrasiasdelhi@gmail.com</span>
            </div>
          </div>
          <Link to="/" className="about-cta-btn" id="about-cta-home">
            ← Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
