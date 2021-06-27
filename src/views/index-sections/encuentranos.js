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
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import Redes from "./Redes.js";
import Map from "./Map.js";
import credentials from "./credentials.js"

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;


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
      <ExamplesNavbar />
      <div className="wrapper">
        <IndexNavbar />


        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Encuentranos</h2>
                <h5 className="description">
                  Aquí podrás encontrar la dirección donde estamos ubicados
                  y te mostramos las maneras de ponerte en contacto con
                  nosotros para realizarnos consultas y realizar alguna compra.
                  ¡Gracias por elegirnos!
                </h5>

                
              </Col>
            </Row>
          </Container>
        </div>
        
        
          <div>
            <Map
              googleMapURL = {mapURL}
              containerElement = {<div style={{height: '400px'}}/>}
              mapElement = {<div style={{height: '100%'}}/>}
              loadingElement = {<p>Cargando</p>}
            />
          </div>
       
      }

        
      
      
        
        <Redes />

        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
