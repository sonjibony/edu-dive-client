import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../components/RightSideNav/RightSideNav';

const CoursesLayout = () => {
    return (
        <div>
    
          <Container>
            <Row>
                <Col lg="8">
                <Outlet></Outlet>
                </Col>
                <Col lg="4">
                <RightSideNav></RightSideNav>
                </Col>
            </Row>
          </Container>
        
        </div>
    );
};

export default CoursesLayout;