
import React from 'react';
import ReactDOM from 'react-dom';
import Step from './Step';



// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
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
      return "Poner en un bol la mantequilla en pomada (ablandada) y el azúcar, batir hasta que la mantequilla esté muy cremosa. Añadir el huevo y volver a batir hasta que se integre.";
    case 1:
      return "Incorporar la harina y añadir también el extracto de vainilla (opcional), empezar a mezclar con una lengua o rasqueta de repostería hasta obtener una masa fina, homogénea y maleable.";
    case 2:
      return "Preparar la bandeja del horno cubriéndola con papel vegetal o una lámina de teflón y precalentar el horno a 180º C. Haz bolas de unos 20-25 gramos de masa, aplánalas ligeramente y ve colocándolas en la bandeja. A continuación, hunde el dedo pulgar en el centro de las galletas haciendo un agujero para poner el relleno de mermelada.";
    case 3:
      return "Preparar la mermelada que quiera utilizar, conviene que no esté muy dura, por lo que quizá es necesario dejarla fuera de la nevera un rato antes. Rellenar con la mermelada B’ Natural de su sabor preferido las galletas antes de introducirlas en el horno.";
    case 4:
      return "Poner la bandeja con las galletas en el horno, a altura media, y hornéalas durante 15-18 minutos, hasta que estén hechas, aunque quedarán algo blancas. Retirar del horno, dejar enfriar y ubicar la mermelada B’ Natural de su preferencia. Ya están listas para servir y disfrutar.";

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
                <h2 className="title">Galletas con Mermelada</h2>
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
                  -120 gramos de mantequilla en pomada.
                  <br></br>
                  -120 gramos de azúcar.
                  <br></br>
                  -1 huevo.
                  <br></br>
                  -275 gramos de harina.
                  <br></br>
                  -c/n de extracto de vainilla.
                  <br></br>
                  -c/n de mermelada B'Natural preferida.
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

 