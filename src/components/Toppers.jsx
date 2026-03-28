import React, { useState, useCallback } from "react";

const toppersData = [
  {
    name: "SUNNY GUPTA",
    rank: "RANK-148(IPS)",
    exam: "UPSC-2019",
    category: "Prelims Test Series, Mains Test Series",
    image: "/images/topper1.png",
    tag: "",
  },
  {
    name: "RINKU LATHAR",
    rank: "RANK-232(IPS)",
    exam: "UPSC-2019",
    category: "Prelims Test Series",
    image: "/images/topper2.png",
    tag: "",
  },
  {
    name: "SANDEEP PATEL",
    rank: "RANK-464(IPS)",
    exam: "UPSC-2019",
    category: "Mains Test Series",
    image: "/images/topper3.png",
    tag: "",
  },
  {
    name: "DEEPAK KUMAR",
    rank: "RANK-769",
    exam: "UPSC-2019",
    category: "Prelims Test Series",
    image: "/images/topper4.png",
    tag: "",
  },
  {
    name: "RITU RANI",
    rank: "RANK-34(SDM)",
    exam: "UPPSC-2019",
    category: "Prelims Test Series, Mains Test Series",
    image: "/images/topper5.png",
    tag: "",
  },
  {
    name: "NISHANT TIWARI",
    rank: "RANK-44(SDM)",
    exam: "UPPSC-2020",
    category: "Foundation Course",
    image: "/images/topper6.png",
    tag: "General Studies",
  },
];

const categories = [
  "All",
  "General Studies",
  "Optional",
  "Module Courses",
  "Test Series",
];

const Toppers = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [startIndex, setStartIndex] = useState(0);

  const filtered =
    activeCategory === "All"
      ? toppersData
      : toppersData.filter((t) => t.tag === activeCategory);

  const visibleCount = 3;

  const next = useCallback(() => {
    setStartIndex((prev) =>
      prev + 1 >= filtered.length ? 0 : prev + 1
    );
  }, [filtered.length]);

  const prev = useCallback(() => {
    setStartIndex((prev) =>
      prev - 1 < 0 ? filtered.length - 1 : prev - 1
    );
  }, [filtered.length]);

  const getVisibleToppers = () => {
    const result = [];
    for (let i = 0; i < Math.min(visibleCount, filtered.length); i++) {
      const idx = (startIndex + i) % filtered.length;
      result.push({ ...filtered[idx], originalIndex: idx });
    }
    return result;
  };

  const visible = getVisibleToppers();

  return (
    <section className="toppers-section" id="toppers">
      <div className="toppers-container">
        <div className="toppers-header">
          <span className="toppers-badge">Our Pride</span>
          <h2 className="toppers-title">Our Toppers</h2>
          <p className="toppers-subtitle">
            Meet the brilliant minds who achieved top ranks in UPSC Civil
            Services Examination with guidance from Ravindra's IAS Academy.
          </p>
          <a href="#" className="toppers-list-btn" id="toppers-list-link">
            Toppers List <span>→</span>
          </a>
        </div>

        {/* Carousel */}
        <div className="toppers-carousel">
          <div className="toppers-track">
            {visible.map((topper, i) => (
              <div
                key={`${topper.name}-${topper.originalIndex}`}
                className={`topper-card ${i === 1 ? "topper-card-center" : ""}`}
                id={`topper-card-${i}`}
              >
                <div className="topper-img-wrapper">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="topper-img"
                  />
                  <div className="topper-rank-badge">{topper.rank}</div>
                </div>
                <div className="topper-info">
                  <h3 className="topper-name">{topper.name}</h3>
                  <p className="topper-exam">
                    {topper.rank} – {topper.exam}
                  </p>
                  <p className="topper-category">({topper.category})</p>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="toppers-nav">
            <button
              className="toppers-nav-btn"
              onClick={prev}
              aria-label="Previous topper"
              id="toppers-prev"
            >
              ‹
            </button>
            <button
              className="toppers-nav-btn"
              onClick={next}
              aria-label="Next topper"
              id="toppers-next"
            >
              ›
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="toppers-categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(cat);
                setStartIndex(0);
              }}
              id={`category-${cat.replace(/\s/g, "-").toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toppers;
