import React, { useState, useRef, useEffect } from "react";

/* ─── Knowledge Base ─── */
const knowledge = {
  greeting: "Hello! 👋 I'm your AI Counselling Assistant. I can help you with:\n\n• **Course recommendations** based on your goals\n• **Exam preparation** strategies and tips\n• **Career guidance** for competitive exams\n• **Study schedule** and planning advice\n• **Fee & admission** information\n\nWhat would you like to know?",

  courses: {
    upsc: "🏛️ **UPSC CSE Course**\n\n• Duration: 12 Months\n• Mode: Online + Offline\n• Fee: ₹24,999\n• Covers: Prelims + Mains + Interview\n• Includes personal mentorship, answer writing practice, current affairs module, and mock interviews.\n\nWould you like to know about the syllabus, faculty, or admission process?",
    pcs: "📋 **PCS / UPPSC Course**\n\n• Duration: 10 Months\n• Mode: Online + Offline\n• Fee: ₹14,999\n• State-specific content with UP Special focus\n• Bilingual support (Hindi + English)\n\nThis is ideal if you're targeting state civil services.",
    ssc: "📝 **SSC CGL/CHSL Course**\n\n• Duration: 6 Months\n• Mode: Online + Offline\n• Fee: ₹7,999\n• Covers: Quant, English, Reasoning, GA\n• Speed building techniques and shortcut methods\n\nPerfect for government job aspirants!",
    neet: "🔬 **NEET Course**\n\n• Duration: 12 Months\n• Mode: Online + Offline\n• Fee: ₹19,999\n• NCERT-based approach with NTA pattern mocks\n• Chapter-wise DPPs and All India Test Series",
    jee: "⚡ **JEE Main + Advanced Course**\n\n• Duration: 12 Months\n• Mode: Online + Offline\n• Fee: ₹18,999\n• Concept-first approach with problem solving labs\n• Rank booster tests and expert faculty",
    ncert: "📚 **NCERT Foundation Course**\n\n• Duration: 6 Months\n• Mode: Online + Offline\n• Fee: ₹4,999\n• Comprehensive NCERT coverage\n• Chapter-wise tests and video lectures\n\nThis is the perfect starting point for any competitive exam!",
    judiciary: "⚖️ **Judiciary Preparation Course**\n\n• Duration: 8 Months\n• Mode: Online + Offline\n• Fee: ₹12,999\n• Constitutional Law, CrPC, IPC, CPC, Evidence Act\n• Case law analysis and legal writing practice",
  },

  preparation: {
    beginner: "📖 **Starting Your Journey? Here's a roadmap:**\n\n1. **Months 1-2**: Complete NCERT from Class 6-12 for all subjects\n2. **Months 3-4**: Start standard reference books alongside current affairs\n3. **Months 5-6**: Begin answer writing practice and mock tests\n4. **Months 7+**: Revision, test series, and exam-specific strategy\n\n💡 **Pro tip**: Start with our NCERT Foundation course — it builds the base for UPSC, PCS, SSC, and even judiciary!",
    answerwriting: "✍️ **Answer Writing Excellence using our 7-5-3 Framework:**\n\n• **7-mark answers**: Introduction → Body (3-4 points) → Conclusion → Diagram if applicable\n• **5-mark answers**: Crisp intro → 2-3 analytical points → Brief conclusion\n• **3-mark answers**: Direct definition → Key facts → One-line wrap-up\n\nOur AI-powered simulator evaluates your structure, content, and presentation in real-time!",
    currentaffairs: "📰 **Staying Updated with Current Affairs:**\n\n• Use our **Daily Snippet News** feature — bite-sized updates every morning\n• Focus on: Government schemes, International relations, Economy, Science & Tech\n• Revise monthly compilations before prelims\n• Link current events to static syllabus topics\n\nOur app sends notifications for must-know news daily!",
    timetable: "⏰ **Ideal Daily Study Schedule:**\n\n• **6:00-7:00 AM**: Current affairs + newspaper\n• **7:00-9:00 AM**: Subject study (focus area)\n• **10:00-1:00 PM**: Coaching / lectures\n• **2:00-4:00 PM**: Notes making + revision\n• **4:30-6:30 PM**: Practice questions + MCQs\n• **7:00-8:30 PM**: Answer writing practice\n• **9:00-10:00 PM**: Light revision + next day planning\n\n💡 Adjust based on your peak productivity hours!",
  },

  career: "🎯 **Career Paths through Competitive Exams:**\n\n• **UPSC CSE** → IAS, IPS, IFS, IRS (All India Services)\n• **State PCS** → SDM, DSP, BDO, Tehsildar\n• **SSC CGL** → Income Tax, Customs, CBI, Audit\n• **Judiciary** → Civil Judge, APO, District Judge\n• **NEET** → MBBS, BDS, Medical specializations\n• **JEE** → IITs, NITs, IIITs, Engineering\n\nWhich career path interests you? I can suggest the right course!",

  fees: "💰 **Our Course Fees & Payment Options:**\n\n| Course | Fee |\n|--------|-----|\n| NCERT Foundation | ₹4,999 |\n| NCERT Basic | ₹2,499 |\n| NCERT Advanced | ₹5,999 |\n| UPSC CSE | ₹24,999 |\n| PCS / UPPSC | ₹14,999 |\n| SSC CGL/CHSL | ₹7,999 |\n| NEET | ₹19,999 |\n| JEE Main+Adv | ₹18,999 |\n| Judiciary | ₹12,999 |\n\n✅ EMI options available\n✅ Scholarship for merit students\n✅ Free demo classes before enrollment",

  contact: "📞 **Get in Touch:**\n\n• **Phone**: Call us for instant counselling\n• **WhatsApp**: Quick chat support\n• **Visit**: Walk in to our nearest branch\n• **Website**: Explore courses at our website\n\nYou can also visit our Contact Us page for detailed branch addresses and maps!",

  fallback: "I understand you're looking for guidance! Let me help you better. Could you tell me:\n\n1. Which **exam** are you preparing for?\n2. What's your **current preparation level**? (Beginner / Intermediate / Advanced)\n3. Are you looking for **course info**, **study tips**, or **career guidance**?\n\nFeel free to ask anything — I'm here to help! 😊",
};

/* ─── Intent Matching ─── */
function getResponse(input) {
  const msg = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|greetings|namaste|hii+)/.test(msg)) {
    return knowledge.greeting;
  }

  // Specific courses
  if (/upsc|ias|ips|civil.?service/.test(msg)) return knowledge.courses.upsc;
  if (/pcs|uppsc|state.?pcs|state.?service/.test(msg)) return knowledge.courses.pcs;
  if (/ssc|cgl|chsl|staff.?selection/.test(msg)) return knowledge.courses.ssc;
  if (/neet|medical|mbbs|doctor/.test(msg)) return knowledge.courses.neet;
  if (/jee|iit|engineering|nit/.test(msg)) return knowledge.courses.jee;
  if (/ncert|foundation|basic/.test(msg)) return knowledge.courses.ncert;
  if (/judiciary|judge|law|legal|court/.test(msg)) return knowledge.courses.judiciary;

  // General course inquiry
  if (/course|program|batch|class|coaching|enroll|join|admission/.test(msg)) {
    return "We offer 9 comprehensive programs:\n\n📚 **NCERT Foundation / Basic / Advanced**\n🏛️ **UPSC CSE**\n📋 **PCS / UPPSC**\n📝 **SSC CGL/CHSL**\n🔬 **NEET**\n⚡ **JEE Main + Advanced**\n⚖️ **Judiciary Preparation**\n\nWhich exam are you targeting? I can give you detailed info!";
  }

  // Preparation tips
  if (/begin|start|new|beginner|fresh|how.?to.?start|where.?to.?start|preparation.?begin/.test(msg)) {
    return knowledge.preparation.beginner;
  }
  if (/answer.?writ|essay|mains.?writ|7.?5.?3/.test(msg)) {
    return knowledge.preparation.answerwriting;
  }
  if (/current.?affair|news|newspaper|daily.?snippet/.test(msg)) {
    return knowledge.preparation.currentaffairs;
  }
  if (/schedule|timetable|routine|plan|time.?table|study.?plan|daily.?plan/.test(msg)) {
    return knowledge.preparation.timetable;
  }

  // Preparation general
  if (/prepar|study|tip|strategy|method|approach|guid|how.?to/.test(msg)) {
    return "📘 **Preparation Guidance:**\n\nI can help with:\n• **Getting started** → say 'beginner tips'\n• **Answer writing** → say 'answer writing'\n• **Current affairs** → say 'current affairs strategy'\n• **Daily schedule** → say 'study timetable'\n\nWhat specific aspect would you like help with?";
  }

  // Career
  if (/career|job|future|placement|after.?exam|salary|scope/.test(msg)) {
    return knowledge.career;
  }

  // Fees
  if (/fee|cost|price|money|payment|emi|scholarship|afford|charge/.test(msg)) {
    return knowledge.fees;
  }

  // Contact
  if (/contact|phone|call|visit|branch|address|location|office|whatsapp/.test(msg)) {
    return knowledge.contact;
  }

  // Features
  if (/feature|mind.?map|app|bot|doubt|metric|mentor|portal|snippet/.test(msg)) {
    return "🚀 **Our Unique Features:**\n\n• 🧠 **Interactive NCERT Mind-Maps** — Visual learning tools\n• ✍️ **7-5-3 Answer Writing Simulator** — AI-evaluated responses\n• 📱 **24x7 Learning App** — Study anytime, anywhere\n• 🤖 **AI Doubt Clearing Bot** — Instant answers\n• 📊 **Performance Metrics Portal** — Track your progress\n• 💬 **Mentorship Chatroom** — Direct access to toppers\n• 📰 **Daily Snippet News** — Bite-sized current affairs\n\nWould you like to know more about any specific feature?";
  }

  // Thanks
  if (/thank|thanks|thnk|thnx|ty/.test(msg)) {
    return "You're welcome! 😊 If you have any more questions about courses, preparation, or admissions, feel free to ask. We're here to support your journey to success! 🎯";
  }

  // Bye
  if (/bye|goodbye|see.?you|good night/.test(msg)) {
    return "Goodbye! All the best for your preparation! 🌟 Remember, consistent effort leads to success. Feel free to come back anytime you need guidance. 👋";
  }

  return knowledge.fallback;
}

/* ─── Quick Prompts ─── */
const quickPrompts = [
  "Tell me about UPSC courses",
  "How to start preparation?",
  "Course fees & scholarships",
  "Study timetable suggestion",
  "Career guidance",
];

/* ─── Component ─── */
const AICounselling = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: knowledge.greeting,
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const sendMessage = (text) => {
    const userMsg = text || input.trim();
    if (!userMsg) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMsg, time: new Date() },
    ]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const response = getResponse(userMsg);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: response, time: new Date() },
      ]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  /* Render markdown-like bold */
  const renderText = (text) => {
    return text.split("\n").map((line, i) => {
      // Bold
      const formatted = line.replace(
        /\*\*(.*?)\*\*/g,
        '<strong>$1</strong>'
      );
      return (
        <span key={i} dangerouslySetInnerHTML={{ __html: formatted }} />
      );
    }).reduce((acc, el, i) => {
      if (i === 0) return [el];
      return [...acc, <br key={`br-${i}`} />, el];
    }, []);
  };

  return (
    <div className="aic-overlay" onClick={onClose}>
      <div className="aic-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="aic-header">
          <div className="aic-header-info">
            <div className="aic-avatar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <h3 className="aic-header-title">AI Counsellor</h3>
              <span className="aic-header-status">
                <span className="aic-status-dot"></span>
                Online — Ready to help
              </span>
            </div>
          </div>
          <button className="aic-close" onClick={onClose} id="aic-close-btn" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="aic-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`aic-msg aic-msg-${msg.role}`}>
              {msg.role === "bot" && (
                <div className="aic-msg-avatar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 8V4H8" />
                    <rect x="2" y="2" width="20" height="20" rx="4" />
                    <path d="M2 12h20" />
                    <path d="M12 2v20" />
                  </svg>
                </div>
              )}
              <div className="aic-msg-bubble">
                <div className="aic-msg-text">{renderText(msg.text)}</div>
                <span className="aic-msg-time">{formatTime(msg.time)}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="aic-msg aic-msg-bot">
              <div className="aic-msg-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8V4H8" />
                  <rect x="2" y="2" width="20" height="20" rx="4" />
                  <path d="M2 12h20" />
                  <path d="M12 2v20" />
                </svg>
              </div>
              <div className="aic-msg-bubble aic-typing-bubble">
                <div className="aic-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        {messages.length <= 2 && (
          <div className="aic-quick-prompts">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                className="aic-quick-btn"
                onClick={() => sendMessage(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="aic-input-area">
          <input
            ref={inputRef}
            type="text"
            className="aic-input"
            placeholder="Ask anything about courses, preparation, careers..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            id="aic-input"
          />
          <button
            className="aic-send"
            onClick={() => sendMessage()}
            disabled={!input.trim()}
            id="aic-send-btn"
            aria-label="Send message"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICounselling;
