import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import Button
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  // Function to open the resume link
  const openResume = () => {
    const resumeLink = "import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap"; // Import Button
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  // Function to open the resume link
  const openResume = () => {
    const resumeLink = "https://drive.google.com/file/d/1ATyYaIgJgoQGXuxspDuVQ4dkBx3z0y7q/view?usp=sharing"; // Your resume link here
    window.open(resumeLink, "_blank", "noopener,noreferrer");
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
                  <a href={data.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            );
          })}
          {/* Adding a section for the resume */}
          <div className="po_item">
            <img
              src="https://via.placeholder.com/150" // Placeholder or image for the resume
              alt="Resume"
            />
            <div className="content">
              <p>My Resume</p>
              <Button onClick={openResume} variant="primary">
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
"; // Your resume link here
    window.open(resumeLink, "_blank", "noopener,noreferrer");
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
                  <a href={data.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </div>
            );
          })}
          {/* Adding a section for the resume */}
          <div className="po_item">
            <img
              src="https://via.placeholder.com/150" // Placeholder or image for the resume
              alt="Resume"
            />
            <div className="content">
              <p>My Resume</p>
              <Button onClick={openResume} variant="primary">
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
