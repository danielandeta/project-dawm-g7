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
<<<<<<< HEAD
                  src={require("assets/img/merm_principal.png").default}
                  class="img-fluid"
                  height="auto"
=======
                  alt="..."
                  src={require("assets/img/m_dos.png").default}
>>>>>>> 03555b9c531e9bdf7a5539d16bc3e679bce4b3a3
                ></img>
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
}

export default Images;
