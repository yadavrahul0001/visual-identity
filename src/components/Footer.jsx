import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLink = (e, action) => {
    e.preventDefault();
    action();
  };

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z" fill="#1a1a2e" />
        </svg>
      </div>

      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/logo.jpeg" alt="Ravindra's IAS Logo" className="footer-logo-img" />
            <p className="footer-tagline">
              Empowering aspirants to achieve their dreams of serving the nation through civil services.
            </p>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-link-list">
              <li><a href="#" onClick={(e) => handleLink(e, () => scrollToSection("home"))} id="footer-link-home">Home</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, () => scrollToSection("courses"))} id="footer-link-courses">Courses</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, () => navigate("/about"))} id="footer-link-about">About Us</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, () => scrollToSection("toppers"))} id="footer-link-results">Our Toppers</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, () => scrollToSection("test-series"))} id="footer-link-test-series">Test Series</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-link-list">
              <li><a href="#" onClick={(e) => handleLink(e, () => navigate("/current-affairs"))} id="footer-link-current-affairs">Current Affairs</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, () => navigate("/study-material"))} id="footer-link-study-material">Study Material</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, () => navigate("/blog"))} id="footer-link-blog">Blog</a></li>
              <li><a href="#" onClick={(e) => handleLink(e, () => scrollToSection("faq"))} id="footer-link-faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-links-group footer-contact-group">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact-info">
              {/* HEAD OFFICE */}
              <div className="footer-office-block">
                <h4 className="footer-office-title">HEAD OFFICE</h4>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📍</span>
                  <a href="https://maps.app.goo.gl/1Y7ZVEGqFmkQK4dCA" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>102, 2nd Floor, 8-9, Ansal Building, Near Chawla Restaurant Lane, Dr. Mukherjee Nagar, Delhi-110009</a>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📞</span>
                  <span>
                    <a href="tel:+919953101176" style={{ color: "inherit", textDecoration: "none" }}>+91 9953101176</a>,{" "}
                    <a href="tel:+918700170483" style={{ color: "inherit", textDecoration: "none" }}>+91 8700170483</a>
                  </span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">✉️</span>
                  <a href="mailto:ravindrasiasdelhi@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>ravindrasiasdelhi@gmail.com</a>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">🌐</span>
                  <a href="https://www.Ravindrasias.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>www.Ravindrasias.com</a>
                </div>
              </div>
              {/* BRANCH OFFICE */}
              <div className="footer-office-block">
                <h4 className="footer-office-title">BRANCH OFFICE</h4>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📍</span>
                  <span>1st Floor, Krishna Tower, Phoolbagh Chauraha, Gwalior</span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">📞</span>
                  <span>
                    <a href="tel:+917042027486" style={{ color: "inherit", textDecoration: "none" }}>7042027486</a>,{" "}
                    <a href="tel:+918359038350" style={{ color: "inherit", textDecoration: "none" }}>8359038350</a>
                  </span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-contact-icon">✉️</span>
                  <a href="mailto:gwaliorravindrasias@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>gwaliorravindrasias@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-social-section">
          <h3 className="footer-social-title">Connect With Us</h3>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/ravindrasinstitute" target="_blank" rel="noopener noreferrer" className="footer-social-btn" id="footer-social-facebook" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
            <a href="https://www.instagram.com/RAVINDRASINSTITUTE/" target="_blank" rel="noopener noreferrer" className="footer-social-btn" id="footer-social-instagram" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
            <a href="https://youtube.com/@gsncertwithravindrasir?si=CIUhSNoZ5Hfsbmgf" target="_blank" rel="noopener noreferrer" className="footer-social-btn" id="footer-social-youtube" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <a href="https://t.me/RavindrasInstitute" target="_blank" rel="noopener noreferrer" className="footer-social-btn" id="footer-social-telegram" aria-label="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Ravindra's IAS Academy. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" id="footer-privacy">Privacy Policy</a>
            <a href="#" id="footer-terms">Terms of Service</a>
            <a href="#" id="footer-sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
