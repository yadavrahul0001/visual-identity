import React, { useState, useCallback } from "react";

const toppersData = [
  {
    name: "SUNNY GUPTA",
    rank: "RANK-148 (IPS)",
    exam: "UPSC-2019",
    image: "/images/topper1.png",
    optional: "Political Science",
    attempts: "2nd Attempt",
    quote: "Ravindra Sir's strategic mentorship transformed my preparation. The structured approach to answer writing was the game-changer in my Mains performance.",
    journey: "Sunny joined Ravindra's IAS Academy after his graduation. With consistent guidance and the academy's test series, he cleared UPSC in his 2nd attempt and is now serving as an IPS officer.",
  },
  {
    name: "RINKU LATHAR",
    rank: "RANK-232 (IPS)",
    exam: "UPSC-2019",
    image: "/images/topper2.png",
    optional: "Sociology",
    attempts: "1st Attempt",
    quote: "The mock interview sessions at Ravindra's IAS Academy gave me the confidence I needed. The faculty's dedication is unmatched.",
    journey: "A first-generation learner from Haryana, Rinku's determination combined with the academy's personalized mentoring helped her crack UPSC in her very first attempt — an extraordinary feat.",
  },
  {
    name: "SANDEEP PATEL",
    rank: "RANK-464 (IPS)",
    exam: "UPSC-2019",
    image: "/images/topper3.png",
    optional: "Geography",
    attempts: "3rd Attempt",
    quote: "After two failed attempts, the academy's focused crash course and answer evaluation completely changed my approach. I owe my success to this institute.",
    journey: "Sandeep's story is one of resilience. After two unsuccessful attempts, he enrolled in the academy's intensive program. The faculty's unwavering support and strategic revision plan led to his selection.",
  },
  {
    name: "DEEPAK KUMAR",
    rank: "RANK-769",
    exam: "UPSC-2019",
    image: "/images/topper4.png",
    optional: "Public Administration",
    attempts: "2nd Attempt",
    quote: "The current affairs analysis sessions and essay writing workshops at the academy are simply the best. They prepare you holistically.",
    journey: "Coming from a rural background in Bihar, Deepak's UPSC journey began at the academy. The structured curriculum and peer learning environment gave him the edge he needed to succeed.",
  },
  {
    name: "RITU RANI",
    rank: "RANK-34 (SDM)",
    exam: "UPPSC-2019",
    image: "/images/topper5.png",
    optional: "Hindi Literature",
    attempts: "1st Attempt",
    quote: "Ravindra's IAS Academy doesn't just teach — they build character. The ethical framework they instill makes you a better officer and person.",
    journey: "Ritu topped the UPPSC exam with a remarkable rank of 34. Her disciplined approach, honed through the academy's daily answer writing practice, set her apart from other candidates.",
  },
  {
    name: "NISHANT TIWARI",
    rank: "RANK-44 (SDM)",
    exam: "UPPSC-2020",
    image: "/images/topper6.png",
    optional: "History",
    attempts: "2nd Attempt",
    quote: "The academy's bilingual support and UP-specific preparation modules are unparalleled. They truly understand the UPPSC pattern.",
    journey: "Nishant's success in UPPSC came through the academy's focused state-level preparation program. The subject experts and dedicated UPPSC test series played a crucial role in his selection.",
  },
];

const Toppers = () => {
  const [selectedTopper, setSelectedTopper] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;

  const next = useCallback(() => {
    setStartIndex((prev) =>
      prev + 1 >= toppersData.length ? 0 : prev + 1
    );
  }, []);

  const prev = useCallback(() => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? toppersData.length - 1 : prev - 1
    );
  }, []);

  const getVisibleToppers = () => {
    const result = [];
    for (let i = 0; i < Math.min(visibleCount, toppersData.length); i++) {
      const idx = (startIndex + i) % toppersData.length;
      result.push({ ...toppersData[idx], originalIndex: idx });
    }
    return result;
  };

  const visible = getVisibleToppers();

  return (
    <section className="toppers-section-v2" id="toppers">
      <div className="toppers-v2-container">
        {/* Header */}
        <div className="toppers-v2-header">
          <span className="toppers-v2-badge">Our Pride</span>
          <h2 className="toppers-v2-title">Our Toppers</h2>
          <p className="toppers-v2-subtitle">
            Meet the brilliant minds who achieved top ranks in UPSC & UPPSC
            examinations with guidance from Ravindra's IAS Academy.
          </p>
        </div>

        {/* Carousel */}
        <div className="toppers-v2-carousel">
          <div className="toppers-v2-track">
            {visible.map((topper, i) => (
              <div
                key={`${topper.name}-${topper.originalIndex}`}
                className={`topper-v2-card ${i === 1 ? "topper-v2-card-center" : ""}`}
                id={`topper-card-${i}`}
                onClick={() => setSelectedTopper(topper)}
              >
                <div className="topper-v2-img-wrapper">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="topper-v2-img"
                  />
                  <div className="topper-v2-rank-badge">{topper.rank}</div>
                  <div className="topper-v2-overlay">
                    <span className="topper-v2-view-btn">View Journey →</span>
                  </div>
                </div>
                <div className="topper-v2-info">
                  <h3 className="topper-v2-name">{topper.name}</h3>
                  <p className="topper-v2-exam">{topper.exam}</p>
                  <div className="topper-v2-meta">
                    <span className="topper-v2-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
                      {topper.optional}
                    </span>
                    <span className="topper-v2-meta-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {topper.attempts}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Nav Arrows */}
          <div className="toppers-v2-nav">
            <button
              className="toppers-v2-nav-btn"
              onClick={prev}
              aria-label="Previous topper"
              id="toppers-prev"
            >
              ‹
            </button>
            <div className="toppers-v2-dots">
              {toppersData.map((_, idx) => (
                <span
                  key={idx}
                  className={`toppers-v2-dot ${idx === startIndex ? "active" : ""}`}
                  onClick={() => setStartIndex(idx)}
                ></span>
              ))}
            </div>
            <button
              className="toppers-v2-nav-btn"
              onClick={next}
              aria-label="Next topper"
              id="toppers-next"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Topper Detail Modal */}
      {selectedTopper && (
        <div className="topper-v2-modal-overlay" onClick={() => setSelectedTopper(null)}>
          <div className="topper-v2-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="topper-v2-modal-close"
              onClick={() => setSelectedTopper(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="topper-v2-modal-content">
              <div className="topper-v2-modal-left">
                <img
                  src={selectedTopper.image}
                  alt={selectedTopper.name}
                  className="topper-v2-modal-img"
                />
                <div className="topper-v2-modal-rank">{selectedTopper.rank}</div>
              </div>
              <div className="topper-v2-modal-right">
                <span className="topper-v2-modal-badge">{selectedTopper.exam}</span>
                <h3 className="topper-v2-modal-name">{selectedTopper.name}</h3>
                <div className="topper-v2-modal-details">
                  <div className="topper-v2-modal-detail">
                    <span className="detail-label">Optional Subject</span>
                    <span className="detail-value">{selectedTopper.optional}</span>
                  </div>
                  <div className="topper-v2-modal-detail">
                    <span className="detail-label">Attempt</span>
                    <span className="detail-value">{selectedTopper.attempts}</span>
                  </div>
                </div>

                <div className="topper-v2-modal-journey">
                  <h4>Journey at the Academy</h4>
                  <p>{selectedTopper.journey}</p>
                </div>

                <div className="topper-v2-modal-quote">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg>
                  <blockquote>{selectedTopper.quote}</blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Toppers;
