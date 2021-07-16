
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
                <h2 className="title">Queso Crema con Mermelada</h2>
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
                        <p> Trituramos con la ayuda de un tenedor o de una batidora las galletas tipo María dorada en un recipiente.</p>
                      </div>
                      <div class='tab tab-1'>
                        <h1>Segundo Paso</h1>
                        <p>Rellenamos el fondo de cada vasito con las galletas bien trituradas, y a continuación le ponemos el queso crema. </p>
                      </div>
                      <div class='tab tab-2'>
                        <h1>Tercer Paso</h1>
                        <p>Sobre éste, ponemos una capa de mermelada B’ Natural, galletas de nuevo, queso crema y otra buena capa de mermelada.</p>
                      </div>
                      <div class='tab tab-3'>
                        <h1>Cuarto Paso</h1>
                        <p>	Por último, decoramos nuestros vasitos con unas almendras.</p>
                      </div>
                      <div class='tab tab-4'>
                        <h1>Quinto Paso</h1>
                        <p>	Dejamos que los vasitos reposen en la nevera aproximadamente una hora y servir.</p>
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

 