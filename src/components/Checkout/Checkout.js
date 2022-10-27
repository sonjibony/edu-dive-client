import React, {} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {FaArrowRight } from 'react-icons/fa';


const Checkout = () => {

const checkoutInfo = useLoaderData();

console.log(checkoutInfo)
    return (
        <div className='container mt-4 mb-5'>
            <h1 style={{color:"#fd5e2a", fontSize:"40px"}} className='mb-4'>{checkoutInfo.name} </h1>
            <div className='d-lg-flex justify-content-evenly gap-4 align-items-center mb-4'>
            <div className='text-start me-4'>
             <p className='fs-4'> <span className='fw-bold' > Product Code:</span> {checkoutInfo.code}</p>

             <p className='fs-4'><span className='fw-bold' > Course Cost:</span> {checkoutInfo.price}$</p>
             <p className='fs-4'> <span className='fw-bold'>Delivery Time:</span>  {checkoutInfo.time} </p>
             <Link to='/courses'>
<button style={{backgroundColor:"#fd5e2a", fontWeight:"bold"}} className='btn mb-3 text-light '>Go Back <FaArrowRight></FaArrowRight> </button>
</Link>
            </div>
            <img style={{height:"200px"}} src="https://cdn-icons-png.flaticon.com/512/3469/3469380.png" alt=""></img>
            </div>
            <h1>Purchasing Information</h1>
            <hr />
           <div className='d-flex flex-wrap justify-content-center gap-5'>
           <p className='text-start text-muted fs-5 ' style={{borderBottom:"1px solid grey", minWidth:"300px", paddingBottom:"8px"}}>First Name</p>
           <p className='text-start text-muted fs-5' style={{borderBottom:"1px solid grey", minWidth:"300px", paddingBottom:"8px"}}>Last Name</p>
            
           </div>
           <div className='d-flex flex-wrap justify-content-center gap-5'>
           <p className='text-start text-muted fs-5' style={{borderBottom:"1px solid grey", minWidth:"300px", paddingBottom:"8px"}}>Email Address</p>
           <p className='text-start text-muted fs-5' style={{borderBottom:"1px solid grey", minWidth:"300px", paddingBottom:"8px"}}>Phone Number</p>
            
           </div>
           <div>
           <h3  >Payment Methods -</h3>
           
        <input  type="checkbox" name="checkbox" id="" />
      <label className='fs-5 ms-2'>Credit Card</label>
      <br /> <br />
        <input  type="checkbox" name="checkbox" id="" />
      <label className='fs-5 ms-2'>Debit Card</label>
      <br /> <br />
        <input  type="checkbox" name="checkbox" id="" />
      <label className='fs-5 ms-2'>Mobile payment</label>

         </div>  
         <button style={{backgroundColor:"#fd5e2a", fontWeight:"bold"}} className='btn mb-3 mt-3 text-light '>Continue<FaArrowRight></FaArrowRight> </button> 
        </div>
    );
};

export default Checkout;