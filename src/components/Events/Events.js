import React from "react";

const Events = () => {
  //our events section
  return (
    <div
      className="mt-5 mb-5 d-lg-flex justify-content-center gap-4 "
      style={{ backgroundColor: "white" }}
    >
      <div className="mb-3">
        <img
          style={{ height: "500px" }}
          className="img-fluid rounded"
          src="https://educator-hub.netlify.app/assets/images/event-img.jpg "
          alt=""
        ></img>
      </div>
      <div className="ms-0">
        <h1 style={{ color: "#fd5e2a " }}>JOIN OUR UPCOMING EVENTS</h1>
        <div
          className="d-flex align-items-center justify-content-center gap-4 mb-3"
          style={{ maxWidth: "520px" }}
        >
          <div className="p-3 rounded" style={{ backgroundColor: "#f2f3f7" }}>
            <h1>28</h1>
            <h6>Oct,2022</h6>
          </div>
          <div className="text-start">
            <h5>10.30am | California</h5>
            <h3>Technology Creativity workshop</h3>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center gap-4 mb-3 "
          style={{ maxWidth: "450px" }}
        >
          <div className="p-3 rounded" style={{ backgroundColor: "#f2f3f7" }}>
            <h1>15</h1>
            <h6>Nov,2022</h6>
          </div>
          <div className="text-start">
            <h5>10.30am | Texas</h5>
            <h3>Street Fair and Performance</h3>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center gap-4 mb-3"
          style={{ Maxwidth: "500px" }}
        >
          <div className="p-3 rounded" style={{ backgroundColor: "#f2f3f7" }}>
            <h1>20</h1>
            <h6>Dec,2022</h6>
          </div>
          <div className="text-start">
            <h5>10.30am | Florida</h5>
            <h3>Digital transformation conference</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
