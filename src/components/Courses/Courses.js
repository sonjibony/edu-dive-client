import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard'
const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    console.log(courses)
    return (
        <div  >
            <div className='text-start mt-5'>
            <h3 style={{color:"#050e38"}} >OUR ONLINE COURSES</h3>
            <h1  style={{color:"#fd5e2a", fontSize:"50px"}}>Find The Right Online Course For You</h1>  
            </div>

            {/* <img src={'courses.img'} alt=""></img> */}
            <div className="row g-4 mt-3" >
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