import React from 'react'


const Course = ({ title, id }) => {
  return (
    <div className='course'>
      <div className='courseImage'>
        <h1>{id}</h1>
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
          <Course title="Course 1" id="1" />
          <Course title="Course 2" id="2" />
          <Course title="Course 3" id="3" />
          <Course title="Course 4" id="4" />
          <Course title="Course 5" id="5" />
          <Course title="Course 6" id="6" />
          <Course title="Course 7" id="7" />
          <Course title="Course 8" id="8" />
          <Course title="Course 9" id="9" />
        </div>
      </div>
    </>
  )
}

export default Courses