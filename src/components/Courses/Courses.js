import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard'
const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    console.log(courses)
    return (
        <div  >
            <h3>OUR ONLINE COURSES</h3>
            <h1>Find The Right Online Course For You</h1>
            <img src={'courses.img'} alt=""></img>
            <div className="row g-4" >
            {
                courses.map(course => <CourseCard 
                key={course.name}
                course ={course}
                ></CourseCard> )
            }
            </div>
        </div>
    );
};

export default Courses;