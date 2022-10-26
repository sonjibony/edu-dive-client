import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RightSideNav.css'
const RightSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='mt-5 sticky-top ms-5'>
           <h3 className='pb-3 mb-4' style={{color:"#050e38", fontWeight:"bolder", borderBottom:"3px solid #fd5e2a"}} >CLICK TO SEE COURSE DETAILS</h3>
        
           <div className='courses'>
            {
                courses.map(course => <p key={course.id}>
                <Link to={`/courses/${course.id}`}>{course.name}</Link>
                </p> )
            }
           </div>
    
        </div>
    );
};

export default RightSideNav;