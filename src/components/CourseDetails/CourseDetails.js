import React from "react";

import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
//importing react-to-pdf
import ReactToPdf from "react-to-pdf";
const CourseDetails = () => {
  const courseDetails = useLoaderData();
  return (
    <ReactToPdf>
      {({ toPdf, targetRef }) => (
        <div>
          <h1 className="mt-4" style={{ color: "#fd5e2a" }}>
            {courseDetails.name} <FaDownload onClick={toPdf}></FaDownload>{" "}
          </h1>

          <div
            className="d-lg-flex align-items-center  mt-4 mx-auto  pt-3 rounded"
            style={{ backgroundColor: "#F2F3F7", width: "95%" }}
          >
            <div>
              <img
                src="https://educator-hub.netlify.app/assets/images/banner-img.png"
                alt=""
                className="img-fluid"
              ></img>
            </div>
            <div className="mt-2 p-3">
              <h3 style={{ color: "#FD5E2A", fontWeight: "bolder" }}>
                {courseDetails.name}{" "}
              </h3>
              <p className="fs-6">
                This is the basic course of {courseDetails.name}. You can see
                all the details and course description here.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3 mt-5 mb-4">
            <div>
              <img className="img-fluid" src={courseDetails.img} alt=""></img>
            </div>
            <div className="text-start">
              <h5 className="mb-3">Instructor: {courseDetails.instructor}</h5>
              <h5 className="mb-3">Price: {courseDetails.price}$</h5>
              <h5 className="mb-3">Views: {courseDetails.views}K</h5>
              <Link to={`/checkout/${courseDetails.id}`}>
                <button
                  style={{ backgroundColor: "#fd5e2a", fontWeight: "bold" }}
                  className="btn mb-3 text-light "
                >
                  Get Premium Access
                </button>
              </Link>
            </div>
          </div>
          <div ref={targetRef}>
            <div>
              <h4>Course Description of {courseDetails.name}</h4>
              <hr />
              <p className="text-justify fs-5">{courseDetails.description}</p>
            </div>
          </div>
        </div>
      )}
    </ReactToPdf>
  );
};

export default CourseDetails;
