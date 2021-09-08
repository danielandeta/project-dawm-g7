import React from "react";
import Iframe from "react-iframe";
import DarkFooter from "components/Footers/DarkFooter.js";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function LandingPage() {
  return (
    <>
      <IndexNavbar color="1"/>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="color-texto">Carrito de compras</h2>
                <h5 className="description">
                  Aquí observará el carrito de compras de sus artículos.
                </h5>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
    </>
       )
      }

export default LandingPage;
