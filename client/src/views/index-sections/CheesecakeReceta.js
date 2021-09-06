
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
import DarkFooter from "components/Footers/DarkFooter.js";

//import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import "assets/demo/demo2.css?v=1.5.0";



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
      return "Hervir leche con cáscara de limón. Dejar reposar 15 minutos.";
    case 1:
      return "Mezclar las yemas con 250 gr de azúcar e incorporar a la leche. Volver al fuego la mezcla hasta hervir y agregar la gelatina previamente hidratada.";
    case 2:
      return "Agregar el queso y mezclar bien. Batir las claras a nieve con 50 gr de azúcar e incorporar a la mezcla anterior en 2 veces, con movimientos envolventes.";
    case 3:
      return "Agregar la crema batida a 3/4 parte (o sea que no esté montada) y ubicarlo en un molde";
    case 4:
      return "Después de refrigerar como mínimo por 4 horas, ubicar la mermelada B'Natural sobre el cheesecake. Desmoldar y decorar a gusto.";

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
                <h2 className="title">Cheesecake de Frutilla</h2>
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
                  -300 ml. Leche
                  <br></br>
                  -300 grs. Azúcar
                  <br></br>
                  -3 Huevos
                  <br></br>
                  -2 cucharadas Gelatina sin sabor
                  <br></br>
                  -500 grs. Queso crema 
                  <br></br>
                  -300 ml. Crema de leche
                  <br></br>
                  Mermelada de Frutilla B’ Natural
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

 