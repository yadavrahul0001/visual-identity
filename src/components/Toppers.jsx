import React, { useState, useCallback } from "react";

const toppersData = [
  {
    name: "SUNNY GUPTA",
    rank: "RANK-148(IPS)",
    exam: "UPSC-2019",
    image: "/images/topper1.png",
  },
  {
    name: "RINKU LATHAR",
    rank: "RANK-232(IPS)",
    exam: "UPSC-2019",
    image: "/images/topper2.png",
  },
  {
    name: "SANDEEP PATEL",
    rank: "RANK-464(IPS)",
    exam: "UPSC-2019",
    image: "/images/topper3.png",
  },
  {
    name: "DEEPAK KUMAR",
    rank: "RANK-769",
    exam: "UPSC-2019",
    image: "/images/topper4.png",
  },
  {
    name: "RITU RANI",
    rank: "RANK-34(SDM)",
    exam: "UPPSC-2019",
    image: "/images/topper5.png",
  },
  {
    name: "NISHANT TIWARI",
    rank: "RANK-44(SDM)",
    exam: "UPPSC-2020",
    image: "/images/topper6.png",
  },
];

const Toppers = () => {
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
    <section className="toppers-section" id="toppers">
      <div className="toppers-container">
        <div className="toppers-header">
          <span className="toppers-badge">Our Pride</span>
          <h2 className="toppers-title">Our Toppers</h2>
          <p className="toppers-subtitle">
            Meet the brilliant minds who achieved top ranks in UPSC Civil
            Services Examination with guidance from Ravindra's IAS Academy.
          </p>
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
      </div>
    </section>
  );
};

export default Toppers;
