import React, { useState } from "react";

const faqData = [
  {
    question: "Which coaching is best for UPSC?",
    answer:
      "Ravindra's IAS Academy is one of the top-rated coaching institutes for UPSC preparation in India. With experienced faculty, comprehensive study material, and a proven track record of producing toppers, we provide end-to-end guidance for Prelims, Mains, and Interview preparation.",
  },
  {
    question: "Which UPSC coaching is best in Delhi?",
    answer:
      "In Delhi, Ravindra's IAS Academy located in Dr. Mukherjee Nagar stands out for its personalised approach, small batch sizes, and consistent results. Our integrated program covers GS, CSAT, Optional subjects, and Essay writing with daily answer writing practice.",
  },
  {
    question: "Which coaching is best for IAS in Delhi?",
    answer:
      "For IAS preparation in Delhi, Ravindra's IAS Academy offers a structured program that includes comprehensive coverage of the UPSC syllabus, regular mock tests, current affairs sessions, and one-on-one mentoring from experienced faculty members who have guided numerous toppers.",
  },
  {
    question: "Which coaching institute has the most UPSC toppers?",
    answer:
      "Ravindra's IAS Academy has consistently produced UPSC toppers across multiple years. Our alumni have secured top ranks in UPSC CSE including AIR 2, AIR 6, AIR 27, and many more. Our success rate speaks for the quality of education and mentorship we provide.",
  },
  {
    question: "What is the fee structure for UPSC coaching?",
    answer:
      "Our fee structure is designed to be competitive and accessible. We offer various programs including Foundation Course, Prelims-cum-Mains, and Optional subject courses. We also provide scholarship opportunities for meritorious and economically weaker students. Contact us for detailed fee information.",
  },
  {
    question: "Do you provide online UPSC coaching as well?",
    answer:
      "Yes, we offer comprehensive online coaching for UPSC preparation. Our online program includes live interactive classes, recorded video lectures, digital study material, online test series, and virtual doubt-clearing sessions. Students across India can benefit from our expert guidance from the comfort of their homes.",
  },
  {
    question: "What is the duration of the UPSC coaching program?",
    answer:
      "Our UPSC Foundation Course is typically 12-14 months, covering the entire syllabus comprehensively. We also offer crash courses of 6 months for experienced aspirants. Prelims-specific and Mains-specific programs are available based on exam timelines. Optional subject courses run for 3-4 months.",
  },
  {
    question: "How to start preparing for UPSC CSE?",
    answer:
      "Start by understanding the UPSC syllabus and exam pattern thoroughly. Build a strong foundation in NCERTs, read newspapers daily, and develop answer writing skills early. Joining a reputed coaching institute like Ravindra's IAS Academy provides structured guidance, expert mentorship, and a peer learning environment that significantly boosts your preparation.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-badge">FAQ</span>
          <h2 className="faq-title">Best UPSC Coaching FAQs</h2>
          <p className="faq-subtitle">
            Find answers to the most commonly asked questions about UPSC
            preparation and our coaching programs.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              id={`faq-item-${index}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                id={`faq-btn-${index}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" className="faq-icon-v" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
