import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
//importing bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
const Login = () => {

 //using context to get value
 const {providerLogin} = useContext(AuthContext) ; 

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

    return (
        <Form className='container text-start mt-5 w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        
        <Button className='mb-3' variant="primary" type="submit">
          Login
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

export default Login;