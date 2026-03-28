import React from "react";

const Page2 = () => {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      // description: "Learn the basics",
      icon: "📚",
      image: "/images/c1.jpeg",
    },
    {
      id: 2,
      title: "Course 2",
      // description: "Advanced concepts",
      icon: "💻",
      image: "/images/c2.jpeg",
    },
    {
      id: 3,
      title: "Course 3",
      // description: "Practical skills",
      icon: "🔧",
      image: "/images/c3.jpeg",
    },
    {
      id: 4,
      title: "Course 4",
      // description: "Expert training",
      icon: "⭐",
      image: "/images/c4.jpeg",
    },
    {
      id: 5,
      title: "Course 5",
      // description: "Web development",
      icon: "🌐",
      image: "/images/c5.jpeg",
    },
    {
      id: 6,
      title: "Course 6",
      // description: "Mobile apps",
      icon: "📱",
      image: "/images/c6.jpeg",
    },
    {
      id: 7,
      title: "Course 7",
      // description: "Data science",
      icon: "📊",
      image: "/images/c7.jpeg",
    },
    {
      id: 8,
      title: "Course 8",
      // description: "AI & ML",
      icon: "🤖",
      image: "/images/c8.jpeg",
    },
  ];

  return (
    <div className="page2">
      <div className="courses">Our Courses</div>
      <div className="course-cards">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card"
            style={{ backgroundImage: `url(${course.image})` }}
          >
            <div className="course-overlay"></div>
            <div className="course-content">
              <div className="course-icon">{course.icon}</div>
              <h3 className="course-title">{course.title}</h3>
              <p className="course-desc">{course.description}</p>
              <button className="course-btn">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
