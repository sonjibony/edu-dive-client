import React from 'react';

import { Link, useLoaderData } from 'react-router-dom';
import {FaDownload, FaArrowRight } from 'react-icons/fa';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    return (
        <div>
          <h1 className='mt-4' style={{color:"#fd5e2a"}} >{courseDetails.name} <FaDownload></FaDownload> </h1>
          <div className='d-flex align-items-center gap-3 mt-5 mb-4'>
          <div>
          <img className='img-fluid' src={courseDetails.img}  alt=""></img>
          </div>
         <div className='text-start'>
           
            <h4 className='mb-3'>Instructor: {courseDetails.instructor}</h4>
            <h4 className='mb-3'>Price: {courseDetails.price}$</h4>
            <h4 className='mb-3'>Views: {courseDetails.views}K</h4>
            <button style={{backgroundColor:"#fd5e2a", fontWeight:"bold"}} className='btn mb-3 text-light '>Get Premium Access</button>

         </div>
         
            </div>
            <div>

<h4>Course Description</h4>
<hr />
<p className='text-justify fs-5'>{courseDetails.description}</p>
</div>
<Link to='/courses'>
<button style={{backgroundColor:"#fd5e2a", fontWeight:"bold"}} className='btn mb-3 text-light '>Go Back <FaArrowRight></FaArrowRight> </button>
</Link>
        </div>
    );
};

export default CourseDetails;