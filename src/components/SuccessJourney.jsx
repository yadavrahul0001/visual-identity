import React, { useState } from "react";

const SuccessJourney = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    }, 3000);
  };

  return (
    <section className="journey-section" id="success-journey">
      {/* Timeline */}
      <div className="journey-container">
        <div className="journey-header">
          <span className="journey-badge">Success Story</span>
          <h2 className="journey-title">From Aspirant to AIR 2</h2>
          <p className="journey-subtitle">
            The inspiring journey of Rajeshwari Suve M — a testament to
            determination, discipline, and the right guidance.
          </p>
        </div>

        <div className="journey-timeline">
          {/* Step 1 */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-number">01</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2021</div>
              <h3 className="timeline-heading">The Dream Begins</h3>
              <p className="timeline-text">
                Rajeshwari, a graduate from a small town, dreamt of serving the
                nation through civil services. With limited resources and
                guidance, she decided to take the first step towards UPSC
                preparation. She enrolled at Ravindra's IAS Academy, drawn by
                the institute's reputation for nurturing first-generation
                aspirants.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-number">02</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2022</div>
              <h3 className="timeline-heading">Foundation & Discipline</h3>
              <p className="timeline-text">
                Under the mentorship of experienced faculty, Rajeshwari built a
                strong foundation in General Studies, honed her answer writing
                skills, and adopted a structured study routine. Daily newspaper
                analysis, weekly mock tests, and peer discussions became her
                pillars. She cleared her first Prelims attempt with flying
                colors.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-number">03</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2023</div>
              <h3 className="timeline-heading">Overcoming Challenges</h3>
              <p className="timeline-text">
                The Mains exam tested her resilience. With the guidance of her
                mentors at Ravindra's IAS, she focused on analytical thinking,
                essay writing, and ethics case studies. Despite moments of doubt,
                the unwavering support of the faculty and study group kept her
                motivated. She scored exceptionally well in the Mains
                examination.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="timeline-item">
            <div className="timeline-marker">
              <span className="timeline-number">04</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2024</div>
              <h3 className="timeline-heading">The Interview & Triumph</h3>
              <p className="timeline-text">
                With intensive mock interview sessions and personality
                development workshops, Rajeshwari entered the UPSC interview
                hall with confidence. Her composure, clarity of thought, and
                genuine passion for public service impressed the board. The
                result — AIR 2 in UPSC CSE 2024. A small-town girl's dream had
                turned into a national achievement.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="timeline-item timeline-item-highlight">
            <div className="timeline-marker marker-final">
              <span className="timeline-star">★</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">2025</div>
              <h3 className="timeline-heading">Serving the Nation</h3>
              <p className="timeline-text">
                Today, Rajeshwari serves as an IAS officer, working on rural
                development and women's empowerment. Her journey from aspirant
                to All India Rank 2 inspires thousands of students at
                Ravindra's IAS Academy every year.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="journey-quote">
          <blockquote>
            "Success in UPSC is not about being extraordinary — it's about being
            consistent, resilient, and having the right mentors by your side."
          </blockquote>
          <cite>— Rajeshwari Suve M, AIR 2, UPSC CSE 2024</cite>
        </div>

        {/* CTA Button */}
        <div className="journey-cta">
          <button
            className="journey-btn"
            onClick={() => setShowForm(true)}
            id="journey-connect-btn"
          >
            <span>Start Your Journey</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="journey-modal-overlay" onClick={() => setShowForm(false)}>
          <div
            className="journey-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowForm(false)}
              id="modal-close-btn"
              aria-label="Close form"
            >
              ✕
            </button>

            {submitted ? (
              <div className="modal-success">
                <div className="success-checkmark">✓</div>
                <h3>Thank You!</h3>
                <p>
                  We've received your request. Our team will connect with you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <h3 className="modal-title">Get Connected With Us</h3>
                  <p className="modal-subtitle">
                    Fill in your details and take the first step towards your
                    UPSC success story.
                  </p>
                </div>
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="modal-form-group">
                    <label htmlFor="connect-name">Full Name</label>
                    <input
                      type="text"
                      id="connect-name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="modal-form-row">
                    <div className="modal-form-group">
                      <label htmlFor="connect-email">Email</label>
                      <input
                        type="email"
                        id="connect-email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="modal-form-group">
                      <label htmlFor="connect-phone">Phone</label>
                      <input
                        type="tel"
                        id="connect-phone"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="modal-form-group">
                    <label htmlFor="connect-course">Interested Course</label>
                    <select
                      id="connect-course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a course</option>
                      <option value="foundation">Foundation Course</option>
                      <option value="prelims">Prelims Batch</option>
                      <option value="mains">Mains Batch</option>
                      <option value="interview">Interview Guidance</option>
                      <option value="test-series">Test Series</option>
                      <option value="optional">Optional Subject</option>
                    </select>
                  </div>
                  <div className="modal-form-group">
                    <label htmlFor="connect-message">Message (Optional)</label>
                    <textarea
                      id="connect-message"
                      name="message"
                      placeholder="Tell us about your preparation journey..."
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                    />
                  </div>
                  <button type="submit" className="modal-submit-btn" id="modal-submit">
                    Submit & Connect
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default SuccessJourney;
