import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
//importing bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Login = () => {

 //state for error
 const [error, setError] = useState('')
    
 //
 const {providerLogin, signIn} = useContext(AuthContext) ; 
 const navigate = useNavigate();
 const location =useLocation();

 const from = location.state?.from?.pathname || '/';

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

//implementing sign in
const onSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then (result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, {replace: true});
    })
    .catch(error => {
        console.error(error)
        setError(error.message);
    })
}

    return (
        <Form onSubmit={onSubmit} className='container text-start mt-5 w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>
        
        
        <Button className='mb-3' variant="primary" type="submit">
          Login
        </Button> <br />
        {/* error msg */}
        
          <Button onClick={onGoogleSignIn} className='mb-3' variant="primary" type="submit">
          Google sign up
        </Button> <br />
        <Form.Text className="text-danger mb-2">
            {error}
          </Form.Text>
      </Form>
    );
};

export default Login;