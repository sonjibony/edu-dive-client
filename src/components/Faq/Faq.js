import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { FaPlus } from "react-icons/fa";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ color: "#fd5e2a", border: "none", backgroundColor: "#F7F7F7" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
const Faq = () => {
  return (
    <div className="container mt-5 mb-5 w-75">
      <div className="text-start ">
        <h1
          style={{
            fontSize: "50px",
            borderBottom: "3px solid #fd5e2a",
            paddingBottom: "3px",
            marginBottom: "1",
          }}
        >
          FAQs
        </h1>

        <p className="fs-4 mt-0">
          Here are some frequently asked questions about{" "}
          <span style={{ color: "#fd5e2a", fontWeight: "bold" }}>EDU HIVE</span>
        </p>
      </div>

      <Accordion>
        <Card className="border-0 mb-3">
          <Card.Header className="d-flex justify-content-center gap-3 align-items-center">
            <CustomToggle eventKey="0" className="text-start">
              <FaPlus className="fs-4"></FaPlus>
            </CustomToggle>
            <h6>What is the minium order quantity?</h6>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {" "}
              <p className="fs-6">
                You can order as much as you want. Yes even one single course.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="border-0 mb-3">
          <Card.Header className="d-flex justify-content-center gap-3 align-items-center">
            <CustomToggle eventKey="1" className="text-start">
              <FaPlus className="fs-4"></FaPlus>
            </CustomToggle>
            <h6>How to access the course?</h6>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {" "}
              <p className="fs-6">
                You can access the course right after payment.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="border-0 mb-3">
          <Card.Header className="d-flex justify-content-center gap-3 align-items-center">
            <CustomToggle eventKey="3" className="text-start">
              <FaPlus className="fs-4"></FaPlus>
            </CustomToggle>
            <h6>What are your opening hours?</h6>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              You will be delighted to know that we are available 24/7.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="border-0 mb-3">
          <Card.Header className="d-flex justify-content-center gap-3 align-items-center">
            <CustomToggle eventKey="4" className="text-start">
              <FaPlus className="fs-4"></FaPlus>
            </CustomToggle>
            <h6>What is your cancelation policy?</h6>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p className="fs-6">
                Sorry we do not have that. Please think before you order. A
                course can not do any harm right?
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card className="border-0 mb-3">
          <Card.Header className="d-flex justify-content-center gap-3 align-items-center">
            <CustomToggle eventKey="5" className="text-start">
              <FaPlus className="fs-4"></FaPlus>
            </CustomToggle>
            <h6>Do you have any discount on shipping cost?</h6>
          </Card.Header>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              {" "}
              <p>
                We offer discount very frequently not only on shipping cost also
                on course prices. You can find news about discount in our blog
                section if it's going on.{" "}
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Faq;
