import React from "react";

const articlesData = {
  prelims: {
    title: "Prelims Articles",
    items: [
      "SWOT Satellite",
      "Steppe Eagle",
      "P8I Aircraft",
      "Rural Self Employment Training Institutes",
      "Keelback Snake",
      "Coringa Wildlife Sanctuary",
    ],
  },
  mains: {
    title: "Mains Articles",
    items: [
      "UDAN Scheme Revamp – Expanding Regional Air Connectivity",
      "Nationally Determined Contributions (NDCs) – India's Updated Climate Commitments",
      "Constitutional Roadblocks in Expanding Lok Sabha Seats Explained",
      "WTO MC14 Key Battles Over Trade Rules and Global Equity Explained",
    ],
  },
  quest: {
    title: "Quest Articles",
    items: [
      "Montane, Alpine – Vegetation & Biodiversity",
      "Economic Growth and Development, Meaning, Difference",
      "Reserve Bank of India (RBI), Governor, Structure, Functions",
      "International Monetary Fund (IMF), History, Functions, SDRs",
      "India China Relations, History, Timeline, Challenges",
    ],
  },
};

const Articles = () => {
  return (
    <section className="articles-section" id="articles">
      <div className="articles-container">
        <div className="articles-header">
          <span className="articles-badge">Resources</span>
          <h2 className="articles-title">Exam Articles & Study Material</h2>
          <p className="articles-subtitle">
            Stay ahead with curated articles covering Prelims, Mains, and
            specialised topics for UPSC Civil Services Examination.
          </p>
        </div>

        <div className="articles-grid">
          {Object.entries(articlesData).map(([key, section]) => (
            <div className="article-column" key={key} id={`article-col-${key}`}>
              <div className="article-column-header">
                <h3>{section.title}</h3>
              </div>
              <ul className="article-list">
                {section.items.map((item, idx) => (
                  <li key={idx} className="article-item">
                    <a href="#" className="article-link" id={`article-${key}-${idx}`}>
                      <span className="article-text">{item}</span>
                      <span className="article-arrow">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="article-column-footer">
                <a href="#" className="article-view-more" id={`view-more-${key}`}>
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
