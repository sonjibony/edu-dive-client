import React from 'react';
//importing accordion from react bootstrap
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
<div className='mt-4'>
    {/* <div className='d-lg-flex justify-content-between align-items-center'> */}
        <h1>WELCOME,</h1>
    <h3>I hope you find what are you looking for.</h3>
    
   {/* <img src="https://educator-hub.netlify.app/assets/images/banner-img.png" alt=""></img> */}
</div>

        <Accordion className='m-5'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>1.What is cors?</h5>
          </Accordion.Header>
          <Accordion.Body>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resource. So it is required to build web applications that access APIs hosted on a different domain or origin. You can enable CORS to allow requests to your API from a web application hosted on a different domain.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>2.Why do I use Firebase? What other options do I have to implement authentication?</h5>
          </Accordion.Header>
          <Accordion.Body>
          Firebase offers numerous easy-to-use SDKs, efficient back-end services, and user interface libraries for authenticating the users on the application. Typically, it takes months to establish a functional authentication process, but with Firebase, the whole system can be set up in minutes and less than 15 lines of code. <br /> <br />
          Parse, AWS AppSync, Firebase Cloud Messaging, MySQL, and Redis are the most popular alternatives and competitors to Firebase Realtime Database.

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header> <h5>3. How does the private route work?</h5></Accordion.Header>
          <Accordion.Body>
          Private routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route.The react private route component renders child components if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><h5>4. What is Node? How does it work?</h5></Accordion.Header>
          <Accordion.Body>
          Node is an open source development platform. It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind.It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <h3>Thanks for being here!</h3>
  </div>
    );
};

export default Blog;