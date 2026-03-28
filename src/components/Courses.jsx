import React from 'react'

const courseData = [
  { title: "NCERT", image: "/images/course_ncert.png" },
  { title: "NCERT BASIC", image: "/images/course_ncert.png" },
  { title: "UPSC", image: "/images/course_upsc.png" },
  { title: "PCS", image: "/images/course_pcs.png" },
  { title: "SSC", image: "/images/course_ssc.png" },
  { title: "NEET", image: "/images/course_neet.png" },
  { title: "JEE", image: "/images/course_jee.png" },
  { title: "JUDICIARY", image: "/images/course_pcs.png" },
  { title: "NCERT ADV", image: "/images/course_jee.png" },
];

const Course = ({ title, image }) => {
  return (
    <div className='course'>
      <div className='courseImage'>
        <img src={image} alt={title} />
      </div>
      <div className='courseDescription'>
        <p>{title}</p>
        <button className='courseButton'>ENROLL NOW</button>
      </div>
    </div>
  )
}

const Courses = () => {
  return (
    <>  
      <div className="courses">
        <h2 className="courses-heading">OUR COURSES</h2>
        <div className='coursesGrids'>
          {courseData.map((course, index) => (
            <Course key={index} title={course.title} image={course.image} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Courses