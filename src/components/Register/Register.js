import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
//importing bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

        //using context to get value
 const {providerLogin, createUser} = useContext(AuthContext) ; 

 //creating google provider
 const googleProvider = new GoogleAuthProvider()

//implementing google sign in
const onGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error))
}

//implementing registration
const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name,password,email,photoURL)

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.error(error));


}

    return (
        <Form onSubmit={onSubmit}  className='container text-start mt-3 w-50'>
            <h1 className='text-center'>Registration</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control className='mb-3' name="name" type="text" placeholder="Enter your full name" />
          <Form.Label>Photo URL</Form.Label>
          <Form.Control className='mb-3' name="photoURL" type="text" placeholder="Enter your photo URL" />
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        
        
        <Button className='mb-3' variant="primary" type="submit">
          Register
        </Button> <br />
        {/* error msg */}
        
          <Button onClick={onGoogleSignIn} className='mb-3' variant="primary" type="submit">
          Google sign up
        </Button> <br />
        <Form.Text className="text-danger mb-2">
            error
          </Form.Text>
      </Form>
    );
};

export default Register;