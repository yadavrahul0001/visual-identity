import React, { useState } from "react";
import { Link } from "react-router-dom";

const categoryIcons = {
  "Strategy": "🎯",
  "Prelims Preparation": "📋",
  "Mains Preparation": "✍️",
  "Current Affairs": "🗞️",
};

const categoryColors = {
  "Strategy": "#c9a84c",
  "Prelims Preparation": "#1a56db",
  "Mains Preparation": "#0f766e",
  "Current Affairs": "#dc2626",
};

const blogPosts = [
  {
    id: 1,
    title: "UPSC CSE 2025: Complete Strategy Guide for Beginners",
    excerpt:
      "A comprehensive roadmap for first-time UPSC aspirants covering syllabus analysis, book list, daily schedule, and proven strategies from toppers.",
    category: "Strategy",
    date: "March 25, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "How to Master Answer Writing for UPSC Mains",
    excerpt:
      "Learn the art of structured answer writing with techniques for introduction, body, conclusion, and how to incorporate diagrams and data effectively.",
    category: "Mains Preparation",
    date: "March 20, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Current Affairs Monthly Digest — March 2026",
    excerpt:
      "Stay updated with the most important current affairs of the month, categorized by UPSC relevance — Polity, Economy, Environment, and International Relations.",
    category: "Current Affairs",
    date: "March 15, 2026",
    readTime: "12 min read",
  },
  {
    id: 4,
    title: "NCERT Foundation: Why It's Non-Negotiable for UPSC",
    excerpt:
      "Understand why NCERT textbooks form the backbone of UPSC preparation and how to extract maximum value from Classes 6-12 books.",
    category: "Prelims Preparation",
    date: "March 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "UPPSC vs UPSC: Key Differences and Preparation Strategy",
    excerpt:
      "A detailed comparison of UPPSC and UPSC exam patterns, syllabi, and how to prepare for both simultaneously without compromise.",
    category: "Strategy",
    date: "March 5, 2026",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Top 10 Optional Subjects for UPSC Mains 2025",
    excerpt:
      "Analyzing the most popular and scoring optional subjects with success rates, syllabus overlap, and expert recommendations.",
    category: "Mains Preparation",
    date: "February 28, 2026",
    readTime: "10 min read",
  },
];

const categories = [
  "All",
  "Strategy",
  "Prelims Preparation",
  "Mains Preparation",
  "Current Affairs",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-bg"></div>
        <div className="blog-hero-content">
          <span className="blog-badge">Blog</span>
          <h1 className="blog-hero-title">
            Insights & <span className="blog-title-accent">Resources</span>
          </h1>
          <div className="blog-hero-divider"></div>
          <p className="blog-hero-subtitle">
            Expert articles, strategies, and current affairs to fuel your
            preparation journey.
          </p>
          <Link to="/" className="blog-back-btn" id="blog-back-home">
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-filter">
        <div className="blog-filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`blog-filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              id={`blog-filter-${cat.replace(/\s/g, "-").toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts">
        <div className="blog-posts-container">
          {filtered.map((post) => {
            const catColor = categoryColors[post.category] || "#1a56db";
            const catIcon = categoryIcons[post.category] || "📄";
            return (
              <article className="blog-card" key={post.id} id={`blog-post-${post.id}`}>
                <div className="blog-card-header-bar">
                  <div className="blog-card-icon-circle" style={{ background: `${catColor}12`, color: catColor }}>
                    <span>{catIcon}</span>
                  </div>
                  <span className="blog-card-category-tag" style={{ color: catColor, background: `${catColor}0a`, borderColor: `${catColor}20` }}>
                    {post.category}
                  </span>
                </div>
                <div className="blog-card-content">
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-card-meta">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span>{post.date}</span>
                      <span className="blog-meta-dot">•</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{post.readTime}</span>
                    </div>
                    <button className="blog-read-more" style={{ color: catColor, borderColor: `${catColor}40` }} id={`blog-read-${post.id}`}>
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Back to Home */}
      <section className="blog-bottom-cta">
        <Link to="/" className="blog-home-link" id="blog-bottom-home">
          ← Return to Home
        </Link>
      </section>
    </div>
  );
};

export default Blog;
