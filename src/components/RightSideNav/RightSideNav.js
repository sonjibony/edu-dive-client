import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const RightSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
           <h4>Click to see course in detail</h4>
           <hr />
           <div>
            {
                courses.map(course => <h5 key={course.id}>
                <Link to={`/courses/${course.id}`} className='text-decoration-none text-dark' >{course.name}</Link>
                </h5> )
            }
           </div>
    <Link to='/courses'>
           <Button variant="outline-danger">Go Back</Button>{' '}
</Link>
        </div>
    );
};

export default RightSideNav;