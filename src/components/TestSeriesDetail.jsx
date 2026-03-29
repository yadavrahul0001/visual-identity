import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { testSeriesData } from "./TestSeries";

const TestSeriesDetail = () => {
  const { slug } = useParams();
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    qualification: "",
    message: "",
  });

  // Find the series and its parent course
  let series = null;
  let parentCourse = null;
  for (const group of testSeriesData) {
    const found = group.series.find((s) => s.slug === slug);
    if (found) {
      series = found;
      parentCourse = group;
      break;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!series) {
    return (
      <div className="cd-not-found">
        <h2>Test Series Not Found</h2>
        <p>The test series you're looking for doesn't exist.</p>
        <Link to="/" className="cd-back-link">← Back to Home</Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowForm(false);
      setFormData({ fullName: "", email: "", phone: "", city: "", qualification: "", message: "" });
    }, 3000);
  };

  const accentColor = parentCourse.color;

  return (
    <div className="tsd-page">
      {/* Hero */}
      <section className="tsd-hero" style={{ background: `linear-gradient(135deg, ${accentColor}18, ${accentColor}08)` }}>
        <div className="tsd-hero-content">
          <Link to="/" className="tsd-breadcrumb" id="tsd-back-home">
            ← Back to Test Series
          </Link>
          <div className="tsd-hero-badge" style={{ background: accentColor }}>
            {parentCourse.icon} {parentCourse.course}
          </div>
          <h1 className="tsd-hero-title">{series.title}</h1>
          <p className="tsd-hero-desc">{series.desc}</p>
          <div className="tsd-hero-stats">
            <div className="tsd-hero-stat">
              <span className="tsd-hero-stat-value">{series.tests}</span>
              <span className="tsd-hero-stat-label">Tests</span>
            </div>
            <div className="tsd-hero-stat-divider"></div>
            <div className="tsd-hero-stat">
              <span className="tsd-hero-stat-value">{series.duration}</span>
              <span className="tsd-hero-stat-label">Duration</span>
            </div>
            <div className="tsd-hero-stat-divider"></div>
            <div className="tsd-hero-stat">
              <span className="tsd-hero-stat-value" style={{ color: accentColor }}>{series.price}</span>
              <span className="tsd-hero-stat-label">Price</span>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="tsd-details">
        <div className="tsd-details-container">
          {/* Left */}
          <div className="tsd-info">
            {/* What's Included */}
            <div className="tsd-card">
              <h3 className="tsd-card-title">
                <span className="tsd-card-icon">✅</span> What's Included
              </h3>
              <ul className="tsd-checklist">
                {series.features.map((f, i) => (
                  <li key={i} className="tsd-check-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div className="tsd-card">
              <h3 className="tsd-card-title">
                <span className="tsd-card-icon">🌟</span> Key Highlights
              </h3>
              <div className="tsd-highlights-grid">
                {series.highlights.map((h, i) => (
                  <div className="tsd-highlight-item" key={i} style={{ borderColor: `${accentColor}20` }}>
                    <div className="tsd-highlight-num" style={{ color: accentColor }}>{String(i + 1).padStart(2, "0")}</div>
                    <p>{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div className="tsd-card">
              <h3 className="tsd-card-title">
                <span className="tsd-card-icon">📋</span> How It Works
              </h3>
              <div className="tsd-steps">
                <div className="tsd-step">
                  <div className="tsd-step-num" style={{ background: accentColor }}>1</div>
                  <div>
                    <h4>Enroll & Get Access</h4>
                    <p>Complete enrollment and get instant access to all tests on your dashboard.</p>
                  </div>
                </div>
                <div className="tsd-step">
                  <div className="tsd-step-num" style={{ background: accentColor }}>2</div>
                  <div>
                    <h4>Take Tests</h4>
                    <p>Attempt tests at your pace — scheduled or self-timed, on any device.</p>
                  </div>
                </div>
                <div className="tsd-step">
                  <div className="tsd-step-num" style={{ background: accentColor }}>3</div>
                  <div>
                    <h4>Review & Improve</h4>
                    <p>Get detailed solutions, analytics, and All India ranking after each test.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Sticky Purchase Card */}
          <div className="cd-sidebar">
            <div className="cd-enroll-card">
              <div className="tsd-enroll-accent" style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}>
                <span className="tsd-enroll-icon">{parentCourse.icon}</span>
                <span className="tsd-enroll-course">{parentCourse.course}</span>
              </div>
              <div className="cd-enroll-body">
                <h3 className="cd-enroll-title">{series.title}</h3>
                <div className="cd-enroll-price">
                  <span className="cd-price-main" style={{ color: accentColor }}>{series.price}</span>
                  <span className="cd-price-label">/ full series</span>
                </div>
                <div className="cd-enroll-details">
                  <div className="cd-enroll-detail">
                    <span>Total Tests</span>
                    <span>{series.tests} tests</span>
                  </div>
                  <div className="cd-enroll-detail">
                    <span>Duration</span>
                    <span>{series.duration}</span>
                  </div>
                  <div className="cd-enroll-detail">
                    <span>Features</span>
                    <span>{series.features.length} included</span>
                  </div>
                </div>
                <button
                  className="cd-enroll-btn"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
                  onClick={() => setShowForm(true)}
                  id="tsd-purchase-btn"
                >
                  Purchase Now →
                </button>
                <p className="cd-enroll-note">📞 For queries call: +91 9953101176</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Modal — reuses cd-modal styles */}
      {showForm && (
        <div className="cd-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}>
          <div className="cd-modal">
            <button className="cd-modal-close" onClick={() => setShowForm(false)} id="tsd-modal-close">✕</button>

            {formSubmitted ? (
              <div className="cd-form-success">
                <div className="cd-success-icon">✓</div>
                <h3>Enrollment Successful!</h3>
                <p>Thank you for purchasing <strong>{series.title}</strong>. Our team will contact you shortly with access details.</p>
              </div>
            ) : (
              <>
                <div className="cd-modal-header">
                  <h3 className="cd-modal-title">Purchase {series.title}</h3>
                  <p className="cd-modal-subtitle">Fill in your details to get instant access to the test series.</p>
                  <div className="cd-modal-price-tag" style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}>{series.price}</div>
                </div>

                <form className="cd-form" onSubmit={handleFormSubmit}>
                  <div className="cd-form-row">
                    <div className="cd-form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Enter your full name" required />
                    </div>
                    <div className="cd-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required />
                    </div>
                  </div>

                  <div className="cd-form-row">
                    <div className="cd-form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" required />
                    </div>
                    <div className="cd-form-group">
                      <label htmlFor="city">City</label>
                      <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} placeholder="Your city" />
                    </div>
                  </div>

                  <div className="cd-form-group">
                    <label htmlFor="qualification">Qualification</label>
                    <select id="qualification" name="qualification" value={formData.qualification} onChange={handleInputChange}>
                      <option value="">Select your qualification</option>
                      <option value="10th">10th Pass</option>
                      <option value="12th">12th Pass</option>
                      <option value="graduate">Graduate</option>
                      <option value="post-graduate">Post Graduate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Payment */}
                  <div className="cd-payment-section">
                    <h4 className="cd-payment-title">Payment Method</h4>
                    <div className="cd-payment-options">
                      <label className="cd-payment-option">
                        <input type="radio" name="payment" value="online" defaultChecked />
                        <span className="cd-payment-label">
                          <span className="cd-payment-name">Online Payment</span>
                          <span className="cd-payment-desc">UPI / Net Banking / Card</span>
                        </span>
                      </label>
                      <label className="cd-payment-option">
                        <input type="radio" name="payment" value="offline" />
                        <span className="cd-payment-label">
                          <span className="cd-payment-name">Pay at Center</span>
                          <span className="cd-payment-desc">Cash / Cheque at Institute</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="cd-submit-btn" style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }} id="tsd-submit">
                    Complete Purchase — {series.price}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestSeriesDetail;
