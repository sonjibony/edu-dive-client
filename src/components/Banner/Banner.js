import React from "react";

const Banner = () => {
  // HOME PAGE BANNER
  return (
    <div>
      <div
        className="d-lg-flex align-items-center  mt-4 mx-auto  pt-3 rounded"
        style={{ backgroundColor: "#F2F3F7", width: "95%" }}
      >
        <div>
          <img src="./about-img.png" alt="" className="img-fluid"></img>
        </div>
        <div className="mt-2 p-3">
          <h3>
            WELCOME TO{" "}
            <span style={{ color: "#FD5E2A", fontWeight: "bolder" }}>
              EDU DIVE
            </span>{" "}
          </h3>
          <h1
            style={{ fontSize: "50px", color: "#050E38", fontWeight: "bolder" }}
          >
            Get Classes From Top Instructors
          </h1>
          <h5>
            You can get the best quality of education through online. We have
            instructors who are skilled at what they do.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;
