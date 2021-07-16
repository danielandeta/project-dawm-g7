
import React from 'react';


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
                <h2 className="title">Galletas con Mermelada</h2>
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
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
          <body> 
            
              <div class='progress'>
                  <div class='progress_inner'>
                    <div class='progress_inner__step'>
                      <label for='step-1'>Primer Paso</label>
                    </div>
                    <div class='progress_inner__step'>
                      <label for='step-2'>Segundo Paso</label>
                    </div>
                    <div class='progress_inner__step'>
                      <label for='step-3'>Tercer Paso</label>
                    </div>
                    <div class='progress_inner__step'>
                      <label for='step-4'>Cuarto Paso</label>
                    </div>
                    <div class='progress_inner__step'>
                      <label for='step-5'>Quinto Paso</label>
                    </div>
                   
                    <input checked='checked' id='step-1' name='step' type='radio'/>
                    <input id='step-2' name='step' type='radio'/>
                    <input id='step-3' name='step' type='radio'/>
                    <input id='step-4' name='step' type='radio'/>
                    <input id='step-5' name='step' type='radio'/>
                   
                    <div class='progress_inner__bar'></div>
                    <div class='progress_inner__bar--set'></div>
                    <div class='progress_inner__tabs'>
                      <div class='tab tab-0'>
                        <h1>Primer Paso</h1>
                        <p>Poner en un bol la mantequilla en pomada (ablandada) y el azúcar, batir hasta que la mantequilla esté muy cremosa. Añadir el huevo y volver a batir hasta que se integre.</p>
                      </div>
                      <div class='tab tab-1'>
                        <h1>Segundo Paso</h1>
                        <p>Incorporar la harina y añadir también el extracto de vainilla (opcional), empezar a mezclar con una lengua o rasqueta de repostería hasta obtener una masa fina, homogénea y maleable. </p>
                      </div>
                      <div class='tab tab-2'>
                        <h1>Tercer Paso</h1>
                        <p>Preparar la bandeja del horno cubriéndola con papel vegetal o una lámina de teflón y precalentar el horno a 180º C. Haz bolas de unos 20-25 gramos de masa, aplánalas ligeramente y ve colocándolas en la bandeja. A continuación, hunde el dedo pulgar en el centro de las galletas haciendo un agujero para poner el relleno de mermelada.</p>
                      </div>
                      <div class='tab tab-3'>
                        <h1>Cuarto Paso</h1>
                        <p>Preparar la mermelada que quiera utilizar, conviene que no esté muy dura, por lo que quizá es necesario dejarla fuera de la nevera un rato antes. Rellenar con la mermelada B’ Natural de su sabor preferido las galletas antes de introducirlas en el horno.</p>
                      </div>
                      <div class='tab tab-4'>
                        <h1>Quinto Paso</h1>
                        <p>Poner la bandeja con las galletas en el horno, a altura media, y hornéalas durante 15-18 minutos, hasta que estén hechas, aunque quedarán algo blancas. Retirar del horno, dejar enfriar y ubicar la mermelada B’ Natural de su preferencia. Ya están listas para servir y disfrutar.</p>
                      </div>
                      
                    </div>
                    <div class='progress_inner__status'>
                      <div class='box_base'></div>
                      <div class='box_lid'></div>
                      <div class='box_ribbon'></div>
                      <div class='box_bow'>
                        <div class='box_bow__left'></div>
                        <div class='box_bow__right'></div>
                      </div>
                      <div class='box_item'></div>
                      <div class='box_tag'></div>
                      <div class='box_string'></div>
                    </div>
                  </div>
               </div>                
             </body>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;

 