import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaEye , FaStar } from 'react-icons/fa';




const CourseCard = ({course}) => {
    const {name, ratings, views, price, img} = course
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-3"  >
<Card className='border-0 rounded ' style={{backgroundColor:"#F8F9FA"}} >
    
      <Card.Body>
        <Card.Img  variant="top" src={img} />
        <Card.Title className='mt-3 mb-3'>
           <h3>  {name}</h3>
            </Card.Title>
            <hr style={{height:"2px", backgroundColor:"#050e38", border:"none"}} />

        <div className='d-flex justify-content-evenly'>
        
           <h5>  <FaStar className='text-warning' ></FaStar> {ratings}</h5>
            
        
            <h5> <FaEye></FaEye>   {views}k</h5>
            <h5 style={{color:"#fd5e2a"}} >Price: ${price}</h5>
        </div>
    
      </Card.Body>
    </Card>
        </div>
  
    );
};

export default CourseCard;