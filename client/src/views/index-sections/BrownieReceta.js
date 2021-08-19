
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
import "assets/demo/demo.css?v=1.5.0";
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
        return "Mezclar los ingredientes secos: la harina de avena, cacao y el polvo de hornear.";
      case 1:
        return "Añadir la leche en la mezcla poco a poco, mientras se sigue batiendo.";
      case 2:
        return "Vaciar el puré de banana en el recipiente y agregar la panela, mezclar hasta que se vuelva una masa homogénea.";
      case 3:
        return "Con el horno previamente precalentado a 180º, horneamos nuestro brownie durante 20-25min.";
      case 4:
        return "Dejar enfriar y servir junto con la mermelada de manzana B’ Natural.";
  
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
                <h2 className="title">Brownie de Banana</h2>
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

 