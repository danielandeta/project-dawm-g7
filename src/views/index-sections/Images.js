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


                  src={require("assets/img/merm2.jpg").default}
                  class="img-fluid"
                  height="auto"
  

                ></img>
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
}

export default Images;
