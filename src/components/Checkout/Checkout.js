import React from "react";
import {  Link, useLoaderData } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";

const Checkout = () => {
  //using loader to fetch api
  const checkoutInfo = useLoaderData();

  //checkout page
  return (
    <div className="container mt-4 mb-5">
      <h1 style={{ color: "#fd5e2a", fontSize: "40px" }} className="mb-4">
        {checkoutInfo.name}{" "}
      </h1>
      <div className="d-lg-flex justify-content-evenly gap-4 align-items-center mb-4">
        <div className="text-start me-4">
          <p className="fs-4">
            {" "}
            <span className="fw-bold"> Product Code:</span> {checkoutInfo.code}
          </p>

          <p className="fs-4">
            <span className="fw-bold"> Course Cost:</span> {checkoutInfo.price}$
          </p>
          <p className="fs-4">
            {" "}
            <span className="fw-bold">Delivery Time:</span> {checkoutInfo.time}{" "}
          </p>
          <Link to="/courses">
            <button
              style={{ backgroundColor: "#fd5e2a", fontWeight: "bold" }}
              className="btn mb-3 text-light "
            >
              Go Back <FaArrowRight></FaArrowRight>{" "}
            </button>
          </Link>
        </div>
        <img
          style={{ height: "200px" }}
          src="https://cdn-icons-png.flaticon.com/512/3469/3469380.png"
          alt=""
        ></img>
      </div>
      <h3>Purchasing Information</h3>
      <hr />
      {/* <div className="d-flex flex-wrap justify-content-center gap-5">
        <p
          className="text-start text-muted fs-5 "
          style={{
            borderBottom: "1px solid grey",
            minWidth: "300px",
            paddingBottom: "8px",
          }}
        >
          First Name
        </p>
        <p
          className="text-start text-muted fs-5"
          style={{
            borderBottom: "1px solid grey",
            minWidth: "300px",
            paddingBottom: "8px",
          }}
        >
          Last Name
        </p>
      </div> */}
      {/* <div className="d-flex flex-wrap justify-content-center gap-5">
        <p
          className="text-start text-muted fs-5"
          style={{
            borderBottom: "1px solid grey",
            minWidth: "300px",
            paddingBottom: "8px",
          }}
        >
          Email Address
        </p>
        <p
          className="text-start text-muted fs-5"
          style={{
            borderBottom: "1px solid grey",
            minWidth: "300px",
            paddingBottom: "8px",
          }}
        >
          Phone Number
        </p>
      </div> */}
      <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control style={{border:"0px", borderRadius:"0px", borderBottom:"1px solid grey"}} type="text" placeholder="Enter you name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control style={{border:"0px", borderRadius:"0px", borderBottom:"1px solid grey"}} type="email" placeholder="Enter your email" />
       
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control style={{border:"0px", borderRadius:"0px", borderBottom:"1px solid grey"}} type="text" placeholder="Enter you mobile number" />
      </Form.Group>
      <h4>Choose Payment Method- </h4>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Credit Card" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Debit Card" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Mobile Payment" />
      </Form.Group>
      <button  style={{ backgroundColor: "#fd5e2a", fontWeight: "bold" }}
        className="btn mb-3 mt-3 text-light "  type="submit">
        Continue<FaArrowRight></FaArrowRight>{" "}
      </button>
    </Form>

      </div>

    </div>
  );
};

export default Checkout;
