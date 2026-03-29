import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const currentAffairsData = [
  {
    month: "March 2025",
    tag: "Latest",
    articles: [
      { title: "Union Budget 2025-26: Key Highlights & Analysis for UPSC", date: "March 25, 2025", category: "Economy", readTime: "8 min" },
      { title: "India-US Strategic Partnership: New Defence Agreements", date: "March 22, 2025", category: "International Relations", readTime: "6 min" },
      { title: "Supreme Court's Landmark Judgement on Article 370", date: "March 18, 2025", category: "Polity", readTime: "10 min" },
      { title: "New Education Policy Updates: Implementation Status 2025", date: "March 15, 2025", category: "Governance", readTime: "5 min" },
      { title: "ISRO's Gaganyaan Mission: Latest Developments", date: "March 12, 2025", category: "Science & Tech", readTime: "7 min" },
    ],
  },
  {
    month: "February 2025",
    tag: "",
    articles: [
      { title: "G20 Summit Outcomes & India's Presidency Legacy", date: "Feb 28, 2025", category: "International Relations", readTime: "9 min" },
      { title: "Digital Personal Data Protection Act: Implementation", date: "Feb 24, 2025", category: "Governance", readTime: "6 min" },
      { title: "Climate Change: India's Updated NDC Commitments", date: "Feb 20, 2025", category: "Environment", readTime: "7 min" },
      { title: "RBI Monetary Policy February 2025: Key Decisions", date: "Feb 15, 2025", category: "Economy", readTime: "5 min" },
    ],
  },
  {
    month: "January 2025",
    tag: "",
    articles: [
      { title: "Republic Day 2025: Chief Guest & Key Highlights", date: "Jan 26, 2025", category: "National", readTime: "4 min" },
      { title: "India's Space Policy 2025: Private Sector Participation", date: "Jan 22, 2025", category: "Science & Tech", readTime: "8 min" },
      { title: "One Nation One Election: Committee Recommendations", date: "Jan 18, 2025", category: "Polity", readTime: "10 min" },
      { title: "PM Gati Shakti: Infrastructure Progress Report", date: "Jan 14, 2025", category: "Economy", readTime: "6 min" },
    ],
  },
  {
    month: "December 2024",
    tag: "",
    articles: [
      { title: "COP29 Climate Summit: Key Agreements & India's Stand", date: "Dec 28, 2024", category: "Environment", readTime: "9 min" },
      { title: "Year-End Review: Top 10 Government Schemes of 2024", date: "Dec 24, 2024", category: "Governance", readTime: "12 min" },
      { title: "India-ASEAN Relations: New Trade Agreements", date: "Dec 18, 2024", category: "International Relations", readTime: "7 min" },
    ],
  },
];

const categoryColors = {
  "Economy": "#1a56db",
  "International Relations": "#7c3aed",
  "Polity": "#0f766e",
  "Governance": "#b45309",
  "Science & Tech": "#dc2626",
  "Environment": "#059669",
  "National": "#4338ca",
};

const CurrentAffairs = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const allCategories = ["All", ...new Set(currentAffairsData.flatMap((m) => m.articles.map((a) => a.category)))];

  const filteredData = activeFilter === "All"
    ? currentAffairsData
    : currentAffairsData.map((m) => ({
        ...m,
        articles: m.articles.filter((a) => a.category === activeFilter),
      })).filter((m) => m.articles.length > 0);

  return (
    <div className="ca-page">
      <section className="ca-hero">
        <div className="ca-hero-content">
          <Link to="/" className="sm-breadcrumb">← Back to Home</Link>
          <span className="sm-hero-badge" style={{ color: "#dc2626", background: "rgba(220,38,38,0.08)" }}>🗞️ Stay Updated</span>
          <h1 className="sm-hero-title">Current Affairs</h1>
          <p className="sm-hero-desc">
            Stay ahead in your exam preparation with daily, weekly, and monthly current affairs coverage. Our expert analysis connects every news to the UPSC syllabus.
          </p>
        </div>
      </section>

      <section className="ca-content">
        <div className="sm-container">
          <div className="sm-tabs">
            {allCategories.map((cat) => (
              <button
                key={cat}
                className={`sm-tab ${activeFilter === cat ? "sm-tab-active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="ca-months">
            {filteredData.map((monthData) => (
              <div className="ca-month-group" key={monthData.month}>
                <div className="ca-month-header">
                  <h3 className="ca-month-title">{monthData.month}</h3>
                  {monthData.tag && <span className="ca-month-tag">{monthData.tag}</span>}
                  <div className="ca-month-line"></div>
                </div>

                <div className="ca-articles-list">
                  {monthData.articles.map((article, i) => {
                    const catColor = categoryColors[article.category] || "#1a56db";
                    return (
                      <div className="ca-article-card" key={i}>
                        <div className="ca-article-left">
                          <span className="ca-article-cat" style={{ color: catColor, background: `${catColor}0a`, borderColor: `${catColor}20` }}>
                            {article.category}
                          </span>
                          <h4 className="ca-article-title">{article.title}</h4>
                          <div className="ca-article-meta">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime} read</span>
                          </div>
                        </div>
                        <button className="ca-read-btn">
                          Read →
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentAffairs;
