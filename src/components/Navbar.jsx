import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const navContainerRef = useRef(null);
  const contactRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    if (menuOpen) { document.body.style.overflow = "hidden"; }
    else { document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close contact popup on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setShowContact(false);
      }
    };
    if (showContact) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showContact]);

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [location]);

  const navLinks = [
    { label: "HOME", action: () => scrollToSection("home") },
    { label: "ABOUT US", action: () => navigate("/about") },
    { label: "COURSES", action: () => scrollToSection("courses") },
    { label: "TEST SERIES", action: () => scrollToSection("test-series") },
    { label: "STUDY MATERIAL", action: () => navigate("/study-material") },
    { label: "CURRENT AFFAIRS", action: () => navigate("/current-affairs") },
    { label: "BLOG", action: () => navigate("/blog") },
  ];

  return (
    <>
      <div className="move">
        <h1>* Admission Open for the 2025-26 Academic Year *</h1>
      </div>

      <div className={`navContainer ${scrolled ? "nav-scrolled" : ""}`} ref={navContainerRef}>
        <div className="navbar">
          <div className="logo" onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
            <img src="/images/logo.jpeg" alt="Ravindra's IAS Academy Logo" />
          </div>

          <div className="links desktop-links">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="nav-link"
                onClick={(e) => { e.preventDefault(); link.action(); }}
                id={`nav-link-${link.label.replace(/\s/g, "-").toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            {/* Contact Us with popup */}
            <div className="nav-contact-wrapper" ref={contactRef}>
              <a
                href="#"
                className="nav-link"
                onClick={(e) => { e.preventDefault(); setShowContact(!showContact); }}
                id="nav-link-contact-us"
              >
                CONTACT US
              </a>
              {showContact && (
                <div className="contact-popup">
                  <div className="contact-popup-arrow"></div>
                  <h4 className="contact-popup-title">Get in Touch</h4>
                  <a href="tel:+919953101176" className="contact-popup-item">
                    <span className="contact-popup-icon">📞</span>
                    <div>
                      <span className="contact-popup-label">Phone</span>
                      <span className="contact-popup-value">+91 9953101176</span>
                    </div>
                  </a>
                  <a href="tel:+919911061176" className="contact-popup-item">
                    <span className="contact-popup-icon">📱</span>
                    <div>
                      <span className="contact-popup-label">Alternate</span>
                      <span className="contact-popup-value">+91 9911061176</span>
                    </div>
                  </a>
                  <a href="mailto:ravindrasiasdelhi@gmail.com" className="contact-popup-item">
                    <span className="contact-popup-icon">✉️</span>
                    <div>
                      <span className="contact-popup-label">Email</span>
                      <span className="contact-popup-value">ravindrasiasdelhi@gmail.com</span>
                    </div>
                  </a>
                  <a href="https://wa.me/919953101176" target="_blank" rel="noopener noreferrer" className="contact-popup-item contact-popup-whatsapp">
                    <span className="contact-popup-icon">💬</span>
                    <div>
                      <span className="contact-popup-label">WhatsApp</span>
                      <span className="contact-popup-value">Chat with us</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>

          <a href="#" className="download-app-btn desktop-only" onClick={(e) => e.preventDefault()} id="nav-download-app">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download App
          </a>

          <button className={`hamburger ${menuOpen ? "hamburger-active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu" id="hamburger-btn">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu-overlay ${menuOpen ? "mobile-menu-open" : ""}`} onClick={() => setMenuOpen(false)}></div>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo"><img src="/images/logo.jpeg" alt="Logo" /></div>
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu" id="mobile-menu-close-btn">✕</button>
        </div>
        <nav className="mobile-menu-links">
          {navLinks.map((link, i) => (
            <a key={i} href="#" className="mobile-menu-link" onClick={(e) => { e.preventDefault(); link.action(); }} id={`mobile-nav-${link.label.replace(/\s/g, "-").toLowerCase()}`} style={{ animationDelay: `${i * 0.06}s` }}>
              <span className="mobile-link-indicator"></span>
              {link.label}
            </a>
          ))}
          {/* Contact in mobile — direct links */}
          <div className="mobile-contact-section">
            <p className="mobile-contact-title">Contact Us</p>
            <a href="tel:+919953101176" className="mobile-menu-link" style={{ animationDelay: `${navLinks.length * 0.06}s` }}>
              <span className="mobile-link-indicator"></span>📞 +91 9953101176
            </a>
            <a href="mailto:ravindrasiasdelhi@gmail.com" className="mobile-menu-link" style={{ animationDelay: `${(navLinks.length + 1) * 0.06}s` }}>
              <span className="mobile-link-indicator"></span>✉️ ravindrasiasdelhi@gmail.com
            </a>
          </div>
        </nav>
        <div className="mobile-menu-download">
          <a href="#" className="download-app-btn-mobile" onClick={(e) => e.preventDefault()} id="mobile-download-app">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download App
          </a>
        </div>
        <div className="mobile-menu-footer">
          <p>📞 +91 9953101176</p>
          <p>✉️ ravindrasiasdelhi@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
