import React, { useState, useEffect } from 'react';
import { hasConflict, terms, days, courseConflict, getCourseTerm, timeConflict } from '../utilities/times.js';
import Course from './Course';



const scheduleChanged = (selected, courses) => (
  selected.some(course => course !== courses[course.id])
);

const CourseList = ({ courses }) => {
  const [term, setTerm] = useState('Fall');
  const [selected, setSelected] = useState([]);

  if (scheduleChanged(selected, courses)) {
    setSelected([])
  };
  
  const termCourses = Object.values(courses).filter(course => term === getCourseTerm(course));
  
  return (
    <>
      <TermSelector term={term} setTerm={setTerm} />
      <div className="course-list">
      { 
        termCourses.map(course =>
          <Course key={ course.id } course={ course }
            selected={selected} setSelected={ setSelected } 
          />) 
      }
      </div>
    </>
  );
};

const TermSelector = ({ term, setTerm }) => (
    <div className="btn-group">
        {
            Object.values(terms).map(value => (
                <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
            ))
        }
    </div>
);






const TermButton = ({ term, setTerm, checked }) => (
    <>
        <input type="radio" id={term} className="btn-check" checked={checked} autoComplete="off"
            onChange={() => setTerm(term)} />
        <label class="btn btn-success m-1 p-2" htmlFor={term}>
            {term}
        </label>
    </>
);

export default CourseList;


