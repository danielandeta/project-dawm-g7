import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div className="hero-images-container">
                <img
                  alt="..."
                  src={require("assets/img/mermelada.png").default}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/Frutilla.jpg").default}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/Frutimora.jpg").default}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/Manzana.jpg").default}
                ></img>
              </div>
              <div className="hero-images-container-2">
                <img
                  alt="..."
                  src={require("assets/img/Piña.jpg").default}
                ></img>
              </div>
              <div className="hero-images-container-1">
                <img
                  alt="..."
                  src={require("assets/img/Sandía.jpg").default}
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
