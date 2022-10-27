import React from "react";

const Instructors = () => {
  //INSTRUCTORS SECTION
  return (
    <div>
      <h3
        className="mt-5"
        style={{ fontSize: "40px", color: "#FD5E2A", fontWeight: "bolder" }}
      >
        {" "}
        OUR EXPERT INSTRUCTORS{" "}
      </h3>

      <div className=" mt-5 d-flex flex-wrap justify-content-center gap-3">
        <div>
          <img
            src="https://educator-hub.netlify.app/assets/images/instructor-3.jpg"
            className="rounded"
            alt=""
          ></img>
          <h4 className="mt-3">Fiona Dean</h4>
        </div>
        <div>
          <img
            src="https://educator-hub.netlify.app/assets/images/instructor-2.jpg"
            alt=""
          ></img>
          <h4 className="mt-3">Camden David</h4>
        </div>
        <div>
          <img
            src="https://educator-hub.netlify.app/assets/images/instructor-4.jpg"
            alt=""
          ></img>
          <h4 className="mt-3">Cherish Sosa</h4>
        </div>
        <div>
          <img
            src="https://educator-hub.netlify.app/assets/images/instructor-1.jpg"
            alt=""
          ></img>
          <h4 className="mt-3">Louis Sullivan</h4>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
