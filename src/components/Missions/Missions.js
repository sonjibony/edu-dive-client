import React from 'react';

const Missions = () => {
    return (
        
          
          <div className='d-flex flex-sm-column flex-lg-row align-items-center mt-5 mb-5 text-light text-start ' style={{backgroundColor:"#050e38"}}>
            < div className='p-5 w-75  '>
            <h5>CORE FEATURES</h5>
          <h1>See What Our Missions Are</h1>
          <div className='d-flex align-items-center gap-3 mb-4 mt-4'>
            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/327/327131.png" alt=""  style={{height:"70px"}}></img>


            </div>
            <div>
            <h5>Student Life</h5>
            <p>This course will help you in your student life specially if your major in computer science.</p> 
            </div>
            
          </div>
          <div className='d-flex align-items-center gap-3 mb-4'>
            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3200/3200651.png" alt=""  style={{height:"70px"}}></img>
 
            </div>
            <div>
            <h5>24x7 Program</h5>
            <p>You will find us giving services 24 hours. Our mentors will always be there for you.</p> 
            </div>
          </div>
          <div className='d-flex align-items-center gap-3 mb-4'>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3195/3195496.png" alt=""  style={{height:"70px"}}></img>
            </div>
            <div>
            <h5>Best Online Class</h5>
            <p>We can assure you that our courses will not disappoint you. We offer the best we can give. </p> 
            </div>
          </div>
         
            </div>
            <div className='w-50 me-4 mb-4' >
                <img src="https://educator-hub.netlify.app/assets/images/coure-features-img.jpg"  className='img-fluid'  alt=""></img>
            </div>
            </div>  
    
    );
};

export default Missions;