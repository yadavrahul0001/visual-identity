import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const studyMaterialData = [
  {
    category: "General Studies",
    icon: "📘",
    color: "#1a56db",
    materials: [
      { title: "Indian History — Complete Notes", pages: 240, format: "PDF", level: "Prelims + Mains" },
      { title: "Indian Geography — Comprehensive Guide", pages: 185, format: "PDF", level: "Prelims + Mains" },
      { title: "Indian Polity & Governance", pages: 210, format: "PDF", level: "Prelims + Mains" },
      { title: "Indian Economy — Concepts & Data", pages: 195, format: "PDF", level: "Prelims + Mains" },
      { title: "Environment & Ecology Notes", pages: 130, format: "PDF", level: "Prelims" },
      { title: "Science & Technology Updates", pages: 110, format: "PDF", level: "Prelims" },
    ],
  },
  {
    category: "CSAT & Aptitude",
    icon: "🧠",
    color: "#7c3aed",
    materials: [
      { title: "Quantitative Aptitude — Shortcuts & Tricks", pages: 160, format: "PDF", level: "Prelims" },
      { title: "Logical Reasoning & Comprehension", pages: 140, format: "PDF", level: "Prelims" },
      { title: "Data Interpretation Practice Sets", pages: 90, format: "PDF", level: "Prelims" },
    ],
  },
  {
    category: "Mains Answer Writing",
    icon: "✍️",
    color: "#0f766e",
    materials: [
      { title: "GS Paper I — Model Answers (2020-2024)", pages: 200, format: "PDF", level: "Mains" },
      { title: "GS Paper II — Model Answers (2020-2024)", pages: 190, format: "PDF", level: "Mains" },
      { title: "GS Paper III — Model Answers (2020-2024)", pages: 185, format: "PDF", level: "Mains" },
      { title: "Ethics — Case Studies & Answers", pages: 150, format: "PDF", level: "Mains" },
      { title: "Essay Writing — Templates & Examples", pages: 120, format: "PDF", level: "Mains" },
    ],
  },
  {
    category: "NCERT Essentials",
    icon: "📚",
    color: "#b45309",
    materials: [
      { title: "NCERT History (Class 6-12) Summary", pages: 180, format: "PDF", level: "Foundation" },
      { title: "NCERT Geography Summary Notes", pages: 150, format: "PDF", level: "Foundation" },
      { title: "NCERT Science Summary (Class 6-10)", pages: 120, format: "PDF", level: "Foundation" },
      { title: "NCERT Economics Key Points", pages: 100, format: "PDF", level: "Foundation" },
    ],
  },
  {
    category: "State PCS Special",
    icon: "🏛️",
    color: "#dc2626",
    materials: [
      { title: "UP Special — History, Culture & Geography", pages: 160, format: "PDF", level: "UPPSC" },
      { title: "UP Current Affairs Yearly Digest", pages: 140, format: "PDF", level: "UPPSC" },
      { title: "MPPSC Special Notes", pages: 130, format: "PDF", level: "MPPSC" },
    ],
  },
  {
    category: "Previous Year Papers",
    icon: "📝",
    color: "#4338ca",
    materials: [
      { title: "UPSC Prelims PYQ (2010-2024) with Solutions", pages: 350, format: "PDF", level: "Prelims" },
      { title: "UPSC Mains PYQ (2015-2024)", pages: 280, format: "PDF", level: "Mains" },
      { title: "UPPSC Prelims PYQ (2015-2024)", pages: 220, format: "PDF", level: "UPPSC" },
      { title: "SSC CGL PYQ Collection", pages: 200, format: "PDF", level: "SSC" },
    ],
  },
];

const StudyMaterial = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = ["All", ...studyMaterialData.map((d) => d.category)];
  const filtered = activeCategory === "All" ? studyMaterialData : studyMaterialData.filter((d) => d.category === activeCategory);

  return (
    <div className="sm-page">
      <section className="sm-hero">
        <div className="sm-hero-content">
          <Link to="/" className="sm-breadcrumb">← Back to Home</Link>
          <span className="sm-hero-badge">📖 Resources</span>
          <h1 className="sm-hero-title">Study Material</h1>
          <p className="sm-hero-desc">
            Access comprehensive, exam-focused study material prepared by our expert faculty. Download PDFs covering every subject for UPSC, State PCS, SSC, and more.
          </p>
        </div>
      </section>

      <section className="sm-content">
        <div className="sm-container">
          <div className="sm-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`sm-tab ${activeCategory === cat ? "sm-tab-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="sm-groups">
            {filtered.map((group) => (
              <div className="sm-group" key={group.category}>
                <div className="sm-group-header">
                  <span className="sm-group-icon">{group.icon}</span>
                  <h3 className="sm-group-name" style={{ color: group.color }}>{group.category}</h3>
                  <div className="sm-group-line" style={{ background: group.color }}></div>
                </div>

                <div className="sm-cards-grid">
                  {group.materials.map((mat, i) => (
                    <div className="sm-card" key={i}>
                      <div className="sm-card-accent" style={{ background: group.color }}></div>
                      <div className="sm-card-body">
                        <h4 className="sm-card-title">{mat.title}</h4>
                        <div className="sm-card-meta">
                          <span className="sm-meta-tag">{mat.format}</span>
                          <span className="sm-meta-tag">{mat.pages} pages</span>
                          <span className="sm-meta-tag sm-meta-level" style={{ color: group.color, borderColor: `${group.color}30`, background: `${group.color}08` }}>{mat.level}</span>
                        </div>
                        <button className="sm-download-btn" style={{ background: `linear-gradient(135deg, ${group.color}, ${group.color}cc)` }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                          Download PDF
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
    </div>
  );
};

export default StudyMaterial;
