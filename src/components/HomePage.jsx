import React, { useState, useEffect, useRef, useCallback } from "react";
import AICounselling from "./AICounselling";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Selections" },
  { value: "10,000+", label: "Students Trained" },
  { value: "50+", label: "Expert Faculty" },
];

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Interactive NCERT Mind-Maps",
    description: "Visual learning tools that transform complex NCERT chapters into intuitive, clickable mind-maps for deeper understanding and faster revision.",
    color: "#7c3aed",
    detailTitle: "Interactive NCERT Mind-Maps",
    detailTagline: "Visualize. Connect. Master.",
    detailContent: [
      {
        heading: "How It Works",
        text: "Our AI-powered mind-mapping engine takes every NCERT chapter (Class 6–12) and converts it into a dynamic, interactive visual map. Each node represents a concept, linked to sub-concepts, examples, and related topics across subjects."
      },
      {
        heading: "Key Capabilities",
        bullets: [
          "Clickable nodes that expand into detailed explanations, diagrams, and examples",
          "Cross-subject linking — see how History connects to Geography, Polity to Economics",
          "Color-coded branches for easy visual distinction between themes",
          "Bookmark and annotate nodes with your own notes",
          "Revision mode: Collapsed maps that test your recall before expanding"
        ]
      },
      {
        heading: "Student Impact",
        stats: [
          { value: "3x", label: "Faster revision" },
          { value: "85%", label: "Better retention" },
          { value: "12K+", label: "Maps created" }
        ]
      }
    ]
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </svg>
    ),
    title: '"7-5-3" Answer Writing Simulator',
    description: "Our proprietary framework trains you to write 7-mark, 5-mark, and 3-mark answers with precision, structure, and examiner-approved formatting.",
    color: "#0369a1",
    detailTitle: '"7-5-3" Answer Writing Simulator',
    detailTagline: "Write Like a Topper. Score Like One.",
    detailContent: [
      {
        heading: "The Framework",
        text: "Our 7-5-3 methodology is designed around UPSC marking patterns. You learn exactly how much to write, what structure to follow, and how to maximize marks for each answer length — eliminating guesswork entirely."
      },
      {
        heading: "How It Works",
        bullets: [
          "7-Mark Answers: Introduction → 3-4 analytical body points → Conclusion → Diagram/Map",
          "5-Mark Answers: Crisp intro → 2-3 substantive points → Concise conclusion",
          "3-Mark Answers: Direct definition → Key facts → One-line summary wrap-up",
          "AI evaluates your answer for structure, content depth, keyword usage, and presentation",
          "Compare your answer side-by-side with model answers from toppers"
        ]
      },
      {
        heading: "Results",
        stats: [
          { value: "40%", label: "Score improvement" },
          { value: "500+", label: "Model answers" },
          { value: "AI", label: "Instant feedback" }
        ]
      }
    ]
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
    title: "24x7 Learning App Integration",
    description: "Seamless access to recorded lectures, study material, tests, and live sessions — anytime, anywhere through our dedicated learning app.",
    color: "#059669",
    detailTitle: "24x7 Learning App",
    detailTagline: "Your Classroom in Your Pocket.",
    detailContent: [
      {
        heading: "Features",
        text: "Our mobile-first learning app brings the entire classroom experience to your fingertips. Whether you're commuting, at home, or on a break — your preparation never stops."
      },
      {
        heading: "What's Inside",
        bullets: [
          "HD recorded lectures with speed control (0.5x to 2x) and bookmarks",
          "Downloadable study material in PDF — read offline anytime",
          "Live class integration with real-time doubt-clearing chat",
          "Push notifications for class reminders, test schedules, and daily quizzes",
          "Dark mode, note-taking, and progress tracking built in"
        ]
      },
      {
        heading: "Usage Stats",
        stats: [
          { value: "50K+", label: "App downloads" },
          { value: "4.8★", label: "Play Store rating" },
          { value: "24/7", label: "Access anytime" }
        ]
      }
    ]
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="3" />
        <path d="M7 22v-1a5 5 0 0 1 10 0v1" />
      </svg>
    ),
    title: "AI-Powered Doubt Clearing Bot",
    description: "Get instant, accurate answers to your academic doubts 24/7 powered by advanced AI — no waiting, no delays in your preparation.",
    color: "#dc2626",
    detailTitle: "AI Doubt Clearing Bot",
    detailTagline: "Ask Anything. Get Answers Instantly.",
    detailContent: [
      {
        heading: "How It Works",
        text: "Our AI bot is trained on the complete UPSC, PCS, SSC, and NCERT syllabus. Simply type your doubt in natural language — the bot understands context, provides accurate explanations, and cites sources."
      },
      {
        heading: "Capabilities",
        bullets: [
          "Understands questions in Hindi and English — type naturally",
          "Provides explanations with relevant examples and diagrams",
          "Cites NCERT chapters, standard books, and PYQ references",
          "Escalates complex doubts to human mentors automatically",
          "Available 24/7 — no waiting for office hours"
        ]
      },
      {
        heading: "Performance",
        stats: [
          { value: "95%", label: "Accuracy rate" },
          { value: "<3s", label: "Response time" },
          { value: "1M+", label: "Doubts resolved" }
        ]
      }
    ]
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m7 16 4-8 4 5 4-7" />
      </svg>
    ),
    title: "Performance Metrics Portal",
    description: "Track your progress with detailed analytics — score trends, topic-wise accuracy, rank predictions, and personalized improvement roadmaps.",
    color: "#b45309",
    detailTitle: "Performance Metrics Portal",
    detailTagline: "Data-Driven Preparation. Smarter Results.",
    detailContent: [
      {
        heading: "Your Dashboard",
        text: "Every test, every quiz, every practice session — all tracked and analyzed. Our portal transforms your raw data into actionable insights so you know exactly where to focus."
      },
      {
        heading: "Analytics You Get",
        bullets: [
          "Score trends over time with improvement trajectory charts",
          "Topic-wise accuracy heatmaps — instantly spot weak areas",
          "All India rank predictions based on test performance",
          "Time-per-question analysis to optimize exam strategy",
          "AI-generated weekly study plans based on your performance gaps"
        ]
      },
      {
        heading: "Impact",
        stats: [
          { value: "92%", label: "Students improved" },
          { value: "200+", label: "Data points tracked" },
          { value: "AI", label: "Personalized plans" }
        ]
      }
    ]
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Mentorship Chatroom",
    description: "Direct access to mentors and top rankers through private chatrooms for strategy discussions, motivation, and exam-day guidance.",
    color: "#4338ca",
    detailTitle: "Mentorship Chatroom",
    detailTagline: "Learn from Those Who've Been There.",
    detailContent: [
      {
        heading: "What You Get",
        text: "Our private chatrooms connect you directly with IAS/IPS officers, top rankers, and senior faculty members. Get personalized advice, motivation, and insider strategies that textbooks can't teach."
      },
      {
        heading: "Chatroom Features",
        bullets: [
          "1-on-1 private mentorship sessions with selected IAS/PCS officers",
          "Group strategy rooms moderated by subject experts",
          "Weekly AMA (Ask Me Anything) sessions with recent toppers",
          "Interview preparation mock sessions and personality development tips",
          "Peer study groups with batch-mates for collaborative learning"
        ]
      },
      {
        heading: "Mentor Network",
        stats: [
          { value: "30+", label: "IAS/IPS mentors" },
          { value: "100+", label: "Top rankers" },
          { value: "Daily", label: "Active sessions" }
        ]
      }
    ]
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    ),
    title: 'Daily "Snippet" News',
    description: "Curated daily current affairs in bite-sized snippets — optimized for prelims and mains, delivered every morning to keep you exam-ready.",
    color: "#0f766e",
    detailTitle: 'Daily "Snippet" News',
    detailTagline: "Stay Informed. Stay Ahead.",
    detailContent: [
      {
        heading: "What Are Snippets?",
        text: "Every morning at 7 AM, our editorial team curates the most exam-relevant news into concise 'snippets' — each just 3-4 lines with tags for Prelims/Mains relevance, linked syllabus topics, and related PYQs."
      },
      {
        heading: "How It Helps",
        bullets: [
          "Prelims-focused MCQs generated from each snippet for instant practice",
          "Mains linkages — every snippet mapped to GS Paper topics",
          "Monthly compilations auto-generated for revision before exams",
          "Audio snippets for listening during commute (5-min daily podcast)",
          "Topic-wise archives searchable by keyword, date, or syllabus area"
        ]
      },
      {
        heading: "Coverage",
        stats: [
          { value: "365", label: "Days a year" },
          { value: "20+", label: "Snippets daily" },
          { value: "98%", label: "Prelims coverage" }
        ]
      }
    ]
  },
];

const newsUpdates = [
  { type: "selection", icon: "🏆", text: "Rajesh Kumar selected in UPSC CSE 2024 — AIR 42", time: "2 days ago" },
  { type: "batch", icon: "📚", text: "New UPSC Prelims 2026 Batch starting 15th April", time: "New" },
  { type: "course", icon: "🎓", text: "MPPSC Mains Crash Course now available — Enroll today", time: "3 days ago" },
  { type: "selection", icon: "🏆", text: "Priya Sharma selected in MPPSC 2024 — Rank 7", time: "5 days ago" },
  { type: "result", icon: "📊", text: "95% of our students cleared Prelims in first attempt", time: "This week" },
  { type: "batch", icon: "📚", text: "SSC CGL 2026 Foundation Batch — Limited seats left", time: "New" },
  { type: "selection", icon: "🏆", text: "Amit Verma selected in Judiciary Services 2024", time: "1 week ago" },
  { type: "course", icon: "🎓", text: "JEE Advanced 2026 Test Series launched — Register now", time: "4 days ago" },
];

const heroOffer = {
  title: "UPSC Foundation 2026",
  originalPrice: "₹1,25,000",
  offerPrice: "₹89,999",
  discount: "28% OFF",
  highlights: ["Complete GS + CSAT", "Interview Guidance", "Test Series Included"],
  badge: "Most Popular",
};

const HomePage = () => {
  const [showCounselling, setShowCounselling] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState(new Set());
  const [activeNews, setActiveNews] = useState(0);
  const [featureDetail, setFeatureDetail] = useState(null);
  const featuresRef = useRef(null);
  const newsTimerRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Auto-rotate news updates
  const nextNews = useCallback(() => {
    setActiveNews((prev) => (prev + 1) % newsUpdates.length);
  }, []);

  useEffect(() => {
    newsTimerRef.current = setInterval(nextNews, 3000);
    return () => clearInterval(newsTimerRef.current);
  }, [nextNews]);

  // Intersection Observer for feature cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleFeatures((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = document.querySelectorAll(".hp-feature-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Close feature detail
  const closeFeatureDetail = () => setFeatureDetail(null);

  // Countdown timer state
  const [countdown, setCountdown] = useState({ days: 3, hours: 14, mins: 27, secs: 45 });
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, mins, secs } = prev;
        secs--;
        if (secs < 0) { secs = 59; mins--; }
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) { days = 0; hours = 0; mins = 0; secs = 0; }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hp-hero" id="home">
        {/* Decorative background elements */}
        <div className="hp-hero-bg">
          <div className="hp-hero-grid"></div>
          <div className="hp-hero-glow hp-hero-glow-1"></div>
          <div className="hp-hero-glow hp-hero-glow-2"></div>
          <div className="hp-hero-float hp-hero-float-1"></div>
          <div className="hp-hero-float hp-hero-float-2"></div>
          <div className="hp-hero-float hp-hero-float-3"></div>
          {/* Particle dots */}
          <div className="hp-hero-particles">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="hp-particle" style={{ "--p-i": i }}></span>
            ))}
          </div>
        </div>

        <div className="hp-hero-layout">
          {/* Left: Text Content */}
          <div className="hp-hero-left">
            {/* Badge */}
            <div className="hp-hero-badge">
              <span className="hp-hero-badge-dot"></span>
              Admissions Open 2025-26
            </div>

            {/* Headline */}
            <h1 className="hp-hero-title">
              Your Gateway to{" "}
              <span className="hp-hero-highlight">Civil Services</span>{" "}
              Excellence
            </h1>

            {/* Subtitle */}
            <p className="hp-hero-subtitle">
              India's most trusted coaching institute with 15+ years of proven
              excellence. We've guided 500+ selections across UPSC, State PCS,
              SSC, NEET, JEE and Judiciary examinations.
            </p>

            {/* CTA Buttons */}
            <div className="hp-hero-ctas">
              <button
                className="hp-cta-primary"
                onClick={() => scrollToSection("courses")}
                id="hero-explore-courses"
              >
                Explore Courses
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button
                className="hp-cta-secondary"
                onClick={() => setShowCounselling(true)}
                id="hero-free-counselling"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                AI Counselling
              </button>
            </div>

            {/* Trust line */}
            <div className="hp-hero-trust">
              <div className="hp-trust-checks">
                <span className="hp-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Expert Faculty
                </span>
                <span className="hp-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Proven Results
                </span>
                <span className="hp-trust-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Personalized Mentoring
                </span>
              </div>
            </div>
          </div>

          {/* Right: Combined Info + Offer Card */}
          <div className="hp-hero-right">
            <div className="hp-right-card">
              {/* News Ticker Section */}
              <div className="hp-rc-news">
                <div className="hp-rc-news-header">
                  <span className="hp-rc-live-dot"></span>
                  <span>Live Updates</span>
                </div>
                <div className="hp-rc-news-ticker">
                  {newsUpdates.map((item, i) => (
                    <div key={i} className={`hp-rc-news-item ${i === activeNews ? "hp-rc-news-active" : ""}`}>
                      <span className="hp-rc-emoji">{item.icon}</span>
                      <span className="hp-rc-news-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="hp-rc-divider"></div>

              {/* Offer Section */}
              <div className="hp-rc-offer">
                <div className="hp-rc-offer-top">
                  <span className="hp-rc-offer-badge">🔥 Limited Time Offer</span>
                  <span className="hp-rc-offer-discount">{heroOffer.discount}</span>
                </div>
                <h4 className="hp-rc-offer-title">{heroOffer.title}</h4>
                <div className="hp-rc-offer-pricing">
                  <span className="hp-rc-price-old">{heroOffer.originalPrice}</span>
                  <span className="hp-rc-price-new">{heroOffer.offerPrice}</span>
                </div>
                <ul className="hp-rc-offer-list">
                  {heroOffer.highlights.map((h, i) => (
                    <li key={i}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Compact Countdown */}
                <div className="hp-rc-countdown">
                  <span className="hp-rc-cd-label">Ends in</span>
                  <div className="hp-rc-cd-timer">
                    <span className="hp-rc-cd-block">{String(countdown.days).padStart(2, "0")}d</span>
                    <span className="hp-rc-cd-sep">:</span>
                    <span className="hp-rc-cd-block">{String(countdown.hours).padStart(2, "0")}h</span>
                    <span className="hp-rc-cd-sep">:</span>
                    <span className="hp-rc-cd-block">{String(countdown.mins).padStart(2, "0")}m</span>
                    <span className="hp-rc-cd-sep">:</span>
                    <span className="hp-rc-cd-block">{String(countdown.secs).padStart(2, "0")}s</span>
                  </div>
                </div>

                <button className="hp-rc-enroll" onClick={() => scrollToSection("courses")}>
                  Enroll Now →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hp-stats-bar">
          {stats.map((stat, i) => (
            <div className="hp-stat" key={i}>
              <span className="hp-stat-value">{stat.value}</span>
              <span className="hp-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="hp-features" id="why-choose-us" ref={featuresRef}>
        {/* Decorative bg */}
        <div className="hp-features-deco">
          <div className="hp-features-deco-circle hp-features-deco-1"></div>
          <div className="hp-features-deco-circle hp-features-deco-2"></div>
        </div>

        <div className="hp-features-header">
          <span className="hp-features-badge">Our Edge</span>
          <h2 className="hp-features-title">Why Choose Us</h2>
          <div className="hp-features-title-divider">
            <span></span><span></span><span></span>
          </div>
          <p className="hp-features-subtitle">
            Cutting-edge tools and methodologies that set us apart from every
            other coaching institute in India.
          </p>
        </div>

        <div className="hp-features-grid">
          {features.map((feat, i) => (
            <div
              className={`hp-feature-card ${visibleFeatures.has(String(i)) ? "hp-feature-visible" : ""}`}
              key={i}
              data-index={i}
              style={{ "--feat-color": feat.color, "--feat-delay": `${i * 0.1}s` }}
              onClick={() => setFeatureDetail(feat)}
            >
              <div className="hp-feature-number">{String(i + 1).padStart(2, "0")}</div>
              <div className="hp-feature-icon-wrap">
                <div className="hp-feature-icon" style={{ background: `${feat.color}12`, color: feat.color }}>
                  {feat.icon}
                </div>
                <div className="hp-feature-icon-ring" style={{ borderColor: `${feat.color}20` }}></div>
              </div>
              <h3 className="hp-feature-name">{feat.title}</h3>
              <p className="hp-feature-desc">{feat.description}</p>
              <div className="hp-feature-cta" style={{ color: feat.color }}>
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <div className="hp-feature-accent" style={{ background: `linear-gradient(135deg, ${feat.color}, ${feat.color}88)` }}></div>
              <div className="hp-feature-glow" style={{ background: feat.color }}></div>
            </div>
          ))}
        </div>
      </section>



      {/* ===== FEATURE DETAIL MODAL ===== */}
      {featureDetail && (
        <div className="hp-fd-overlay" onClick={closeFeatureDetail}>
          <div className="hp-fd-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button className="hp-fd-close" onClick={closeFeatureDetail} aria-label="Close">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Header */}
            <div className="hp-fd-header" style={{ background: `linear-gradient(135deg, ${featureDetail.color}, ${featureDetail.color}cc)` }}>
              <div className="hp-fd-header-icon">
                {featureDetail.icon}
              </div>
              <h2 className="hp-fd-title">{featureDetail.detailTitle}</h2>
              <p className="hp-fd-tagline">{featureDetail.detailTagline}</p>
            </div>

            {/* Body */}
            <div className="hp-fd-body">
              {featureDetail.detailContent.map((section, si) => (
                <div className="hp-fd-section" key={si}>
                  <h3 className="hp-fd-section-title">{section.heading}</h3>
                  {section.text && <p className="hp-fd-section-text">{section.text}</p>}
                  {section.bullets && (
                    <ul className="hp-fd-bullets">
                      {section.bullets.map((b, bi) => (
                        <li key={bi}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={featureDetail.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.stats && (
                    <div className="hp-fd-stats">
                      {section.stats.map((s, si2) => (
                        <div className="hp-fd-stat" key={si2}>
                          <span className="hp-fd-stat-value" style={{ color: featureDetail.color }}>{s.value}</span>
                          <span className="hp-fd-stat-label">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="hp-fd-footer">
              <button
                className="hp-fd-enroll"
                style={{ background: `linear-gradient(135deg, ${featureDetail.color}, ${featureDetail.color}cc)` }}
                onClick={() => { closeFeatureDetail(); scrollToSection("courses"); }}
              >
                Explore Our Courses
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Counselling Modal */}
      {showCounselling && (
        <AICounselling onClose={() => setShowCounselling(false)} />
      )}
    </>
  );
};

export default HomePage;

