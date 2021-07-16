import React from "react";
import Iframe from "react-iframe";
import DarkFooter from "components/Footers/DarkFooter.js";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
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
                <h2 className="title">Encuentranos</h2>
                <h5 className="description">
                  Aquí podrás encontrar la dirección donde estamos ubicados
                  y te mostramos las maneras de ponerte en contacto con
                  nosotros para realizarnos consultas y realizar alguna compra.
                  ¡Gracias por elegirnos!
                </h5>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
              <Iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.899541431025!2d-80.08180438574122!3d-2.1917355379009886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d760a423e057d%3A0x79e14862a6fa6a26!2svilla%20espa%C3%B1a%202!5e0!3m2!1sen!2sec!4v1626067387990!5m2!1sen!2sec" 
              width="600" 
              height="450" 
              allowfullscreen="" 
              loading="lazy"
              className="mapa" />
              </Col>
            </Row> 
          </Container>
        </div>
        <DarkFooter />
    </>
       )
      }

export default LandingPage;
