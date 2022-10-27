import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
        <div className='d-lg-flex align-items-center justify-content-evenly gap-4 text-start p-5' style={{backgroundColor:"#050e38", color:"white", padding:"40px",}}>
            <div style={{width:"300px"}}>
            <div className='d-flex align-items-center gap-2 ' >
               <img style={{height:"70px"}} src="https://cdn-icons-png.flaticon.com/512/3721/3721186.png" alt=""></img>
               <h3 className='text-white'>Edu Hive</h3>
            </div>
            <h6 className='mt-3 text-start text-white'>Edu Hive is a wellknown online based learning platform. We are in business for 4 years now.</h6>
            </div>
            <div >
<h3 className='text-white' >Our Link</h3>
<h6  > <Link className='text-white' to='/'>Home</Link> </h6>
<h6  > <Link className='text-white' to='/courses'>Courses</Link> </h6>
<h6> <Link className='text-white' to='/blog'>Blog</Link> </h6>
<h6 className='text-white'> Contact Us </h6>
<h6 className='text-white'> About Us </h6>
            </div>
            <div>
            <h3 className='text-white'>Other Link</h3>
<h6 > <Link className='text-white' to='/faq'>FAQ</Link> </h6>
<h6 className='text-white'>Instructors</h6>
<h6 className='text-white'>Event </h6>
<h6 className='text-white'>Privacy Policy</h6>
<h6 className='text-white' >Terms & Conditions</h6>
            </div>
            <div>
                <h3 className='text-white'>
                    Subscribe Now
                </h3>
                <button className='btn' style={{backgroundColor:"#fd5e2a"}}><FaSignInAlt className='text-white '></FaSignInAlt></button>
                <input className='pt-2 pb-3 ps-3 ms-2 rounded border-0' type="email" name="email" id="" placeholder='Email Address'  />

            </div>
            </div>
            <div className=' text-center p-3' style={{backgroundColor:"#020827"}}>
                <h6 className='text-white'>Copyright © 2022 <span style={{color:"#fd5e2a"}}>Sonjibony Wahid. </span>  All rights reserved.
 </h6>
            </div>
        </div>
    );
};
 
export default Footer;