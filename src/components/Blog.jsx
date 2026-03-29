import React, { useState } from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "UPSC CSE 2025: Complete Strategy Guide for Beginners",
    excerpt:
      "A comprehensive roadmap for first-time UPSC aspirants covering syllabus analysis, book list, daily schedule, and proven strategies from toppers.",
    category: "Strategy",
    date: "March 25, 2026",
    readTime: "8 min read",
    image: "/images/homeimg1.jpg",
  },
  {
    id: 2,
    title: "How to Master Answer Writing for UPSC Mains",
    excerpt:
      "Learn the art of structured answer writing with techniques for introduction, body, conclusion, and how to incorporate diagrams and data effectively.",
    category: "Mains Preparation",
    date: "March 20, 2026",
    readTime: "6 min read",
    image: "/images/homeimg2.jpg",
  },
  {
    id: 3,
    title: "Current Affairs Monthly Digest — March 2026",
    excerpt:
      "Stay updated with the most important current affairs of the month, categorized by UPSC relevance — Polity, Economy, Environment, and International Relations.",
    category: "Current Affairs",
    date: "March 15, 2026",
    readTime: "12 min read",
    image: "/images/homeimg3.jpg",
  },
  {
    id: 4,
    title: "NCERT Foundation: Why It's Non-Negotiable for UPSC",
    excerpt:
      "Understand why NCERT textbooks form the backbone of UPSC preparation and how to extract maximum value from Classes 6-12 books.",
    category: "Prelims Preparation",
    date: "March 10, 2026",
    readTime: "5 min read",
    image: "/images/homeimg4.jpg",
  },
  {
    id: 5,
    title: "UPPSC vs UPSC: Key Differences and Preparation Strategy",
    excerpt:
      "A detailed comparison of UPPSC and UPSC exam patterns, syllabi, and how to prepare for both simultaneously without compromise.",
    category: "Strategy",
    date: "March 5, 2026",
    readTime: "7 min read",
    image: "/images/homeimg1.jpg",
  },
  {
    id: 6,
    title: "Top 10 Optional Subjects for UPSC Mains 2025",
    excerpt:
      "Analyzing the most popular and scoring optional subjects with success rates, syllabus overlap, and expert recommendations.",
    category: "Mains Preparation",
    date: "February 28, 2026",
    readTime: "10 min read",
    image: "/images/homeimg2.jpg",
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
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <span className="blog-badge">Blog</span>
          <h1 className="blog-hero-title">Insights & Resources</h1>
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
          {filtered.map((post) => (
            <article className="blog-card" key={post.id} id={`blog-post-${post.id}`}>
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-card-category">{post.category}</span>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span>{post.date}</span>
                  <span className="blog-meta-divider">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <button className="blog-read-more" id={`blog-read-${post.id}`}>
                  Read More →
                </button>
              </div>
            </article>
          ))}
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
