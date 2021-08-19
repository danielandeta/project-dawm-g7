
import React from 'react';
import Step from './Step';

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
//import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import "assets/demo/demo2.css?v=1.5.0";
import DarkFooter from 'components/Footers/DarkFooter';



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

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Trituramos con la ayuda de un tenedor o de una batidora las galletas tipo María dorada en un recipiente.";
    case 1:
      return "Rellenamos el fondo de cada vasito con las galletas bien trituradas, y a continuación le ponemos el queso crema.";
    case 2:
      return "Sobre éste, ponemos una capa de mermelada B’ Natural, galletas de nuevo, queso crema y otra buena capa de mermelada.";
    case 3:
      return "Por último, decoramos nuestros vasitos con unas almendras";
    case 4:
      return "Dejamos que los vasitos reposen en la nevera aproximadamente una hora y servir.";

    default:
      return "Paso desconocido";
  }
}

  
  return (
    <>
    <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Queso Crema con Mermelada</h2>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
              <Col md="6">
                  <div className="image-container image-left">
                    <p className="blockquote blockquote-info">
                      "Invierte en productos naturales, ahorra en medicinas." <br></br>
                      <br></br>
                      <small>-B' Natural</small>
                    </p>
                  </div>
                  <div className="image-container">
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/cheesecake.jpg").default + ")",
                    }}
                  ></div>
                  <h3>
                    Ingredientes
                  </h3>
                  <p>
                  -Una tarrina de queso crema 200g
                  <br></br>
                  -Un bote de mermelada B'Natural de su preferencia.
                  <br></br>
                  -20~25 galletas tipo María doradas
                  <br></br>
                  -Láminas de almendra para decorar
                  <br></br>
                  -6 vasitos
                
                  </p>                
               </Col>
                <Container>
                     <h3 className="text-left">Preparación</h3>
                      <Step getStepContent={getStepContent}/>                       
                  </Container>
              </Row>
                
            </div>
          </Container>  
        </div>
        <DarkFooter />
      </div>
    </>
  );
}


export default LandingPage;

 