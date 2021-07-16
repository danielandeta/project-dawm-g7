
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
                        <p> Hervir leche con cáscara de limón. Dejar reposar 15 minutos.</p>
                      </div>
                      <div class='tab tab-1'>
                        <h1>Segundo Paso</h1>
                        <p>	Mezclar las yemas con 250 gr de azúcar e incorporar a la leche. Volver al fuego la mezcla hasta hervir y agregar la gelatina previamente hidratada. </p>
                      </div>
                      <div class='tab tab-2'>
                        <h1>Tercer Paso</h1>
                        <p>	Agregar el queso y mezclar bien. Batir las claras a nieve con 50 gr de azúcar e incorporar a la mezcla anterior en 2 veces, con movimientos envolventes.</p>
                      </div>
                      <div class='tab tab-3'>
                        <h1>Cuarto Paso</h1>
                        <p>	Agregar la crema batida a 3/4 parte (o sea que no esté montada) y ubicarlo en un molde.</p>
                      </div>
                      <div class='tab tab-4'>
                        <h1>Quinto Paso</h1>
                        <p>	Después de refrigerar como mínimo por 4 horas, ubicar la mermelada B'Natural sobre el cheesecake. Desmoldar y decorar a gusto.</p>
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

 