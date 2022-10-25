import React from 'react';

import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    return (
        <div>
          <h1>{courseDetails.name} </h1>
          <div className='d-lg-flex gap-4 mt-5 mb-4'>
          <div>
          <img src={courseDetails.img}  alt=""></img>
          </div>
          <div>

          <h5>Course Description</h5>
          <hr />
<p>{courseDetails.description}</p>
          </div>
         
            </div>
        </div>
    );
};

export default CourseDetails;