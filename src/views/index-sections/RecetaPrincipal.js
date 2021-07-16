import React from "react";


// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Index from "views/Index";

import "assets/demo/demo.css?v=1.5.0";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">Recetas</h3>
            <h5 className="description">
            Descubre las mejores recetas usando nuestras mermeladas B' Natural 
            — Puedes seleccionar el nombre de la mermelada para que te indique su ubicación dentro de nuestro Catálogo. 
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                         onClick={(e) => {
                           e.preventDefault();
                           setPills("1");
                         }}
                      >
                        <i className="now-ui-icons ui-2_favourite-28"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <div className="img_cont">
                        
                            <img
                            alt="..."
                            className="img-raised" className="img-recipe"
                            src={require("assets/img/brownie.jpg").default}
                          ></img>
                       
                    
                        <div className="overlay">
                         <Link to="/BrownieReceta"><figcaption className="texto">Brownie de Banana</figcaption></Link>
                        </div>
                       
                        
                      </div>
                      <div className="img_cont">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/cheesecake.jpg").default}
                        ></img> 
                        <div className="overlay">
                        <Link to="/CheesecakeReceta"><figcaption className="texto1">Cheescake de Frutilla</figcaption></Link>
                        </div>
                        </div>
                      </Col>
                      <Col md="6">
                      <div className="img_cont">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/quesocrema.jpg").default}
                        ></img>
                        <div className="overlay">
                        <Link to="/QuesoCremaReceta"><figcaption className="texto2">Queso crema con mermelada</figcaption> </Link>
                        </div>
                         </div>
                        <div className="img_cont">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/cookies.jpg").default}
                        ></img>
                         <div className="overlay">
                         <Link to="/GalletasReceta"> <figcaption className="texto3">Galletas con Mermelada</figcaption></Link>
                         </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>

              </TabContent>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default ProfilePage;
