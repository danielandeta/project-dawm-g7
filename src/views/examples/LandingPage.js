import React from "react";

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
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import "assets/demo/demo.css?v=1.5.0";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
    <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Brownie de Manzana</h2>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div>
                    <p className="blockquote blockquote-info">
                      "Invierte en productos naturales, ahorra en medicinas." <br></br>
                      <br></br>
                      <small>-B' Natural</small>
                    </p>
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/brownie.jpg").default + ")",
                    }}
                  ></div>
                  <h3>
                    Ingredientes
                  </h3>
                  <p>
                  -1 tz de harina de avena
                  <br></br>
                  -2 bananas en pure
                  <br></br>
                  -1 tz de leche
                  <br></br>
                  -1 cda de cacao
                  <br></br>
                  -1 cda de polvo para hornear
                  <br></br>
                  -2 cdas de panela
                  </p>                
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container> 
             <div class="stepper-wrapper">
              <div class="stepper-item completed">
                <div class="step-counter">1</div>
                <div class="step-name">Paso</div>
              </div>
              <div class="stepper-item completed">
                <div class="step-counter">2</div>
                <div class="step-name">Paso</div>
              </div>
              <div class="stepper-item active">
                <div class="step-counter">3</div>
                <div class="step-name">Paso</div>
              </div>
              <div class="stepper-item">
                <div class="step-counter">4</div>
                <div class="step-name">Paso</div>
              </div>
            </div> 
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
