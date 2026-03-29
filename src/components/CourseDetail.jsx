import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { courseData } from "./Courses";

const CourseDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
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

  const course = courseData.find((c) => c.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!course) {
    return (
      <div className="cd-not-found">
        <h2>Course Not Found</h2>
        <p>The course you're looking for doesn't exist.</p>
        <Link to="/" className="cd-back-link">
          ← Back to Home
        </Link>
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
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        qualification: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="cd-page">
      {/* Hero */}
      <section className="cd-hero">
        <div className="cd-hero-bg">
          <img src={course.image} alt={course.title} />
          <div className="cd-hero-overlay"></div>
        </div>
        <div className="cd-hero-content">
          <Link to="/" className="cd-breadcrumb" id="cd-back-home">
            ← Back to Courses
          </Link>
          <h1 className="cd-hero-title">{course.title} Course</h1>
          <p className="cd-hero-desc">{course.desc}</p>
          <div className="cd-hero-meta">
            <span className="cd-meta-item">
              <span className="cd-meta-icon">⏱</span> {course.duration}
            </span>
            <span className="cd-meta-item">
              <span className="cd-meta-icon">📍</span> {course.mode}
            </span>
            <span className="cd-meta-item cd-meta-price">
              <span className="cd-meta-icon">💰</span> {course.price}
            </span>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="cd-details">
        <div className="cd-details-container">
          {/* Left - Info */}
          <div className="cd-info">
            {/* Subjects */}
            <div className="cd-card">
              <h3 className="cd-card-title">
                <span className="cd-card-icon">📖</span> Subjects Covered
              </h3>
              <div className="cd-subjects">
                {course.subjects.map((sub, i) => (
                  <span className="cd-subject-tag" key={i}>
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="cd-card">
              <h3 className="cd-card-title">
                <span className="cd-card-icon">✨</span> What You'll Get
              </h3>
              <ul className="cd-features-list">
                {course.features.map((feat, i) => (
                  <li key={i} className="cd-feature-item">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1a56db"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Choose */}
            <div className="cd-card">
              <h3 className="cd-card-title">
                <span className="cd-card-icon">🎯</span> Why Choose This Course?
              </h3>
              <div className="cd-why-grid">
                <div className="cd-why-item">
                  <div className="cd-why-num">01</div>
                  <p>Expert faculty with years of teaching experience</p>
                </div>
                <div className="cd-why-item">
                  <div className="cd-why-num">02</div>
                  <p>Structured curriculum aligned with latest exam patterns</p>
                </div>
                <div className="cd-why-item">
                  <div className="cd-why-num">03</div>
                  <p>Regular assessment and personalized feedback</p>
                </div>
                <div className="cd-why-item">
                  <div className="cd-why-num">04</div>
                  <p>Comprehensive study material and resources included</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Sticky Enroll Card */}
          <div className="cd-sidebar">
            <div className="cd-enroll-card">
              <div className="cd-enroll-img">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="cd-enroll-body">
                <h3 className="cd-enroll-title">{course.title}</h3>
                <div className="cd-enroll-price">
                  <span className="cd-price-main">{course.price}</span>
                  <span className="cd-price-label">/ full course</span>
                </div>
                <div className="cd-enroll-details">
                  <div className="cd-enroll-detail">
                    <span>Duration</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="cd-enroll-detail">
                    <span>Mode</span>
                    <span>{course.mode}</span>
                  </div>
                  <div className="cd-enroll-detail">
                    <span>Subjects</span>
                    <span>{course.subjects.length} subjects</span>
                  </div>
                </div>
                <button
                  className="cd-enroll-btn"
                  onClick={() => setShowForm(true)}
                  id="cd-enroll-open-form"
                >
                  Enroll Now →
                </button>
                <p className="cd-enroll-note">
                  📞 For queries call: +91 9953101176
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Form Modal */}
      {showForm && (
        <div
          className="cd-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowForm(false);
          }}
        >
          <div className="cd-modal">
            <button
              className="cd-modal-close"
              onClick={() => setShowForm(false)}
              id="cd-modal-close"
            >
              ✕
            </button>

            {formSubmitted ? (
              <div className="cd-form-success">
                <div className="cd-success-icon">✓</div>
                <h3>Enrollment Successful!</h3>
                <p>
                  Thank you for enrolling in <strong>{course.title}</strong>. Our
                  team will contact you shortly with payment details.
                </p>
              </div>
            ) : (
              <>
                <div className="cd-modal-header">
                  <h3 className="cd-modal-title">
                    Enroll in {course.title}
                  </h3>
                  <p className="cd-modal-subtitle">
                    Fill in your details below. Our team will reach out with
                    payment and onboarding instructions.
                  </p>
                  <div className="cd-modal-price-tag">{course.price}</div>
                </div>

                <form className="cd-form" onSubmit={handleFormSubmit}>
                  <div className="cd-form-row">
                    <div className="cd-form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="cd-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="cd-form-row">
                    <div className="cd-form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="cd-form-group">
                      <label htmlFor="city">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Your city"
                      />
                    </div>
                  </div>

                  <div className="cd-form-group">
                    <label htmlFor="qualification">Qualification</label>
                    <select
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                    >
                      <option value="">Select your qualification</option>
                      <option value="10th">10th Pass</option>
                      <option value="12th">12th Pass</option>
                      <option value="graduate">Graduate</option>
                      <option value="post-graduate">Post Graduate</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="cd-form-group">
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific queries or requirements..."
                      rows="3"
                    ></textarea>
                  </div>

                  {/* Payment Section */}
                  <div className="cd-payment-section">
                    <h4 className="cd-payment-title">Payment Method</h4>
                    <div className="cd-payment-options">
                      <label className="cd-payment-option">
                        <input
                          type="radio"
                          name="payment"
                          value="online"
                          defaultChecked
                        />
                        <span className="cd-payment-label">
                          <span className="cd-payment-name">Online Payment</span>
                          <span className="cd-payment-desc">
                            UPI / Net Banking / Card
                          </span>
                        </span>
                      </label>
                      <label className="cd-payment-option">
                        <input type="radio" name="payment" value="offline" />
                        <span className="cd-payment-label">
                          <span className="cd-payment-name">Pay at Center</span>
                          <span className="cd-payment-desc">
                            Cash / Cheque at Institute
                          </span>
                        </span>
                      </label>
                      <label className="cd-payment-option">
                        <input type="radio" name="payment" value="emi" />
                        <span className="cd-payment-label">
                          <span className="cd-payment-name">EMI Option</span>
                          <span className="cd-payment-desc">
                            Pay in 3 easy installments
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="cd-submit-btn" id="cd-submit-enrollment">
                    Complete Enrollment — {course.price}
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

export default CourseDetail;
