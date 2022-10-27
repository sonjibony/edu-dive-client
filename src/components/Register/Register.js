import React, { useContext, useState } from "react";
//importing bootstrap components
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");

  //using context to get value
  const { createUser, updateUserProfile, onSetUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //implementing registration
  const onRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        setError("");
        form.reset();
        navigate(from, { replace: true });

        onUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const onUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((e) => {
        onSetUser(auth?.currentUser || {});
      })
      .catch((error) => console.error(error));
  };

  return (
    <Form onSubmit={onRegister} className="container text-start mt-3 w-50">
      <h1 className="text-center">Registration</h1>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          className="mb-3"
          name="name"
          type="text"
          placeholder="Enter your full name"
        />

        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          className="mb-3"
          name="photoURL"
          type="text"
          placeholder="Enter your photo URL"
        />

        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <p>
        Already have an account? Then <Link to="/login">Log in</Link>.
      </p>
      <Form.Text className="text-danger mb-2">{error}</Form.Text>
      <br />
      <Button className="mb-3" variant="primary" type="submit">
        Register
      </Button>{" "}
      <br />
    </Form>
  );
};

export default Register;
