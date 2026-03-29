import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const testSeriesData = [
  {
    course: "UPSC",
    color: "#1a56db",
    icon: "🏛️",
    series: [
      {
        slug: "upsc-prelims-2025",
        title: "UPSC Prelims Test Series 2025",
        tests: 30,
        duration: "60 min each",
        price: "₹2,999",
        features: ["Full-length Mock Tests", "Sectional Tests", "Previous Year Analysis", "Detailed Solutions"],
        desc: "Ace the UPSC Prelims with 30 full-length mock tests designed on the latest UPSC pattern. Includes sectional tests, previous year analysis, and detailed solutions for every question.",
        highlights: ["NTA-pattern MCQs", "Topic-wise & Full Mocks", "Performance Analytics Dashboard", "All India Ranking", "Instant Result & Review"],
      },
      {
        slug: "upsc-mains-2025",
        title: "UPSC Mains Test Series 2025",
        tests: 24,
        duration: "180 min each",
        price: "₹3,499",
        features: ["GS Paper I-IV Mocks", "Essay Writing Practice", "Personalized Feedback", "Model Answers"],
        desc: "Comprehensive Mains test series covering all four GS papers with essay writing practice. Get personalized feedback from experts and model answers for self-evaluation.",
        highlights: ["GS I-IV Full Mocks", "Essay & Ethics Focused", "Copy Evaluation by Experts", "Model Answer Booklets", "Improvement Tracking"],
      },
    ],
  },
  {
    course: "UPPSC / PCS",
    color: "#0f766e",
    icon: "📋",
    series: [
      {
        slug: "pcs-prelims",
        title: "PCS Prelims Test Series",
        tests: 25,
        duration: "120 min each",
        price: "₹1,999",
        features: ["UP Specific Questions", "Current Affairs Tests", "Topic-wise Tests", "Bilingual Support"],
        desc: "Targeted UPPSC Prelims preparation with UP-specific questions, current affairs focus, and bilingual (Hindi + English) support for maximum accessibility.",
        highlights: ["UP State Focused Content", "Hindi & English Medium", "Current Affairs Monthly", "Previous Year Pattern", "Detailed Explanations"],
      },
      {
        slug: "pcs-mains",
        title: "PCS Mains Test Series",
        tests: 20,
        duration: "180 min each",
        price: "₹2,499",
        features: ["Answer Writing Practice", "GS + Optional Mocks", "Evaluation by Experts", "Rank Prediction"],
        desc: "Master UPPSC Mains with structured answer writing practice, GS and optional subject mocks evaluated by experienced faculty with rank prediction.",
        highlights: ["Answer Writing Drills", "Expert Evaluation", "Optional Subject Mocks", "Rank Predictor", "Topper Strategy Sessions"],
      },
    ],
  },
  {
    course: "SSC",
    color: "#b45309",
    icon: "📝",
    series: [
      {
        slug: "ssc-cgl",
        title: "SSC CGL Complete Test Series",
        tests: 40,
        duration: "60 min each",
        price: "₹1,499",
        features: ["Tier I & Tier II Mocks", "Quantitative Aptitude", "English & Reasoning", "GK Sectional Tests"],
        desc: "Complete SSC CGL preparation with 40 mock tests covering both Tier I and Tier II. Includes sectional tests for Quant, English, Reasoning, and GK.",
        highlights: ["Tier I + Tier II Coverage", "Speed Building Drills", "Shortcut Techniques", "Sectional Practice", "Performance Comparison"],
      },
      {
        slug: "ssc-chsl",
        title: "SSC CHSL Test Series",
        tests: 30,
        duration: "60 min each",
        price: "₹999",
        features: ["Full Syllabus Coverage", "Speed Tests", "Previous Year Papers", "Performance Analytics"],
        desc: "Focused SSC CHSL test series with speed-building tests, full syllabus coverage, and detailed performance analytics to track your progress.",
        highlights: ["CHSL Pattern Mocks", "Speed Tests", "PYQ Practice Sets", "Score Analytics", "Difficulty-wise Tests"],
      },
    ],
  },
  {
    course: "NCERT Foundation",
    color: "#7c3aed",
    icon: "📚",
    series: [
      {
        slug: "ncert-mastery",
        title: "NCERT Mastery Test Series",
        tests: 50,
        duration: "45 min each",
        price: "₹1,299",
        features: ["Class 6-12 Coverage", "Subject-wise Tests", "Concept Clarity Focus", "Foundation Building"],
        desc: "Build an unshakeable foundation with 50 NCERT-based tests covering Classes 6-12. Perfect for UPSC, state PCS, and other competitive exam aspirants.",
        highlights: ["Class 6-12 Full Coverage", "Subject-wise Breakdown", "Concept-based Questions", "Foundation for All Exams", "Progressive Difficulty"],
      },
    ],
  },
  {
    course: "NEET",
    color: "#dc2626",
    icon: "🔬",
    series: [
      {
        slug: "neet-full-2025",
        title: "NEET Full Test Series 2025",
        tests: 35,
        duration: "180 min each",
        price: "₹2,499",
        features: ["Physics, Chemistry, Biology", "Full-length NTA Pattern", "Chapter-wise Tests", "All India Ranking"],
        desc: "35 full-length NEET mock tests on the latest NTA pattern. Covers Physics, Chemistry, and Biology with chapter-wise tests and All India Ranking.",
        highlights: ["NTA Pattern Exact", "Chapter-wise + Full Mocks", "All India Ranking", "Detailed Solutions", "Video Explanations"],
      },
      {
        slug: "neet-crash",
        title: "NEET Crash Course Tests",
        tests: 15,
        duration: "180 min each",
        price: "₹1,299",
        features: ["High Yield Topics", "Rapid Revision Tests", "Last 30 Days Strategy", "Detailed Analysis"],
        desc: "Intensive 15-test crash course focusing on high-yield NEET topics. Designed for last 30 days revision with rapid Tests and detailed analysis.",
        highlights: ["High Yield Focus", "30-Day Strategy", "Rapid Revision", "Score Boosting", "Quick Analysis"],
      },
    ],
  },
  {
    course: "JEE",
    color: "#2563eb",
    icon: "⚡",
    series: [
      {
        slug: "jee-mains",
        title: "JEE Mains Test Series",
        tests: 30,
        duration: "180 min each",
        price: "₹2,199",
        features: ["NTA Pattern Mocks", "Physics, Chemistry, Maths", "Chapter-wise + Full Tests", "Rank Predictor"],
        desc: "30 JEE Mains mock tests on the latest NTA pattern. Complete coverage of Physics, Chemistry, and Mathematics with rank prediction.",
        highlights: ["NTA Exact Pattern", "PCM Full Coverage", "Chapter + Full Mocks", "Rank Predictor", "Detailed Solutions"],
      },
    ],
  },
  {
    course: "JUDICIARY",
    color: "#4338ca",
    icon: "⚖️",
    series: [
      {
        slug: "judiciary-prelims",
        title: "Judiciary Prelims Test Series",
        tests: 20,
        duration: "120 min each",
        price: "₹1,999",
        features: ["Constitutional Law", "CrPC & IPC Tests", "Legal Aptitude", "Case Law Analysis"],
        desc: "20 judiciary prelims mock tests covering Constitutional Law, CrPC, IPC, and legal aptitude. Includes case law analysis and detailed explanations.",
        highlights: ["Constitutional Law Focus", "CrPC & IPC Coverage", "Legal Reasoning", "Case Law Practice", "Expert Explanations"],
      },
    ],
  },
];

// Export for TestSeriesDetail page
export { testSeriesData };

const TestSeries = () => {
  const [activeCourse, setActiveCourse] = useState("All");
  const navigate = useNavigate();

  const courseNames = ["All", ...testSeriesData.map((d) => d.course)];

  const filtered =
    activeCourse === "All"
      ? testSeriesData
      : testSeriesData.filter((d) => d.course === activeCourse);

  return (
    <section className="test-series-section" id="test-series">
      <div className="test-series-container">
        {/* Header */}
        <div className="test-series-header">
          <span className="test-series-badge">Practice & Excel</span>
          <h2 className="test-series-title">Our Test Series</h2>
          <p className="test-series-subtitle">
            Comprehensive course-wise test series designed by experts to help you
            crack your dream exam with confidence.
          </p>
        </div>

        {/* Course Filter Tabs */}
        <div className="test-series-tabs">
          {courseNames.map((name) => (
            <button
              key={name}
              className={`ts-tab ${activeCourse === name ? "ts-tab-active" : ""}`}
              onClick={() => setActiveCourse(name)}
              id={`ts-tab-${name.replace(/\s|\//g, "-").toLowerCase()}`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Course Sections */}
        <div className="test-series-courses">
          {filtered.map((courseGroup) => (
            <div className="ts-course-group" key={courseGroup.course}>
              {/* Course group header */}
              <div className="ts-course-header">
                <span className="ts-course-icon">{courseGroup.icon}</span>
                <h3
                  className="ts-course-name"
                  style={{ color: courseGroup.color }}
                >
                  {courseGroup.course} Test Series
                </h3>
                <div
                  className="ts-course-line"
                  style={{ background: courseGroup.color }}
                ></div>
              </div>

              {/* Series Cards */}
              <div className="ts-cards-grid">
                {courseGroup.series.map((series, idx) => (
                  <div
                    className="ts-card"
                    key={idx}
                    id={`ts-card-${courseGroup.course.replace(/\s|\//g, "-").toLowerCase()}-${idx}`}
                  >
                    {/* Card accent top */}
                    <div
                      className="ts-card-accent"
                      style={{ background: `linear-gradient(135deg, ${courseGroup.color}, ${courseGroup.color}aa)` }}
                    ></div>

                    <div className="ts-card-body">
                      <h4 className="ts-card-title">{series.title}</h4>

                      {/* Stats row */}
                      <div className="ts-card-stats">
                        <div className="ts-stat">
                          <span className="ts-stat-value">{series.tests}</span>
                          <span className="ts-stat-label">Tests</span>
                        </div>
                        <div className="ts-stat-divider"></div>
                        <div className="ts-stat">
                          <span className="ts-stat-value">{series.duration}</span>
                          <span className="ts-stat-label">Duration</span>
                        </div>
                        <div className="ts-stat-divider"></div>
                        <div className="ts-stat">
                          <span
                            className="ts-stat-value ts-price"
                            style={{ color: courseGroup.color }}
                          >
                            {series.price}
                          </span>
                          <span className="ts-stat-label">Price</span>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="ts-features">
                        {series.features.map((feat, fi) => (
                          <li key={fi} className="ts-feature-item">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={courseGroup.color}
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

                      {/* CTA */}
                      <button
                        className="ts-enroll-btn"
                        style={{
                          background: `linear-gradient(135deg, ${courseGroup.color}, ${courseGroup.color}cc)`,
                        }}
                        onClick={() => navigate(`/test-series/${series.slug}`)}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestSeries;
