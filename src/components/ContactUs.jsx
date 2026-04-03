import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page" id="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <span className="contact-badge">Contact Us</span>
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            Have questions about our courses, admissions, or anything else? We're here to help you start your journey towards success.
          </p>
          <Link to="/" className="contact-back-btn" id="contact-back-home">
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="contact-cards-section">
        <div className="contact-cards-container">
          <a href="tel:+919953101176" className="contact-card" id="contact-card-phone">
            <div className="contact-card-icon contact-card-icon-phone">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h3 className="contact-card-title">Call Us</h3>
            <p className="contact-card-value">+91 9953101176</p>
            <span className="contact-card-action">Tap to call →</span>
          </a>

          <a href="https://wa.me/918700170483" target="_blank" rel="noopener noreferrer" className="contact-card" id="contact-card-whatsapp">
            <div className="contact-card-icon contact-card-icon-whatsapp">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="contact-card-title">WhatsApp</h3>
            <p className="contact-card-value">+91 870 017 0483</p>
            <span className="contact-card-action">Chat now →</span>
          </a>

          <a href="mailto:ravindrasiasdelhi@gmail.com" className="contact-card" id="contact-card-email">
            <div className="contact-card-icon contact-card-icon-email">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 className="contact-card-title">Email</h3>
            <p className="contact-card-value">ravindrasiasdelhi@gmail.com</p>
            <span className="contact-card-action">Send email →</span>
          </a>

          <a href="https://maps.app.goo.gl/1Y7ZVEGqFmkQK4dCA" target="_blank" rel="noopener noreferrer" className="contact-card" id="contact-card-location">
            <div className="contact-card-icon contact-card-icon-location">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="contact-card-title">Visit Us</h3>
            <p className="contact-card-value">Dr. Mukherjee Nagar, Delhi</p>
            <span className="contact-card-action">Get directions →</span>
          </a>
        </div>
      </section>

      {/* Branch Details + Map */}
      <section className="contact-branches-section">
        <div className="contact-branches-container">
          {/* Left: Branch Info */}
          <div className="contact-branches-info">
            <h2 className="contact-section-title">Our Branches</h2>
            <p className="contact-section-subtitle">Visit us at any of our conveniently located branches</p>

            {/* Head Office */}
            <div className="contact-branch-card" id="branch-delhi">
              <div className="branch-card-header">
                <div className="branch-card-badge branch-badge-head">HEAD OFFICE</div>
                <h3 className="branch-card-city">Delhi</h3>
              </div>
              <div className="branch-card-body">
                <div className="branch-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>102, 2nd Floor, 8-9, Ansal Building, Near Chawla Restaurant Lane, Dr. Mukherjee Nagar, Delhi-110009</span>
                </div>
                <div className="branch-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>
                    <a href="tel:+919953101176">+91 9953101176</a>, <a href="tel:+918700170483">+91 8700170483</a>
                  </span>
                </div>
                <div className="branch-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:ravindrasiasdelhi@gmail.com">ravindrasiasdelhi@gmail.com</a>
                </div>
                <div className="branch-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                  <a href="https://www.Ravindrasias.com" target="_blank" rel="noopener noreferrer">www.Ravindrasias.com</a>
                </div>
              </div>
            </div>

            {/* Branch Office */}
            <div className="contact-branch-card" id="branch-gwalior">
              <div className="branch-card-header">
                <div className="branch-card-badge branch-badge-branch">BRANCH OFFICE</div>
                <h3 className="branch-card-city">Gwalior</h3>
              </div>
              <div className="branch-card-body">
                <div className="branch-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>1st Floor, Krishna Tower, Phoolbagh Chauraha, Gwalior</span>
                </div>
                <div className="branch-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <span>
                    <a href="tel:+917042027486">7042027486</a>, <a href="tel:+918359038350">8359038350</a>
                  </span>
                </div>
                <div className="branch-detail">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:gwaliorravindrasias@gmail.com">gwaliorravindrasias@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="contact-map-wrapper" id="contact-map">
            <h2 className="contact-section-title">Find Us on Map</h2>
            <p className="contact-section-subtitle">Our Head Office in Dr. Mukherjee Nagar, Delhi</p>
            <div className="contact-map-frame">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2516635456973!2d77.2160074!3d28.7120241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd8841dad105%3A0x4eeefdaa40430079!2sRAVINDRA&#39;S%20INSTITUTE!5e0!3m2!1sen!2sin!4v1775227637220!5m2!1sen!2sin" height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ravindra's IAS Academy Location"></iframe>
            </div>
            {/* <a
              href="https://maps.app.goo.gl/1Y7ZVEGqFmkQK4dCA"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-btn"
              id="contact-open-maps"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Open in Google Maps
            </a> */}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <div className="contact-form-header">
            <h2 className="contact-section-title">Send Us a Message</h2>
            <p className="contact-section-subtitle">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>
          {submitted ? (
            <div className="contact-success-msg" id="contact-success">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for reaching out. We'll get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
              </div>
              <div className="contact-form-group contact-form-full">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-submit-btn" id="contact-submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
