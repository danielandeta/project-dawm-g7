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
      <IndexNavbar color="1" />
      <div className="section section-about-us">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="color-texto">Carrito</h2>
              <h5 className="description">
                En esta sección se encuentra el carrito de compras.
              </h5>
            </Col>
          </Row>
        </Container>
      </div>

      <body>
      <div class="container">
        <div class="row">
          <main id="items" class="col-sm-8 row"></main>
          <aside class="col-sm-4">
            <h2>Carrito</h2>
            <ul id="carrito" class="list-group"></ul>
            <p class="text-right">Total: <span id="total"></span>&euro;</p>
            <button id="boton-vaciar" class="btn btn-danger">Vaciar</button>
          </aside>
        </div>
      </div>
      </body>


        
      <DarkFooter />
    </>
     )
    }
    export default LandingPage;
