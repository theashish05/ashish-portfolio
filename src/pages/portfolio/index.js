import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Function to open the resume modal
  const openResumeModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={data.description} />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
              </div>
            );
          })}
          {/* Adding a resume section */}
          <div className="po_item">
            <img
              src="https://via.placeholder.com/150"
              alt="Resume"
            />
            <div className="content">
              <p>My Resume</p>
              <Button onClick={openResumeModal} variant="primary">
                View Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Modal for viewing the resume */}
        {showModal && (
          <div className="po_modal" onClick={closeModal}>
            <div className="po_modal_content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <iframe
                src="https://drive.google.com/file/d/1ATyYaIgJgoQGXuxspDuVQ4dkBx3z0y7q/preview"
                title="Resume"
                style={{ width: "100%", height: "500px" }}
              ></iframe>
            </div>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
