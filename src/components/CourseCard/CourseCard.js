import React from 'react';
import Card from 'react-bootstrap/Card';




const CourseCard = ({course}) => {
    const {name, ratings, views, price, img,id} = course
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-6"  >
<Card>
    
      <Card.Body>
        <Card.Img  variant="top" src={img} />
        <Card.Title>{name}</Card.Title>

        <div className='d-flex justify-content-evenly'>
            <h6>{ratings}</h6>
            <h6>{views}</h6>
            <h6>{price}</h6>
        </div>
    
      </Card.Body>
    </Card>
        </div>
  
    );
};

export default CourseCard;