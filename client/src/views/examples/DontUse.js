
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
                <h2 className="title">Brownie de Banana</h2>
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
                        <p> Mezclar los ingredientes secos: la harina de avena, cacao y el polvo de hornear.</p>
                      </div>
                      <div class='tab tab-1'>
                        <h1>Segundo Paso</h1>
                        <p> Añadir la leche en la mezcla poco a poco, mientras se sigue batiendo. </p>
                      </div>
                      <div class='tab tab-2'>
                        <h1>Tercer Paso</h1>
                        <p>	Vaciar el puré de banana en el recipiente y agregar la panela, mezclar hasta que se vuelva una masa homogénea. </p>
                      </div>
                      <div class='tab tab-3'>
                        <h1>Cuarto Paso</h1>
                        <p>	Con el horno previamente precalentado a 180º, horneamos nuestro brownie durante 20-25min.</p>
                      </div>
                      <div class='tab tab-4'>
                        <h1>Quinto Paso</h1>
                        <p>	Dejar enfriar y servir junto con la mermelada de manzana B’ Natural.</p>
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

 {/* <div class="stepper-wrapper">
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
            </div>  */}