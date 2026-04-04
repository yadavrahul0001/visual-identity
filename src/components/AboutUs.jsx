import React from "react";
import { Link } from "react-router-dom";

const facultyData = [
  {
    name: "Ravindra Sir",
    role: "Founder & Director",
    subject: "General Studies & Political Science",
    experience: "15+ Years",
    desc: "Visionary educator who has mentored thousands of civil services aspirants. Known for his analytical teaching methodology and strategic approach to UPSC preparation.",
    initials: "RS",
    specializations: ["UPSC Strategy", "Political Science", "Mentorship"],
  },
  {
    name: "Dr. Meera Sharma",
    role: "Senior Faculty",
    subject: "History & Art and Culture",
    experience: "12+ Years",
    desc: "PhD in Ancient Indian History from JNU. Brings historical events to life with her narrative-driven teaching style. Her students consistently score high in History optional.",
    initials: "MS",
    specializations: ["Ancient History", "Art & Culture", "Optional"],
  },
  {
    name: "Prof. Ankit Verma",
    role: "Senior Faculty",
    subject: "Geography & Environment",
    experience: "10+ Years",
    desc: "Former NET-JRF holder with a passion for making Geography intuitive. Uses map-based learning and current environmental case studies for comprehensive preparation.",
    initials: "AV",
    specializations: ["Physical Geography", "Environment", "Map Work"],
  },
  {
    name: "Dr. Priya Singh",
    role: "Faculty",
    subject: "Economics & Indian Economy",
    experience: "8+ Years",
    desc: "M.Phil in Economics from Delhi School of Economics. Specializes in connecting economic theory with real-world policy analysis for Mains answer writing.",
    initials: "PS",
    specializations: ["Indian Economy", "Economic Survey", "Policy Analysis"],
  },
  {
    name: "Prof. Rajesh Kumar",
    role: "Faculty",
    subject: "Science & Technology, CSAT",
    experience: "9+ Years",
    desc: "IIT graduate turned educator. Makes complex scientific concepts accessible and fun. His CSAT crash course is renowned for its success rate among aspirants.",
    initials: "RK",
    specializations: ["Science & Tech", "CSAT", "Current S&T"],
  },
  {
    name: "Dr. Sonal Gupta",
    role: "Faculty",
    subject: "Ethics, Integrity & Aptitude",
    experience: "7+ Years",
    desc: "Psychology background with deep expertise in GS Paper IV. Uses case study methodology and philosophical frameworks to build strong ethical reasoning skills.",
    initials: "SG",
    specializations: ["GS Paper IV", "Case Studies", "Ethics"],
  },
];

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section — Text-only, no banner image */}
      <section className="about-hero-v2">
        <div className="about-hero-v2-bg"></div>
        <div className="about-hero-v2-content">
          <span className="about-v2-badge">About Us</span>
          <h1 className="about-hero-v2-title">
            Ravindra's <span className="about-title-accent">IAS Academy</span>
          </h1>
          <div className="about-hero-v2-divider"></div>
          <p className="about-hero-v2-subtitle">
            Empowering civil services aspirants since 2010 with result-oriented
            coaching, unwavering commitment to excellence, and a legacy of
            producing top-ranking officers across India.
          </p>
          <div className="about-hero-v2-stats">
            <div className="about-v2-stat">
              <span className="about-v2-stat-number">15+</span>
              <span className="about-v2-stat-label">Years of Excellence</span>
            </div>
            <div className="about-v2-stat-divider"></div>
            <div className="about-v2-stat">
              <span className="about-v2-stat-number">10,000+</span>
              <span className="about-v2-stat-label">Students Mentored</span>
            </div>
            <div className="about-v2-stat-divider"></div>
            <div className="about-v2-stat">
              <span className="about-v2-stat-number">500+</span>
              <span className="about-v2-stat-label">Selections</span>
            </div>
          </div>
          <Link to="/" className="about-v2-back-btn" id="about-back-home">
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-founder-v2">
        <div className="about-founder-v2-container">
          <div className="about-founder-v2-image">
            <img
              src="/images/sir.png"
              alt="Ravindra Sir — Founder"
              onError={(e) => {
                e.target.src = "/images/logo.jpeg";
              }}
            />
            <div className="founder-v2-accent"></div>
          </div>
          <div className="about-founder-v2-info">
            <span className="about-v2-section-badge">Our Founder</span>
            <h2 className="about-v2-section-title">Ravindra Sir</h2>
            <p className="about-founder-v2-role">
              Founder & Director — Ravindra's IAS Academy
            </p>
            <p className="about-founder-v2-desc">
              With over 15 years of dedicated experience in civil services
              coaching, Ravindra Sir has mentored thousands of aspirants and
              produced numerous top-ranking officers in UPSC, UPPSC, SSC, and
              other competitive examinations.
            </p>
            <p className="about-founder-v2-desc">
              His unique pedagogy combines conceptual clarity, analytical
              thinking, and a student-centric approach that has made Ravindra's
              IAS Academy one of the most trusted names in competitive exam
              preparation.
            </p>
            <div className="founder-v2-highlights">
              <div className="founder-v2-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Expert in UPSC Strategy & Mentorship</span>
              </div>
              <div className="founder-v2-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Produced AIR 2 and 500+ Selections</span>
              </div>
              <div className="founder-v2-highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Pioneer of Integrated UPSC Coaching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why-v2">
        <div className="about-why-v2-container">
          <div className="about-v2-section-header">
            <span className="about-v2-section-badge">Our Institute</span>
            <h2 className="about-v2-section-title">
              Why Choose Ravindra's IAS Academy?
            </h2>
            <div className="section-title-divider"></div>
            <p className="about-v2-section-desc">
              We believe in a holistic approach to civil services preparation
              that goes beyond textbook learning.
            </p>
          </div>

          <div className="about-v2-features-grid">
            {[
              { icon: "📚", title: "Comprehensive Curriculum", desc: "Our meticulously designed curriculum covers the entire UPSC syllabus with in-depth analysis and contemporary relevance." },
              { icon: "👨‍🏫", title: "Expert Faculty", desc: "Our team of experienced educators and subject-matter experts bring real-world insights into every classroom session." },
              { icon: "📝", title: "Test Series & Evaluation", desc: "Regular mock tests, answer writing practice, and personalized feedback ensure continuous improvement and exam readiness." },
              { icon: "🎯", title: "Focused Mentorship", desc: "One-on-one mentorship sessions help students build strategy, manage time, and stay motivated throughout their preparation." },
              { icon: "🏛️", title: "Modern Infrastructure", desc: "State-of-the-art classrooms, a well-stocked library, and digital learning tools provide an optimal study environment." },
              { icon: "🏆", title: "Proven Track Record", desc: "Hundreds of successful selections in UPSC, UPPSC, SSC, and various state-level examinations speak for our excellence." },
            ].map((feature, i) => (
              <div className="about-v2-feature-card" key={i}>
                <div className="about-v2-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section — Professional Text-Based Cards */}
      <section className="about-faculty-v2">
        <div className="about-faculty-v2-container">
          <div className="about-v2-section-header">
            <span className="about-v2-section-badge">Our Faculty</span>
            <h2 className="about-v2-section-title">
              Meet Our Expert Educators
            </h2>
            <div className="section-title-divider"></div>
            <p className="about-v2-section-desc">
              A team of passionate, experienced, and highly qualified
              professionals dedicated to shaping India's future civil servants.
            </p>
          </div>

          <div className="faculty-v2-grid">
            {facultyData.map((faculty, index) => (
              <div className="faculty-v2-card" key={index} id={`faculty-card-${index}`}>
                <div className="faculty-v2-card-top">
                  <div className="faculty-v2-initials-circle">
                    <span>{faculty.initials}</span>
                  </div>
                  <div className="faculty-v2-exp-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{faculty.experience}</span>
                  </div>
                </div>
                <div className="faculty-v2-card-info">
                  <h3 className="faculty-v2-name">{faculty.name}</h3>
                  <p className="faculty-v2-role">{faculty.role}</p>
                  <p className="faculty-v2-subject">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                    </svg>
                    {faculty.subject}
                  </p>
                  <p className="faculty-v2-desc">{faculty.desc}</p>
                  <div className="faculty-v2-specializations">
                    {faculty.specializations.map((spec, i) => (
                      <span key={i} className="faculty-v2-spec-tag">{spec}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission-v2">
        <div className="about-mission-v2-container">
          <div className="mission-v2-card">
            <div className="mission-v2-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, affordable, and result-oriented coaching
              that empowers every aspirant to achieve their dream of serving the
              nation through civil services.
            </p>
          </div>
          <div className="mission-v2-card">
            <div className="mission-v2-icon">🔭</div>
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
      <section className="about-cta-v2">
        <div className="about-cta-v2-container">
          <h2>Ready to Begin Your Journey?</h2>
          <p>
            Join thousands of successful candidates who started their civil
            services journey with Ravindra's IAS Academy.
          </p>
          <div className="about-cta-v2-info">
            <div className="cta-v2-info-item">
              <span>📍</span>
              <span>
                102, 2nd Floor, Ansal Building, Dr. Mukherjee Nagar, Delhi-110009
              </span>
            </div>
            <div className="cta-v2-info-item">
              <span>📞</span>
              <span>+91 9953101176</span>
            </div>
            <div className="cta-v2-info-item">
              <span>✉️</span>
              <span>ravindrasiasdelhi@gmail.com</span>
            </div>
          </div>
          <Link to="/" className="about-cta-v2-btn" id="about-cta-home">
            ← Return to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
