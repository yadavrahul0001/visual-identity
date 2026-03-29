import React from 'react'
import { useNavigate } from 'react-router-dom'

const courseData = [
  {
    title: "NCERT Foundation",
    slug: "ncert",
    icon: "📚",
    color: "#7c3aed",
    image: "/images/course_ncert.png",
    duration: "6 Months",
    mode: "Online + Offline",
    desc: "Build a strong foundation with comprehensive NCERT coverage for all competitive exams.",
    subjects: ["History", "Geography", "Polity", "Economics", "Science"],
    price: "₹4,999",
    features: ["Complete NCERT Notes", "Chapter-wise Tests", "Video Lectures", "Doubt Clearing Sessions"],
  },
  {
    title: "NCERT Basic",
    slug: "ncert-basic",
    icon: "📖",
    color: "#0f766e",
    image: "/images/course_ncert.png",
    duration: "3 Months",
    mode: "Online",
    desc: "A beginner-friendly NCERT program for building conceptual clarity from scratch.",
    subjects: ["History", "Geography", "Science", "Civics"],
    price: "₹2,499",
    features: ["Simplified Notes", "Basic Level Tests", "Recorded Lectures", "Weekly Quizzes"],
  },
  {
    title: "UPSC CSE",
    slug: "upsc",
    icon: "🏛️",
    color: "#1a56db",
    image: "/images/course_upsc.png",
    duration: "12 Months",
    mode: "Online + Offline",
    desc: "Complete UPSC CSE preparation program with prelims, mains, and interview guidance.",
    subjects: ["General Studies", "CSAT", "Essay", "Ethics", "Optional"],
    price: "₹24,999",
    features: ["Prelims + Mains Coverage", "Answer Writing Practice", "Current Affairs", "Mock Interviews", "Personal Mentorship"],
  },
  {
    title: "PCS / UPPSC",
    slug: "pcs",
    icon: "📋",
    color: "#0369a1",
    image: "/images/course_pcs.png",
    duration: "10 Months",
    mode: "Online + Offline",
    desc: "State PCS preparation with focused UP-specific content and comprehensive coverage.",
    subjects: ["General Studies", "Hindi", "Essay", "UP Special"],
    price: "₹14,999",
    features: ["State-specific Syllabus", "Bilingual Support", "Previous Year Papers", "Regular Tests"],
  },
  {
    title: "SSC CGL/CHSL",
    slug: "ssc",
    icon: "📝",
    color: "#b45309",
    image: "/images/course_ssc.png",
    duration: "6 Months",
    mode: "Online + Offline",
    desc: "Targeted SSC CGL/CHSL preparation with quantitative aptitude, reasoning, and English.",
    subjects: ["Quantitative Aptitude", "English", "Reasoning", "General Awareness"],
    price: "₹7,999",
    features: ["Speed Building Tests", "Shortcut Techniques", "Daily Practice Sets", "Full Mock Tests"],
  },
  {
    title: "NEET",
    slug: "neet",
    icon: "🔬",
    color: "#dc2626",
    image: "/images/course_neet.png",
    duration: "12 Months",
    mode: "Online + Offline",
    desc: "Medical entrance preparation with expert faculty and NTA-pattern practice.",
    subjects: ["Physics", "Chemistry", "Biology (Botany + Zoology)"],
    price: "₹19,999",
    features: ["NCERT-based Approach", "NTA Pattern Mocks", "Chapter-wise DPP", "All India Test Series"],
  },
  {
    title: "JEE Main + Adv",
    slug: "jee",
    icon: "⚡",
    color: "#2563eb",
    image: "/images/course_jee.png",
    duration: "12 Months",
    mode: "Online + Offline",
    desc: "Engineering entrance coaching for JEE Main and Advanced with concept-first approach.",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    price: "₹18,999",
    features: ["JEE Main + Advanced", "Problem Solving Labs", "Rank Booster Tests", "Expert Faculty"],
  },
  {
    title: "Judiciary Prep",
    slug: "judiciary",
    icon: "⚖️",
    color: "#4338ca",
    image: "/images/course_pcs.png",
    duration: "8 Months",
    mode: "Online + Offline",
    desc: "Judicial services preparation covering constitutional law, CrPC, IPC, and legal aptitude.",
    subjects: ["Constitutional Law", "CrPC", "IPC", "CPC", "Evidence Act"],
    price: "₹12,999",
    features: ["Case Law Analysis", "Legal Writing Practice", "Mock Judiciary Tests", "Interview Prep"],
  },
  {
    title: "NCERT Advanced",
    slug: "ncert-adv",
    icon: "🎯",
    color: "#059669",
    image: "/images/course_jee.png",
    duration: "4 Months",
    mode: "Online",
    desc: "Advanced NCERT analysis for serious UPSC aspirants — beyond-the-textbook insights.",
    subjects: ["Advanced History", "Advanced Geography", "Advanced Economy", "Environment"],
    price: "₹5,999",
    features: ["Deep Dive NCERT", "PYQ Mapping", "Analytical Tests", "Expert Commentary"],
  },
];

// Export courseData so CourseDetail can use it
export { courseData };

const Course = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div className="crs-card">
      {/* Accent Bar */}
      <div className="crs-accent" style={{ background: course.color }}></div>

      <div className="crs-card-body">
        {/* Header: Icon + Title + Price */}
        <div className="crs-header">
          <div className="crs-icon-wrap" style={{ background: `${course.color}10`, color: course.color }}>
            <span>{course.icon}</span>
          </div>
          <div className="crs-header-text">
            <h3 className="crs-title">{course.title}</h3>
            <span className="crs-price" style={{ color: course.color }}>{course.price}</span>
          </div>
        </div>

        {/* Description */}
        <p className="crs-desc">{course.desc}</p>

        {/* Meta: Duration & Mode */}
        <div className="crs-meta">
          <div className="crs-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={course.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{course.duration}</span>
          </div>
          <div className="crs-meta-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={course.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span>{course.mode}</span>
          </div>
        </div>

        {/* Key Features (top 3) */}
        <ul className="crs-features">
          {course.features.slice(0, 3).map((f, i) => (
            <li key={i} className="crs-feature">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={course.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Subjects */}
        <div className="crs-tags">
          {course.subjects.slice(0, 3).map((s, i) => (
            <span key={i} className="crs-tag" style={{ color: course.color, borderColor: `${course.color}25`, background: `${course.color}06` }}>{s}</span>
          ))}
          {course.subjects.length > 3 && (
            <span className="crs-tag crs-tag-more">+{course.subjects.length - 3}</span>
          )}
        </div>

        {/* CTA */}
        <button
          className="crs-enroll-btn"
          style={{ background: `linear-gradient(135deg, ${course.color}, ${course.color}cc)` }}
          onClick={() => navigate(`/course/${course.slug}`)}
        >
          View Details & Enroll →
        </button>
      </div>
    </div>
  )
}

const Courses = () => {
  return (
    <div className="courses" id="courses">
      <div className="courses-header-block">
        <span className="courses-badge">Our Programs</span>
        <h2 className="courses-heading">Explore Our Courses</h2>
        <p className="courses-subheading">
          Comprehensive programs designed by experts to help you crack India's toughest competitive exams.
        </p>
      </div>
      <div className='coursesGrids'>
        {courseData.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    </div>
  )
}

export default Courses