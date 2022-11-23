import React from "react";

const Missions = () => {
  return (
    // FEATURES AND MISSION SECTION

    <div
      className="d-lg-flex  align-items-center justify-content-center mt-5 mb-5 text-light text-start "
      style={{ backgroundColor: "#050e38" }}
    >
      <div className="p-5 w-75  ">
        <h5 className="text-white">WE OFFER</h5>
        <h1 style={{ color: "#fd5e2a" }}>See What Our Core Features Are</h1>
        <div className="d-flex flex-wrap align-items-center gap-3 mb-4 mt-4">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/327/327131.png"
              alt=""
              style={{ height: "70px" }}
            ></img>
          </div>
          <div>
            <h5 className="text-white">Student Life</h5>
            <p>
              This course will help you in your student life specially if your
              major is computer science.
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3200/3200651.png"
              alt=""
              style={{ height: "70px" }}
            ></img>
          </div>
          <div>
            <h5 className="text-white">24x7 Active</h5>
            <p>
              You will find us giving services 24 hours. Our mentors will always
              be there for you.
            </p>
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3195/3195496.png"
              alt=""
              style={{ height: "70px" }}
            ></img>
          </div>
          <div>
            <h5 className="text-white"> Best Online Class</h5>
            <p>
              We can assure you that our courses will not disappoint you. We
              offer the best we can give.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="w-50 me-4 mb-4 ps-5 pb-2">
        <img
          src="https://educator-hub.netlify.app/assets/images/coure-features-img.jpg"
          className="img-fluid rounded"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Missions;
