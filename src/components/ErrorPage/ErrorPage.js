import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
const ErrorPage = () => {
    return (
// 404 PAGE WITH IMAGE AND MESSAGE
<div className="d-lg-flex align-items-center me-5 ms-5 mt-3">
<div>
  <h1 style={{color:"#67349e", fontSize:"70px"}}>ERROR!</h1>
  <p className="fs-5">
    I have searched high and low
    but could not find what you're looking for.Lets head home...
  </p>
  <Link to="/">
    <button className="btn" style={{backgroundColor:"#b8f95d", fontWeight:"bold"}}  >Go Home</button>
  </Link>
</div>
<img className='img-fluid'
  src={"https://img.freepik.com/free-vector/traffic-sign-page-404-found-flat-illustration_80328-232.jpg?w=996&t=st=1666716951~exp=1666717551~hmac=817f67b735e21530c77390dc42a55e9bd0aec6af4a633792801968322a01d561"
    
  }
  alt=""
></img>
</div>
    );
};

export default ErrorPage;