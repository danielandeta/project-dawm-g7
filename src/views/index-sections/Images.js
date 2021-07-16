import React from "react";
import './style.css';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  src={require("assets/img/m_dos.png").default}
                  class="img-fluid"
                  height="auto"
                  alt="..."
                ></img>
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
}

export default Images;
